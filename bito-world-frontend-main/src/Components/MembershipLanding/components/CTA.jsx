
import { useState, useEffect } from "react";

// Static UI: remove modal context and navigation
function CTA() {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyles = () => {
    if (viewportWidth >= 1280) {
      return {
        section: { 
          maxWidth: '90rem',
          paddingLeft: '6rem', paddingRight: '6rem',
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        container: { 
          paddingTop: '7rem', paddingBottom: '7rem'
        },
        accentLine: { width: '20%', height: '0.5rem' },
        decoration1: { 
          width: '50rem', height: '7rem',
          left: '4%'
        },
        decoration2: { 
          width: '40rem', height: '7rem',
          left: '35%', visibility: 'visible'
        },
        h3: { fontSize: '3.5rem', lineHeight: '4rem' },
        p: { fontSize: '1.125rem', maxWidth: '32rem' }
      };
    } else if (viewportWidth >= 1024) {
      return {
        section: { 
          maxWidth: '90rem',
          paddingLeft: '4rem', paddingRight: '4rem',
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        container: { 
          paddingTop: '7rem', paddingBottom: '7rem'
        },
        accentLine: { width: '20%', height: '0.5rem' },
        decoration1: { 
          width: '50rem', height: '7rem',
          left: '4%'
        },
        decoration2: { 
          width: '40rem', height: '7rem',
          left: '35%', visibility: 'visible'
        },
        h3: { fontSize: '3rem', lineHeight: '4rem' },
        p: { fontSize: '1rem', maxWidth: '32rem' }
      };
    } else if (viewportWidth >= 768) {
      return {
        section: { 
          maxWidth: '90rem',
          paddingLeft: '4rem', paddingRight: '4rem',
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        container: { 
          paddingTop: '6rem', paddingBottom: '6rem'
        },
        accentLine: { width: '20%', height: '0.5rem' },
        decoration1: { 
          width: '50rem', height: '7rem',
          left: '4%'
        },
        decoration2: { 
          width: '40rem', height: '7rem',
          left: '35%', visibility: 'hidden'
        },
        h3: { fontSize: '3rem', lineHeight: '4rem' },
        p: { fontSize: '1rem', maxWidth: '32rem' }
      };
    } else if (viewportWidth >= 640) {
      return {
        section: { 
          maxWidth: '90rem',
          paddingLeft: '2rem', paddingRight: '2rem',
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        container: { 
          paddingTop: '6rem', paddingBottom: '6rem'
        },
        accentLine: { width: '20%', height: '0.5rem' },
        decoration1: { 
          width: '50rem', height: '7rem',
          left: '4%'
        },
        decoration2: { 
          width: '40rem', height: '7rem',
          left: '35%', visibility: 'hidden'
        },
        h3: { fontSize: '2.25rem', lineHeight: '2.5rem' },
        p: { fontSize: '1rem', maxWidth: '32rem' }
      };
    } else {
      return {
        section: { 
          maxWidth: '90rem',
          paddingLeft: '1rem', paddingRight: '1rem',
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        container: { 
          paddingTop: '4rem', paddingBottom: '4rem'
        },
        accentLine: { width: '20%', height: '0.5rem' },
        decoration1: { 
          width: '50rem', height: '7rem',
          left: '4%'
        },
        decoration2: { 
          width: '40rem', height: '7rem',
          left: '35%', visibility: 'hidden'
        },
        h3: { fontSize: '2rem', lineHeight: '2.5rem' },
        p: { fontSize: '1rem', maxWidth: '32rem' }
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <section className="m-auto" style={styles.section}>
      <div className="relative flex flex-col items-center bg-slate-800 px-8 rounded-2xl overflow-hidden" style={styles.container}>
        {/* Top accent line */}
        <div className="top-0 absolute bg-yellow-400" style={styles.accentLine} />

        {/* Gradient light decorations */}
        <div className="absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] -rotate-45" style={styles.decoration1} />
        <div className="absolute bg-gradient-to-l from-white to-transparent opacity-20 blur-2xl rounded-[50%] -rotate-45" style={styles.decoration2} />

        {/* Headline */}
        <h3 className="mb-4 font-bold text-center text-white tracking-tight" style={styles.h3}>
          Engage without limits
        </h3>

        {/* Subheading */}
        <p className="pb-10 text-center text-white tracking-tight" style={styles.p}>
          Join a growing community and talk directly with your favorite creators
        </p>

        {/* CTA Button */}
        <div className="z-10 bg-gradient-to-b from-yellow-400 to-yellow-100 p-[.125rem] rounded-[1.125rem]">
          <button
            onClick={() => window.location.href = "https://www.bitoindustriesassociation.com"}
            className="bg-gradient-to-t from-yellow-400 to-yellow-100 hover:drop-shadow-[0_0px_35px_rgba(251,191,36,0.3)] px-8 py-4 rounded-2xl font-medium text-slate-800 hover:text-white transition-all duration-200"
          >
            More information
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
