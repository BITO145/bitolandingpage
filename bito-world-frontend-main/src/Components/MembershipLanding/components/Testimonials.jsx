import { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import { testimonials } from "../../../utils/constants.js";

// const testimonials = [
//   {
//     program: "Platinum",
//     description:
//       "Being part of BITO means being part of Bihar’s growth and transformation. It’s about honoring our roots, and shaping a future. I’m grateful to contribute to this meaningful journey.",
//     image: new URL("../assets/testimonials/t1.jpg", import.meta.url),
//     name: "Farooque",
//     title: "Customer Success Manager, Dubai",
//   },
//   {
//     program: "Diamond",
//     description:
//       "BITO is more than an organization—it’s a movement. By empowering entrepreneurs, fostering innovation, and honoring Bihar’s rich heritage, it’s building bridges between our past and our global future. I’m proud to be part of this journey toward a more united and prosperous Bihar.",
//     image: new URL("../assets/testimonials/t2.jpg", import.meta.url),
//     name: "Upendra",
//     // title: "Product lead at EducationWave",
//   },
//   {
//     program: "Silver",
//     description:
//       "As an education leader, I admire BITO’s focus on experiential learning through trade exposure, internships, and global forums. These initiatives broaden horizons and make learning truly meaningful.",
//     image: new URL("../assets/testimonials/t3.jpg", import.meta.url),
//     name: "Abhilasha Singh",
//     title: "Principal Shining Star International School, Abu Dhabi",
//   },
//   {
//     program: "Gold",
//     description:
//       "We are expert in delivering exhibitions, interior and infrastructure services across worldwide having company presence in Patna, Dubai, Milano, Warsaw. Now just we launched in Patna Indl Area also.",
//     image: new URL("../assets/testimonials/t4.jpg", import.meta.url),
//     name: "Mukesh Pandey",
//     title: "Managing Director",
//   },
// ];

function Testimonials() {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyles = () => {
    if (viewportWidth >= 1280) {
      return {
        section: { maxWidth: '90rem', paddingTop: '6rem', paddingBottom: '6rem' },
        h2: { 
          paddingLeft: '6rem', paddingRight: '6rem', 
          paddingBottom: '4rem',
          fontSize: '3.5rem', lineHeight: '4rem' 
        },
        gradientLeft: { width: '16rem' },
        gradientRight: { width: '16rem' }
      };
    } else if (viewportWidth >= 768) {
      return {
        section: { maxWidth: '90rem', paddingTop: '4rem', paddingBottom: '4rem' },
        h2: { 
          paddingLeft: '4rem', paddingRight: '4rem', 
          paddingBottom: '4rem',
          fontSize: '3rem', lineHeight: '1' 
        },
        gradientLeft: { width: '8rem' },
        gradientRight: { width: '8rem' }
      };
    } else if (viewportWidth >= 640) {
      return {
        section: { maxWidth: '90rem', paddingTop: '4rem', paddingBottom: '4rem' },
        h2: { 
          paddingLeft: '2rem', paddingRight: '2rem', 
          paddingBottom: '3.5rem',
          fontSize: '2.25rem', lineHeight: '2.5rem' 
        },
        gradientLeft: { width: '8rem' },
        gradientRight: { width: '8rem' }
      };
    } else {
      return {
        section: { maxWidth: '90rem', paddingTop: '3rem', paddingBottom: '3rem' },
        h2: { 
          paddingLeft: '1rem', paddingRight: '1rem', 
          paddingBottom: '3rem',
          fontSize: '2rem', lineHeight: '2.5rem' 
        },
        gradientLeft: { width: '0rem' },
        gradientRight: { width: '0rem' }
      };
    }
  };

  const styles = getResponsiveStyles();

  return (
    <section className="m-auto" style={styles.section}>
      <h2 className="font-bold text-primary-500 tracking-tight" style={styles.h2}>
        Listen to what our{" "}
        <span className="underline underline-offset-2 decoration-8 decoration-accent-500">
          satisfied
        </span>{" "}
        <br className="sm:block hidden" />
        members have to say
      </h2>

      <div className="relative">
        <div className="top-0 left-0 z-10 absolute bg-gradient-to-r from-white to-transparent" style={{ ...styles.gradientLeft, height: '100%' }} />
        <div className="top-0 right-0 z-10 absolute bg-gradient-to-l from-white to-transparent" style={{ ...styles.gradientRight, height: '100%' }} />

        {/* TESTIMONIAL ROW 1 */}
        <div className="bg-white mb-4 lg:mb-6 whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse">
            {testimonials.slice(0, 4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>

        {/* TESTIMONIAL ROW 2 */}
        <div className="bg-white whitespace-nowrap overflow-hidden">
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
          <div className="inline-block whitespace-nowrap animate-translate-x-reverse-slowed">
            {testimonials.slice(4).map((testimonial) => (
              <Testimonial testimonial={testimonial} key={testimonial.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
