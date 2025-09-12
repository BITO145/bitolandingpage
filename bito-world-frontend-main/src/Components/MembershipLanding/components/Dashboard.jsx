// src/components/Dashboard/Dashboard.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import FormComponent from "./FormComponent";
import { ChevronDown } from "lucide-react";

// Font sizes for responsive design - using inline styles to avoid Tailwind conflicts
const FONT_SIZES = {
  learnMore: {
    mobile: { fontSize: '12px', lineHeight: '1.4' },
    tablet: { fontSize: '14px', lineHeight: '1.4' },
    desktop: { fontSize: '16px', lineHeight: '1.4' }
  },
  title: {
    mobile: { fontSize: '14px', lineHeight: '1.2', fontWeight: 'bold' },
    tablet: { fontSize: '18px', lineHeight: '1.2', fontWeight: 'bold' },
    desktop: { fontSize: '22px', lineHeight: '1.2', fontWeight: 'bold' }
  },
  description: {
    mobile: { fontSize: '12px', lineHeight: '1.5' },
    tablet: { fontSize: '14px', lineHeight: '1.5' },
    desktop: { fontSize: '16px', lineHeight: '1.5' }
  }
};

const CLASSES = {
  // global layout & grid base
  layout: {
    section: "py-20",
    container: "relative flex justify-center",
    containerLeft: "relative flex justify-center",
    containerPaddingWhenOpen: "pr-8",
    lotusWrapper:
      "flex justify-center items-center h-full col-span-2 row-span-2",
    lotusInner: "max-w-full",
    lotusImg: "block w-full",
  },

  // grid base + sizes
  grid: {
    base: "grid transition-all duration-300 relative",
    classes: {
      mobile:
        "grid-cols-[140px_45px_45px_140px] grid-rows-[120px_50px_50px_120px]",
      tablet:
        "grid-cols-[220px_80px_80px_220px] grid-rows-[220px_75px_75px_220px]",
      desktop:
        "grid-cols-[300px_100px_100px_300px] grid-rows-[200px_100px_100px_200px]",
    },
  },

  // Right-side form container
  form: {
    wrapper: "ml-6",
    card: "bg-white rounded-2xl shadow p-4",
  },

  /* -------------------------
     Industrial Growth - Top
     ------------------------- */
  industrial: {
    index: 0,
    wrapper: {
      mobile: "col-span-4 flex justify-center",
      tablet: "col-span-4 flex justify-center",
      desktop: "col-span-4 flex justify-center",
    },
    innerWrapper: {
      mobile: "w-1/2 flex flex-col items-center text-center justify-end",
      tablet:
        "w-1/2 sm:w-1/3 flex flex-col items-center text-center justify-end",
      desktop:
        "w-1/2 sm:w-1/3 flex flex-col items-center text-center justify-end",
    },
    card: {
      mobile:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 transition duration-300 group",
      tablet:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-3 transition duration-300 group",
      desktop:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 md:p-6 transition duration-300 group",
    },
    translate: { mobile: "", tablet: "", desktop: "" },
    learnMore: {
      mobile: "text-[#b27f49] group-hover:underline",
      tablet: "text-[#b27f49] group-hover:underline",
      desktop: "text-[#b27f49] group-hover:underline",
    },
    title: {
      mobile: "text-[#b27f49]",
      tablet: "text-[#b27f49]",
      desktop: "text-[#b27f49]",
    },
    description: {
      mobile: "text-gray-700 line-clamp-3",
      tablet: "text-gray-700 line-clamp-5",
      desktop: "text-gray-700 line-clamp-5",
    },

    // connector: container + parts
    connector: {
      mobile: "flex flex-col justify-center items-center mt-2",
      tablet: "flex flex-col justify-center items-center mt-2",
      desktop: "flex flex-col justify-center items-center mt-2",
    },
    // changed connectorParts from single strings to objects keyed by view
    connectorParts: {
      line: {
        mobile: "h-5 w-px bg-[#b27f49]",
        tablet: "h-8 w-px bg-[#b27f49]",
        desktop: "h-12 w-px bg-[#b27f49]",
      },
      dot: {
        mobile: "h-2 w-2 rounded-full bg-[#b27f49]",
        tablet: "h-2 w-2 rounded-full bg-[#b27f49]",
        desktop: "h-2 w-2 rounded-full bg-[#b27f49]",
      },
    },
  },

  /* --------------------------------
     Healthcare & Education - Left
     -------------------------------- */
  healthEducation: {
    index: 1,
    wrapper: {
      mobile: "row-span-2 flex justify-center items-start text-right",
      tablet: "row-span-2 flex justify-center items-start text-right",
      desktop: "row-span-2 flex justify-center items-start text-right",
    },
    card: {
      mobile:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 max-w-xs transition duration-300 group",
      tablet:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-3 max-w-xs transition duration-300 group",
      desktop:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 md:p-6 max-w-xs transition duration-300 group",
    },
    translate: {
      mobile: "-translate-y-8",
      tablet: "-translate-y-12",
      desktop: "-translate-y-8",
    },
    learnMore: {
      mobile: "text-[#b27f49] group-hover:underline",
      tablet: "text-[#b27f49] group-hover:underline",
      desktop: "text-[#b27f49] group-hover:underline",
    },
    title: {
      mobile: "text-[#b27f49]",
      tablet: "text-[#b27f49]",
      desktop: "text-[#b27f49]",
    },
    description: {
      mobile: "text-gray-700 line-clamp-3",
      tablet: "text-gray-700 line-clamp-5",
      desktop: "text-gray-700 line-clamp-5",
    },

    // connector container + parts (horizontal line + vertical group)
    connector: {
      mobile: "flex items-start mt-3 ml-2",
      tablet: "flex items-start mt-3 ml-2",
      desktop: "flex items-start mt-3 ml-2",
    },
    connectorParts: {
      horiz: {
        mobile: "w-2 h-px bg-[#b27f49]",
        tablet: "w-4 h-px bg-[#b27f49]",
        desktop: "w-12 h-px bg-[#b27f49]",
      },
      innerColumn: {
        mobile: "flex flex-col justify-start items-start",
        tablet: "flex flex-col justify-start items-start",
        desktop: "flex flex-col justify-start items-start",
      },
      innerLine: {
        mobile: "h-5 w-px bg-[#b27f49]",
        tablet: "h-8 w-px bg-[#b27f49]",
        desktop: "h-12 w-px bg-[#b27f49]",
      },
      innerDot: {
        mobile: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
        tablet: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
        desktop: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
      },
    },
  },

  /* --------------------------------
     Startup Incubation - Right
     -------------------------------- */
  startup: {
    index: 2,
    wrapper: {
      mobile: "row-span-2 flex justify-center items-start text-left",
      tablet: "row-span-2 flex justify-center items-start text-left",
      desktop: "row-span-2 flex justify-center items-start text-left",
    },
    connectorBefore: {
      mobile: "flex items-start mr-2 mt-3",
      tablet: "flex items-start mr-2 mt-3",
      desktop: "flex items-start mr-2 mt-3",
    },
    connectorParts: {
      column: {
        mobile: "flex flex-col justify-start items-end",
        tablet: "flex flex-col justify-start items-end",
        desktop: "flex flex-col justify-start items-end",
      },
      columnLine: {
        mobile: "h-5 w-px bg-[#b27f49]",
        tablet: "h-8 w-px bg-[#b27f49]",
        desktop: "h-12 w-px bg-[#b27f49]",
      },
      columnDot: {
        mobile: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
        tablet: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
        desktop: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
      },
      horiz: {
        mobile: "w-2 h-px bg-[#b27f49]",
        tablet: "w-4 h-px bg-[#b27f49]",
        desktop: "w-12 h-px bg-[#b27f49]",
      },
    },
    card: {
      mobile:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 max-w-xs transition duration-300 group",
      tablet:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-3 max-w-xs transition duration-300 group",
      desktop:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 md:p-6 max-w-xs transition duration-300 group",
    },
    translate: {
      mobile: "-translate-y-8",
      tablet: "-translate-y-12",
      desktop: "-translate-y-8",
    },
    learnMore: {
      mobile: "text-[#b27f49] group-hover:underline",
      tablet: "text-[#b27f49] group-hover:underline",
      desktop: "text-[#b27f49] group-hover:underline",
    },
    title: {
      mobile: "text-[#b27f49]",
      tablet: "text-[#b27f49]",
      desktop: "text-[#b27f49]",
    },
    description: {
      mobile: "text-gray-700 line-clamp-3",
      tablet: "text-gray-700 line-clamp-5",
      desktop: "text-gray-700 line-clamp-5",
    },
  },

  /* --------------------------------
     Green Growth - Bottom Left
     -------------------------------- */
  greenGrowth: {
    index: 3,
    wrapper: {
      mobile: "col-span-2 flex items-start text-right",
      tablet: "col-span-2 flex items-start text-right",
      desktop: "col-span-2 flex items-start text-right",
    },
    card: {
      mobile:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 transition duration-300 group",
      tablet:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-3 transition duration-300 group",
      desktop:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 md:p-6 transition duration-300 group",
    },
    translate: { mobile: "", tablet: "", desktop: "" },
    learnMore: {
      mobile: "text-[#b27f49] group-hover:underline",
      tablet: "text-[#b27f49] group-hover:underline",
      desktop: "text-[#b27f49] group-hover:underline",
    },
    title: {
      mobile: "text-[#b27f49]",
      tablet: "text-[#b27f49]",
      desktop: "text-[#b27f49]",
    },
    description: {
      mobile: "text-gray-700 line-clamp-3",
      tablet: "text-gray-700 line-clamp-5",
      desktop: "text-gray-700 line-clamp-5",
    },
    connector: {
      mobile: "flex items-end ml-2",
      tablet: "flex items-end ml-2",
      desktop: "flex items-end ml-2",
    },
    connectorParts: {
      column: {
        mobile: "flex flex-col justify-start items-end",
        tablet: "flex flex-col justify-start items-end",
        desktop: "flex flex-col justify-start items-end",
      },
      columnDot: {
        mobile: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
        tablet: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
        desktop: "h-2 w-2 rounded-full bg-[#b27f49] -translate-x-1",
      },
      columnVert: {
        mobile: "h-6 w-px bg-[#b27f49]",
        tablet: "h-8 w-px bg-[#b27f49]",
        desktop: "h-8 w-px bg-[#b27f49]",
      },
      horiz: {
        mobile: "w-6 h-px bg-[#b27f49]",
        tablet: "w-4 h-px bg-[#b27f49]",
        desktop: "w-24 h-px bg-[#b27f49]",
      },
    },
  },

  /* --------------------------------
     Transform Through Technology - Bottom Right
     -------------------------------- */
  technology: {
    index: 4,
    wrapper: {
      mobile: "col-span-2 flex items-start text-left",
      tablet: "col-span-2 flex items-start text-left",
      desktop: "col-span-2 flex items-start text-left",
    },
    connector: {
      mobile: "flex items-end mr-2",
      tablet: "flex items-end mr-2",
      desktop: "flex items-end mr-2",
    },
    connectorParts: {
      column: {
        mobile: "flex flex-col justify-start items-end",
        tablet: "flex flex-col justify-start items-end",
        desktop: "flex flex-col justify-start items-end",
      },
      columnDot: {
        mobile: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
        tablet: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
        desktop: "h-2 w-2 rounded-full bg-[#b27f49] translate-x-1",
      },
      columnVert: {
        mobile: "h-6 w-px bg-[#b27f49]",
        tablet: "h-8 w-px bg-[#b27f49]",
        desktop: "h-8 w-px bg-[#b27f49]",
      },
      horiz: {
        mobile: "w-6 h-px bg-[#b27f49]",
        tablet: "w-4 h-px bg-[#b27f49]",
        desktop: "w-24 h-px bg-[#b27f49]",
      },
    },
    card: {
      mobile:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 transition duration-300 group",
      tablet:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-3 transition duration-300 group",
      desktop:
        "bg-white cursor-pointer rounded-2xl shadow-sm p-2 md:p-6 transition duration-300 group",
    },
    translate: { mobile: "", tablet: "", desktop: "" },
    learnMore: {
      mobile: "text-[#b27f49] group-hover:underline",
      tablet: "text-[#b27f49] group-hover:underline",
      desktop: "text-[#b27f49] group-hover:underline",
    },
    title: {
      mobile: "text-[#b27f49]",
      tablet: "text-[#b27f49]",
      desktop: "text-[#b27f49]",
    },
    description: {
      mobile: "text-gray-700 line-clamp-3",
      tablet: "text-gray-700 line-clamp-5",
      desktop: "text-gray-700 line-clamp-5",
    },
  },
};

export default function Dashboard() {
  const [viewKey, setViewKey] = useState("mobile");
  const [gridSizing, setGridSizing] = useState(CLASSES.grid.classes.mobile);
  const [openIndex, setOpenIndex] = useState(null);
  const [mountedIndex, setMountedIndex] = useState(null);
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const panelRef = useRef(null);
  const mobileFormRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const tlRef = useRef(null);

  const computeKeyFromWidth = (w = window.innerWidth) => {
    if (w < 640) return "mobile";
    if (w >= 640 && w < 768) return "tablet";
    return "desktop";
  };

  // Calculate optimal panel positioning and grid shift
  const calculateLayout = useCallback(() => {
    const container = containerRef.current;
    const grid = gridRef.current;
    const panel = panelRef.current;

    if (!container || !grid || !panel) return null;

    const containerRect = container.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    
    // Panel dimensions - responsive
    const panelWidth = Math.min(420, containerRect.width * 0.35);
    const minGap = 20;
    const safeMargin = 24;
    
    // Available space calculations
    const totalAvailableWidth = containerRect.width - (2 * safeMargin);
    const spaceNeededForPanel = panelWidth + minGap;
    const maxGridWidth = totalAvailableWidth - spaceNeededForPanel;
    
    // Calculate how much to shift the grid
    const currentGridCenterX = gridRect.left + (gridRect.width / 2) - containerRect.left;
    const desiredGridCenterX = (totalAvailableWidth - spaceNeededForPanel) / 2;
    const shiftAmount = currentGridCenterX - desiredGridCenterX;
    
    // Scale factor to ensure grid fits comfortably
    const scaleFactor = Math.min(1, maxGridWidth / gridRect.width);
    
    return {
      panelWidth,
      shiftAmount: Math.max(0, shiftAmount),
      scaleFactor: Math.max(0.85, scaleFactor), // Minimum scale
      panelRight: safeMargin,
      gap: minGap
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (openIndex !== null) return;
      const key = computeKeyFromWidth(window.innerWidth);
      setViewKey(key);
      setGridSizing(CLASSES.grid.classes[key]);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openIndex]);

  useEffect(() => {
    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      gsap.killTweensOf([gridRef.current, panelRef.current, containerRef.current]);
    };
  }, []);

  // NEW: scroll indicator logic
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      setShowScrollDown(false);
      return;
    }

    const check = () => {
      // Only show indicator when panel is open & mounted and has overflow
      const isVisible = openIndex !== null && mountedIndex !== null;
      const isScrollable = panel.scrollHeight > panel.clientHeight + 5;
      const notAtBottom = panel.scrollTop + panel.clientHeight < panel.scrollHeight - 5;
      setShowScrollDown(isVisible && isScrollable && notAtBottom);
    };

    // run initial check; delay a bit if panel is animating/mounted
    check();
    // a delayed check helps after GSAP opens the panel
    const t = setTimeout(check, 200);

    panel.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      clearTimeout(t);
      panel.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [mountedIndex, openIndex, viewKey, showScrollDown]);

  const animateOpen = () => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const layout = calculateLayout();
    if (!layout) return;

    const grid = gridRef.current;
    const panel = panelRef.current;
    const container = containerRef.current;

    const tl = gsap.timeline();

    // Set initial panel properties
    gsap.set(panel, {
      width: layout.panelWidth,
      right: layout.panelRight,
      autoAlpha: 0,
      x: 30
    });

    // Animate grid shift and scale
    tl.to(grid, {
      x: -layout.shiftAmount,
      scale: layout.scaleFactor,
      duration: 0.5,
      ease: "power2.out"
    }, 0);

    // Update view key for responsive connectors after visual shift starts
    tl.add(() => {
      setViewKey("tablet");
      setGridSizing(CLASSES.grid.classes.tablet);
      // Maintain the transform after React re-render
      gsap.set(grid, { 
        x: -layout.shiftAmount, 
        scale: layout.scaleFactor 
      });
    }, 0.25);

    // Animate panel in
    tl.to(panel, {
      autoAlpha: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    }, 0.3);

    // After open animation, ensure indicator state is recalculated
    tl.call(() => {
      // small delay to allow layout to settle
      setTimeout(() => {
        const p = panelRef.current;
        if (!p) return;
        const isScrollable = p.scrollHeight > p.clientHeight + 5;
        const notAtBottom = p.scrollTop + p.clientHeight < p.scrollHeight - 5;
        setShowScrollDown(openIndex !== null && mountedIndex !== null && isScrollable && notAtBottom);
      }, 50);
    }, null, 0.6);

    tlRef.current = tl;
    return tl;
  };

  const animateClose = () => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const grid = gridRef.current;
    const panel = panelRef.current;

    if (!grid || !panel) return;

    const tl = gsap.timeline();

    // Hide panel
    tl.to(panel, {
      autoAlpha: 0,
      x: 30,
      duration: 0.3,
      ease: "power2.in"
    }, 0);

    // Return grid to center
    tl.to(grid, {
      x: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 0.1);

    // Update view key after animation
    tl.add(() => {
      const key = computeKeyFromWidth(window.innerWidth);
      setViewKey(key);
      setGridSizing(CLASSES.grid.classes[key]);
      gsap.set(grid, { x: 0, scale: 1 });
      // hide indicator right away
      setShowScrollDown(false);
    }, 0.6);

    tlRef.current = tl;
    return tl;
  };

  const smoothScrollToForm = () => {
    if (mobileFormRef.current) {
      mobileFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const onCardClick = (index) => {
    // Mobile behavior - show form below and scroll
    if (viewKey === "mobile") {
      if (openIndex === index) {
        setOpenIndex(null);
        setMountedIndex(null);
        return;
      }
      
      setMountedIndex(index);
      setOpenIndex(index);
      
      // Smooth scroll to form after state update
      setTimeout(() => {
        smoothScrollToForm();
      }, 100);
      return;
    }

    // Desktop/tablet behavior - side panel
    if (openIndex === null) {
      setMountedIndex(index);
      
      // Wait for panel to mount, then animate
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOpenIndex(index);
          animateOpen();
        });
      });
      return;
    }

    if (openIndex === index) {
      const tl = animateClose();
      tl.eventCallback("onComplete", () => {
        setOpenIndex(null);
        setMountedIndex(null);
      });
      return;
    }

    // Quick content swap for different cards
    gsap.to(panelRef.current, {
      autoAlpha: 0,
      x: 24,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setMountedIndex(index);
        setOpenIndex(index);
        gsap.fromTo(panelRef.current, 
          { autoAlpha: 0, x: 24 }, 
          { autoAlpha: 1, x: 0, duration: 0.2, ease: "power2.out" }
        );
      }
    });
  };

  const closePanel = () => {
    if (viewKey === "mobile") {
      setOpenIndex(null);
      setMountedIndex(null);
      return;
    }

    const tl = animateClose();
    tl.eventCallback("onComplete", () => {
      setOpenIndex(null);
      setMountedIndex(null);
    });
  };

  const cardClass = (section, index) => {
    const base = `${CLASSES[section].card[viewKey]} ${CLASSES[section].translate?.[viewKey] ?? ""} md:hover:scale-105 md:hover:shadow-xl`;
    if (openIndex === null) return base;
    if (openIndex === index) {
      return `${base} ring-2 ring-[#b27f49] bg-[#fff7e6] scale-105 shadow-xl`;
    }
    return `${base} opacity-90 bg-gray-100`;
  };

  // NEW: handle chevron click - scroll down inside panel
  const handleChevronClick = () => {
    const panel = panelRef.current;
    if (!panel) return;
    const remaining = panel.scrollHeight - (panel.scrollTop + panel.clientHeight);
    const amount = Math.min(panel.clientHeight * 0.8, remaining);
    if (amount <= 0) return;
    panel.scrollBy({ top: amount, behavior: "smooth" });
  };

  return (
    <section className={CLASSES.layout.section}>
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto px-6 flex justify-center"
        data-dashboard-root
      >
        {/* Main Grid - Centered */}
        <div
          ref={gridRef}
          className={`${CLASSES.grid.base} ${gridSizing} relative z-10`}
          style={{ 
            maxWidth: "1100px",
            transformOrigin: "center center"
          }}
          aria-hidden={openIndex !== null && viewKey !== "mobile"}
        >
          {/* Industrial */}
          <div className={CLASSES.industrial.wrapper[viewKey]}>
            <div className={CLASSES.industrial.innerWrapper[viewKey]}>
              <div className={cardClass("industrial", CLASSES.industrial.index)} onClick={() => onCardClick(CLASSES.industrial.index)}>
                <p className={CLASSES.industrial.learnMore[viewKey]} style={FONT_SIZES.learnMore[viewKey]}>Learn More {">"}</p>
                <h3 className={CLASSES.industrial.title[viewKey]} style={FONT_SIZES.title[viewKey]}>Industrial Growth:</h3>
                <p className={CLASSES.industrial.description[viewKey]} style={FONT_SIZES.description[viewKey]}>
                  Invest in startups across manufacturing, FMCG, and infrastructure to drive economic development.
                </p>
              </div>

              <div className={CLASSES.industrial.connector[viewKey]}>
                <div className={(CLASSES.industrial.connectorParts.line && CLASSES.industrial.connectorParts.line[viewKey]) || CLASSES.industrial.connectorParts.line} />
                <div className={(CLASSES.industrial.connectorParts.dot && CLASSES.industrial.connectorParts.dot[viewKey]) || CLASSES.industrial.connectorParts.dot} />
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div className={CLASSES.healthEducation.wrapper[viewKey]}>
            <div className={cardClass("healthEducation", CLASSES.healthEducation.index)} onClick={() => onCardClick(CLASSES.healthEducation.index)}>
              <p className={CLASSES.healthEducation.learnMore[viewKey]} style={FONT_SIZES.learnMore[viewKey]}>Learn More {">"}</p>
              <h3 className={CLASSES.healthEducation.title[viewKey]} style={FONT_SIZES.title[viewKey]}>Healthcare & Education:</h3>
              <p className={CLASSES.healthEducation.description[viewKey]} style={FONT_SIZES.description[viewKey]}>
                Collaborate to expand the BITO Multi-Specialty Hospital and establish Bihar University.
              </p>
            </div>

            <div className={CLASSES.healthEducation.connector[viewKey]}>
              <div className={(CLASSES.healthEducation.connectorParts.horiz && CLASSES.healthEducation.connectorParts.horiz[viewKey]) || CLASSES.healthEducation.connectorParts.horiz} />
              <div className={(CLASSES.healthEducation.connectorParts.innerColumn && (CLASSES.healthEducation.connectorParts.innerColumn[viewKey] ?? CLASSES.healthEducation.connectorParts.innerColumn)) || ""}>
                <div className={(CLASSES.healthEducation.connectorParts.innerLine && CLASSES.healthEducation.connectorParts.innerLine[viewKey]) || CLASSES.healthEducation.connectorParts.innerLine} />
                <div className={(CLASSES.healthEducation.connectorParts.innerDot && CLASSES.healthEducation.connectorParts.innerDot[viewKey]) || CLASSES.healthEducation.connectorParts.innerDot} />
              </div>
            </div>
          </div>

          {/* Lotus */}
          <div className={CLASSES.layout.lotusWrapper}>
            <div className={CLASSES.layout.lotusInner}>
              <img src="/Lotus.png" alt="Lotus" className={CLASSES.layout.lotusImg} />
            </div>
          </div>

          {/* Startup */}
          <div className={CLASSES.startup.wrapper[viewKey]}>
            <div className={CLASSES.startup.connectorBefore[viewKey]}>
              <div className={(CLASSES.startup.connectorParts.column && (CLASSES.startup.connectorParts.column[viewKey] ?? CLASSES.startup.connectorParts.column)) || ""}>
                <div className={(CLASSES.startup.connectorParts.columnLine && CLASSES.startup.connectorParts.columnLine[viewKey]) || CLASSES.startup.connectorParts.columnLine} />
                <div className={(CLASSES.startup.connectorParts.columnDot && CLASSES.startup.connectorParts.columnDot[viewKey]) || CLASSES.startup.connectorParts.columnDot} />
              </div>
              <div className={(CLASSES.startup.connectorParts.horiz && CLASSES.startup.connectorParts.horiz[viewKey]) || CLASSES.startup.connectorParts.horiz} />
            </div>

            <div className={cardClass("startup", CLASSES.startup.index)} onClick={() => onCardClick(CLASSES.startup.index)}>
              <p className={CLASSES.startup.learnMore[viewKey]} style={FONT_SIZES.learnMore[viewKey]}>Learn More {">"}</p>
              <h3 className={CLASSES.startup.title[viewKey]} style={FONT_SIZES.title[viewKey]}>Startup Incubation:</h3>
              <p className={CLASSES.startup.description[viewKey]} style={FONT_SIZES.description[viewKey]}>
                Partner with our incubation centers to support sectors like agriculture, food processing, and FMCG.
              </p>
            </div>
          </div>

          {/* Green Growth */}
          <div className={CLASSES.greenGrowth.wrapper[viewKey]}>
            <div className={cardClass("greenGrowth", CLASSES.greenGrowth.index)} onClick={() => onCardClick(CLASSES.greenGrowth.index)}>
              <p className={CLASSES.greenGrowth.learnMore[viewKey]} style={FONT_SIZES.learnMore[viewKey]}>Learn More {">"}</p>
              <h3 className={CLASSES.greenGrowth.title[viewKey]} style={FONT_SIZES.title[viewKey]}>Green Growth:</h3>
              <p className={CLASSES.greenGrowth.description[viewKey]} style={FONT_SIZES.description[viewKey]}>
                Champion eco-friendly industrial practices that balance development with environmental stewardship.
              </p>
            </div>

            <div className={CLASSES.greenGrowth.connector[viewKey]}>
              <div className={(CLASSES.greenGrowth.connectorParts.horiz && CLASSES.greenGrowth.connectorParts.horiz[viewKey]) || CLASSES.greenGrowth.connectorParts.horiz} />
              <div className={(CLASSES.healthEducation.connectorParts.innerColumn && (CLASSES.healthEducation.connectorParts.innerColumn[viewKey] ?? CLASSES.healthEducation.connectorParts.innerColumn)) || ""}>
                <div className={(CLASSES.greenGrowth.connectorParts.columnDot && CLASSES.greenGrowth.connectorParts.columnDot[viewKey]) || CLASSES.greenGrowth.connectorParts.columnDot} />
                <div className={(CLASSES.greenGrowth.connectorParts.columnVert && CLASSES.greenGrowth.connectorParts.columnVert[viewKey]) || CLASSES.greenGrowth.connectorParts.columnVert} />
              </div>
            </div>
          </div>

          {/* Technology */}
          <div className={CLASSES.technology.wrapper[viewKey]}>
            <div className={CLASSES.technology.connector[viewKey]}>
              <div className={(CLASSES.technology.connectorParts.column && (CLASSES.technology.connectorParts.column[viewKey] ?? CLASSES.technology.connectorParts.column)) || ""}>
                <div className={(CLASSES.technology.connectorParts.columnDot && CLASSES.technology.connectorParts.columnDot[viewKey]) || CLASSES.technology.connectorParts.columnDot} />
                <div className={(CLASSES.technology.connectorParts.columnVert && CLASSES.technology.connectorParts.columnVert[viewKey]) || CLASSES.technology.connectorParts.columnVert} />
              </div>
              <div className={(CLASSES.technology.connectorParts.horiz && CLASSES.technology.connectorParts.horiz[viewKey]) || CLASSES.technology.connectorParts.horiz} />
            </div>

            <div className={cardClass("technology", CLASSES.technology.index)} onClick={() => onCardClick(CLASSES.technology.index)}>
              <p className={CLASSES.technology.learnMore[viewKey]} style={FONT_SIZES.learnMore[viewKey]}>Learn More {">"}</p>
              <h3 className={CLASSES.technology.title[viewKey]} style={FONT_SIZES.title[viewKey]}>Transform Through Technology:</h3>
              <p className={CLASSES.technology.description[viewKey]} style={FONT_SIZES.description[viewKey]}>
                Invest in Cyber Security, Machine Learning, and Artificial Intelligence to drive innovation and secure Bihar's digital future.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Side Panel - Absolutely positioned */}
        {viewKey !== "mobile" && (
          <div
            ref={panelRef}
            className="absolute z-50 h-full overflow-y-auto"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              right: "24px",
              pointerEvents: openIndex != null ? "auto" : "none",
              opacity: 0,
              visibility: "hidden"
            }}
            aria-hidden={mountedIndex === null}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ zIndex: 50, position: 'relative' }}>
              {mountedIndex !== null && <FormComponent index={mountedIndex} onClose={closePanel} />}
            </div>

            {
              showScrollDown && (
                <button
                  onClick={handleChevronClick}
                  aria-label="Scroll down"
                  className="sticky cursor-pointer bottom-4 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-gray-300 text-gray-700 shadow-lg shadow-black hover:shadow-lg z-[1000]"
                >
                  <ChevronDown className="animate-bounce" />
                </button>
              )
            }
          </div>
        )}
      </div>

      {/* Mobile Form - Below the grid */}
      {viewKey === "mobile" && mountedIndex !== null && (
        <div 
          ref={mobileFormRef}
          className="w-full max-w-7xl mx-auto px-6 mt-8"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <FormComponent index={mountedIndex} onClose={closePanel} />
          </div>
        </div>
      )}
    </section>
  );
}
