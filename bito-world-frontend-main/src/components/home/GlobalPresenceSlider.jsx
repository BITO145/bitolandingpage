import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import africa from "../../assets/bia/Africa.png";
import asia from "../../assets/bia/Asia.jpeg";
import europe from "../../assets/bia/Europe.png";
import america from "../../assets/bia/America.png";
import australia from "../../assets/bia/Australia.png";

import "swiper/css";
import "swiper/css/pagination";

const chapterData = [
  {
    title: "TOKYO",
    image: asia,
  },
  {
    title: "NEW YORK",
    image: america,
  },
  {
    title: "SINGAPORE",
    image: asia,
  },
  {
    title: "LONDON",
    image: europe,
  },
  {
    title: "DUBAI",
    image: africa,
  },
  {
    title: "SYDNEY",
    image: australia,
  },
];

export default function GlobalChapters() {
  return (
    <div className="">
      <div className="container">
        <div>
          <h1 className="text-center global-presence-head pb-3">Our Global Chapters</h1>
        </div>
      </div>

      {/* Desktop View */}
      <div className="swiper d-sm-block d-none">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-12">
                <div className="general-container">
                  {chapterData.map((item, index) => (
                    <React.Fragment key={index}>
                      <input
                        className="radio"
                        type="radio"
                        name="card"
                        id={`card${index}`}
                      />
                      <label
                        className="content"
                        htmlFor={`card${index}`}
                        title={item.title}
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      >
                        <h1 className="title-card">
                          <span className="marg-bott">{item.title}</span>
                        </h1>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className="swiper d-sm-none d-block">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-12">
                <div className="general-container">
                  {chapterData.slice(0, 3).map((item, index) => (
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
                        title={item.title}
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      >
                        <h1 className="title-card">
                          <span className="marg-bott">{item.title}</span>
                        </h1>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-lg-12">
                <div className="general-container">
                  {chapterData.slice(3).map((item, index) => (
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
                        title={item.title}
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      >
                        <h1 className="title-card">
                          <span className="marg-bott">{item.title}</span>
                        </h1>
                      </label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}