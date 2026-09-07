/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

import africa from "../../assets/bia/Africa.png";
import asia from "../../assets/bia/Asia.jpeg";
import europe from "../../assets/bia/Europe.png";
import america from "../../assets/bia/America.png";
import australia from "../../assets/bia/Australia.png";

const chapterImages = [africa, asia, europe, america, australia];
const chapterTitles = ["AFRICA", "ASIA", "EUROPE", "AMERICA", "AUSTRALIA"];

const OurChaptersSlider = () => {
  return (
    <>
      <div className="general-container d-none d-md-flex p-0">
        {chapterImages.map((image, index) => (
          <React.Fragment key={index}>
            <input className="radio" type="radio" name="card" id={`card${index}`} />
            <label
              className="content"
              htmlFor={`card${index}`}
              title={chapterTitles[index]}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 className="title-card">
                <span className="marg-bott">{chapterTitles[index]}</span>
              </h1>
            </label>
          </React.Fragment>
        ))}
      </div>

      <Swiper
        speed={1200}
        loop={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-0 d-md-none"
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-100">
          <div className="row">
            <div className="col-lg-12 col-sm-2 p-0">
              <div className="general-container d-md-none">
                {chapterImages.slice(0, 3).map((image, index) => (
                  <React.Fragment key={index}>
                    <input
                      className="radio"
                      type="radio"
                      name="card"
                      id={`mobileCard${index}`}
                    />
                    <label
                      className="content"
                      htmlFor={`mobileCard${index}`}
                      title={chapterTitles[index]}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1 className="title-card">
                        <span className="marg-bott">{chapterTitles[index]}</span>
                      </h1>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-100">
          <div className="row">
            <div className="col-lg-12 col-sm-2 p-0">
              <div className="general-container d-md-none">
                {chapterImages.slice(3).map((image, index) => (
                  <React.Fragment key={index}>
                    <input
                      className="radio"
                      type="radio"
                      name="card"
                      id={`mobileCard${index + 3}`}
                    />
                    <label
                      className="content"
                      htmlFor={`mobileCard${index + 3}`}
                      title={chapterTitles[index + 3]}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    >
                      <h1 className="title-card">
                        <span className="marg-bott">{chapterTitles[index + 3]}</span>
                      </h1>
                    </label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OurChaptersSlider;
