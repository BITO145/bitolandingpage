import { TfiQuoteLeft } from "react-icons/tfi";
import { useState, useEffect } from "react";

function Testimonial({ testimonial }) {
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyles = () => {
    const isLarge = viewportWidth >= 1024;
    return {
      figure: { 
        width: '24rem',
        marginLeft: isLarge ? '1rem' : '0.5rem',
        marginRight: isLarge ? '1rem' : '0.5rem',
        paddingLeft: isLarge ? '2rem' : '1.5rem',
        paddingRight: isLarge ? '2rem' : '1.5rem',
        paddingTop: isLarge ? '2rem' : '1.5rem',
        paddingBottom: isLarge ? '2rem' : '1.5rem'
      },
      icon: { 
        width: isLarge ? '3.5rem' : '3rem',
        height: isLarge ? '3.5rem' : '3rem'
      },
      program: { fontSize: '0.875rem' },
      description: { 
        marginBottom: isLarge ? '2rem' : '1.5rem'
      },
      avatar: { 
        width: isLarge ? '4rem' : '3.5rem',
        height: isLarge ? '4rem' : '3.5rem'
      },
      title: { fontSize: '0.875rem' }
    };
  };

  const styles = getResponsiveStyles();

  return (
    <figure className="inline-block bg-white-shade rounded-xl" style={styles.figure}>
      <blockquote className="text-wrap">
        <div className="flex justify-between items-start mb-2">
          <TfiQuoteLeft className="text-primary-500 overflow-visible" style={{ ...styles.icon, strokeWidth: '0.02rem' }} />
          <p className="bg-gradient-to-t from-accent-500 to-accent-200 px-3 py-1 rounded-md font-medium text-primary-500 tracking-tight" style={styles.program}>
            {testimonial.program}
          </p>
        </div>

        <p className="font-medium text-primary-500 tracking-tight" style={styles.description}>
          {testimonial.description}
        </p>

        <div className="flex items-center gap-x-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-full"
            style={styles.avatar}
          />
          <div>
            <cite className="font-semibold not-italic tracking-tight">
              {testimonial.name}
            </cite>
            <p className="text-primary-50" style={styles.title}>{testimonial.title}</p>
          </div>
        </div>
      </blockquote>
    </figure>
  );
}

export default Testimonial;
