/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MembershipPlansSlider = ({ plans, isINR }) => {
  return (
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
      className="mySwiper biaMembership p-0"
    >
      {plans.map((plan, index) => (
        <SwiperSlide key={index}>
          {" "}
          <div
            key={index}
            className={`col-12 biaBorder biaMembershipCard ${
              plan.isRecommended ? "recommended" : ""
            }`}
            style={{ position: "relative" }}
          >
            {plan.isRecommended && (
              <div
                className="recommended-label text-white text-center mediumBrownBG"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  padding: "5px 0",
                  zIndex: 1,
                }}
              >
                Recommended
              </div>
            )}
            <div className="pricingContainer">
              <div
                className={`pricing ${plan.isRecommended ? "pt-5" : "pt-3"}`}
              >
                <h3>{plan.name}</h3>
                {isINR ? (
                  <h4>
                    <sup>₹</sup>
                    <span>{plan.price}</span> /yearly
                  </h4>
                ) : (
                  <h4>
                    <span>{plan.usd} USD</span> /yearly
                  </h4>
                )}
              </div>
              {plan.redText && (
                <div className="text-danger">
                  <strong>
                    <del> {isINR ? '₹ 25,000' : '300 USD'}</del>
                  </strong>
                  <sub>/mo</sub>
                </div>
              )}
            </div>
            <ul className="p-2 p-md-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MembershipPlansSlider;
