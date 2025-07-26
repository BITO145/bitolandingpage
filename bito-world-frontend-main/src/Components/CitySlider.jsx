import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CitySlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);  // Start with the first slide active

    const cities = [
        { name: 'Singapore', img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg' },
        { name: 'Sydney', img: 'https://images.pexels.com/photos/1054018/pexels-photo-1054018.jpeg' },
        { name: 'Tokyo', img: 'https://images.pexels.com/photos/161212/japan-tokyo-temple-monks-161212.jpeg' },
        { name: 'New York', img: 'https://images.pexels.com/photos/259895/pexels-photo-259895.jpeg' },
        { name: 'London', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg' },
        { name: 'Dubai', img: 'https://images.pexels.com/photos/3787832/pexels-photo-3787832.jpeg' }
    ];

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="slider-container">
            <Swiper
                slidesPerView={5} // Adjust for the number of visible slides
                loop={true}
                spaceBetween={5}
                centeredSlides={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {cities.map((city, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={`slide ${activeIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                backgroundImage: `url(${city.img})`,
                                backgroundSize: 'cover',
                                height: '400px',
                            }}
                        >
                            <div className="city-name">{city.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CitySlider;
