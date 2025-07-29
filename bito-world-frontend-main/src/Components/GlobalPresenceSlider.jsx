import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const chapterData = [
  {
    title: "TOKYO",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448586_desktop.jpeg",
  },
  {
    title: "NEW YORK",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448642_mobile.jpeg",
  },
  {
    title: "SINGAPORE",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448469_desktop.jpg",
  },
  {
    title: "LONDON",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448662_desktop.jpg",
  },
  {
    title: "DUBAI",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448680_mobile.jpg",
  },
  {
    title: "LONDON",
    image: "https://admin.mockup4clients.com/public/uploads/chapter/1751448574_desktop.jpeg",
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