import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const chapterData = [
  {
    title: "TOKYO",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "NEW YORK",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SINGAPORE",
    image: "https://images.unsplash.com/photo-1565372913264-c40f5db6ee3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "LONDON",
    image: "https://images.unsplash.com/photo-1508898578281-774ac4893c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DUBAI",
    image: "https://images.unsplash.com/photo-1585325701953-14e7f207d14f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SYDNEY",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e6f31?auto=format&fit=crop&w=800&q=80",
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