import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { CATALOG_CATEGORIES, CATALOG_PRODUCTS } from "./catalogData";

/* ============================================================
   CUSTOM CAROUSEL HOOK
   ============================================================ */
function useCarousel(itemCount, itemsPerSlide) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const maxIndex = Math.max(0, itemCount - itemsPerSlide);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return { currentIndex, trackRef, canGoPrev, canGoNext, goPrev, goNext, goTo, maxIndex };
}

/* ============================================================
   BADGE STYLES MAP
   ============================================================ */
const BADGE_STYLES = {
  gold: "bg-gradient-to-r from-amber-100 to-yellow-50 text-amber-800 border border-amber-200",
  premium: "bg-gradient-to-r from-[#422a1d] to-[#523b2f] text-white border border-[#422a1d]",
  green: "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 border border-emerald-200",
};

const BADGE_ICONS = {
  gold: "★",
  premium: "◆",
  green: "●",
};

/* ============================================================
   PRODUCT CARD COMPONENT
   ============================================================ */
function ProductCard({ product }) {
  const badgeClass = BADGE_STYLES[product.badgeColor] || BADGE_STYLES.green;
  const badgeIcon = BADGE_ICONS[product.badgeColor] || BADGE_ICONS.green;

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-[#e8dcc8]/60"
      aria-label={product.name}
    >
      <div className="relative h-52 sm:h-56 overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-2"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#422a1d]/80 via-[#422a1d]/20 to-transparent" />
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md ${badgeClass}`}
        >
          <span className="text-[8px] sm:text-[9px]">{badgeIcon}</span>
          {product.badge}
        </span>
        <span className="absolute top-3 right-3 text-[10px] sm:text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
          {product.categoryLabel}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-['Outfit'] font-bold text-white text-base sm:text-lg leading-snug drop-shadow-lg">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1 bg-gradient-to-b from-white to-[#faf7f2]">
        <p className="text-[#523b2f]/70 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <Link
          to={`/trade/product/${product.id}`}
          className="mt-auto w-full py-2.5 sm:py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer bg-[#422a1d] text-white hover:bg-[#b27f4a] hover:shadow-lg hover:shadow-[#b27f4a]/30 active:scale-[0.97] uppercase tracking-wide inline-block text-center"
          aria-label={`View details for ${product.name}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

/* ============================================================
   MAIN PRODUCT CATALOG COMPONENT
   ============================================================ */
export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? CATALOG_PRODUCTS
        : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryData = CATALOG_CATEGORIES.find(
    (c) => c.id === activeCategory
  );

  const updateItemsPerSlide = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setItemsPerSlide(1);
    else if (width < 1024) setItemsPerSlide(2);
    else if (width < 1280) setItemsPerSlide(3);
    else setItemsPerSlide(4);
  }, []);

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, [updateItemsPerSlide]);

  const carousel = useCarousel(filteredProducts.length, itemsPerSlide);

  return (
    <section
      id="products"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#faf7f2] via-white to-[#faf7f2] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#b27f4a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#422a1d]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <header className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[#b27f4a] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            <span className="w-6 sm:w-8 h-px bg-[#b27f4a]" />
            Product Portfolio
            <span className="w-6 sm:w-8 h-px bg-[#b27f4a]" />
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#422a1d] font-['Outfit'] leading-tight">
            Premium Quality,{" "}
            <span className="text-[#b27f4a]">Global Standards</span>
          </h2>

          <p className="text-[#523b2f]/70 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            From Indian farms to tables across the world — explore our curated collection.
          </p>
        </header>

        {/* ── Category Filter Tabs ── */}
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10"
          role="tablist"
          aria-label="Product categories"
        >
          {CATALOG_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                  transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-[#422a1d] text-white border-[#422a1d] shadow-lg shadow-[#422a1d]/20 scale-105"
                      : "bg-white text-[#523b2f] border-[#e8dcc8] hover:border-[#b27f4a] hover:text-[#b27f4a] hover:shadow-sm"
                  }
                `}
              >
                <span className="text-sm sm:text-base">{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </nav>

        {/* ── Category Description ── */}
        {activeCategoryData && (
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[#523b2f]/60 text-xs sm:text-sm max-w-lg mx-auto italic">
              {activeCategoryData.description}
            </p>
          </div>
        )}

        {/* ── Carousel Container ── */}
        <div className="relative" key={activeCategory}>
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carousel.trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${carousel.currentIndex * (100 / itemsPerSlide)}%)`,
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerSlide}%` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {carousel.canGoPrev && (
            <button
              onClick={carousel.goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:-translate-x-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-[#e8dcc8] flex items-center justify-center text-[#422a1d] hover:bg-[#422a1d] hover:text-white hover:border-[#422a1d] transition-all duration-300 cursor-pointer"
              aria-label="Previous products"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {carousel.canGoNext && (
            <button
              onClick={carousel.goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-3 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-[#e8dcc8] flex items-center justify-center text-[#422a1d] hover:bg-[#422a1d] hover:text-white hover:border-[#422a1d] transition-all duration-300 cursor-pointer"
              aria-label="Next products"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {carousel.maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: carousel.maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => carousel.goTo(idx)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === carousel.currentIndex
                      ? "w-6 h-2 bg-[#422a1d]"
                      : "w-2 h-2 bg-[#dbc1a5] hover:bg-[#b27f4a]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-[#523b2f]/60 text-xs sm:text-sm">
            Looking for custom packaging or bulk orders?{" "}
            <a
              href="#configurator"
              className="text-[#b27f4a] font-semibold hover:underline underline-offset-2"
            >
              Contact our trade desk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
