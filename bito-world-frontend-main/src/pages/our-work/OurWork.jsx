/* eslint-disable no-unused-vars */
import React from "react";
import {
  BitoImage,
  BitoImage1,
  BitoImage2,
  BitoImage3,
  BitoImage4,
  BitoImage5,
  BitoImage6,
  BitoImage7,
} from "../../assets";

import keyServicesImg from "../../assets/banners/key-services.jpg";
import Objective from "../../assets/about/objective.jpg";
import ourWorkBanner from "../../assets/about/our-work.jpg";

import {
  curriculum,
  future,
  training,
} from "../../assets/about";

const OurWork = () => {
  const items = [
    {
      icon: BitoImage,
      title: "Feasibility Study &",
      title2: "Market Entry Assistance",
      description:
        "Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.",
    },
    {
      icon: BitoImage1,
      title: "Regulatory Compliance",
      title2: "Advisory",
      description:
        "Offering insights into India's regulatory landscape to ensure compliance with local laws and regulations.Facilitating the necessary permits and approvals required for smooth operations.",
    },
    {
      icon: BitoImage2,
      title: "Legal and",
      title2: "Taxation Support",
      description:
        "Collaborating with legal experts to navigate complex legal frameworks.Providing tax advisory services to optimize fiscal strategies and reduce potential liabilities.",
    },
    {
      icon: BitoImage3,
      title: "Customized Business",
      title2: "Solutions For Start Up",
      description:
        "Tailoring solutions based on the specific needs of the foreign company. Assisting in establishing local partnerships and building a network within the Indian business ecosystem.",
    },
    {
      icon: BitoImage4,
      title: "Human Resources",
      title2: "Support",
      description:
        "Offering assistance in recruiting local talent and understanding labor laws. Providing guidance on cultural integration and workforce management.",
    },
    {
      icon: BitoImage5,
      title: "Infrastructure",
      title2: "and Location",
      description:
        "Identifying suitable office locations and assisting in setting up necessary infrastructure.",
    },
    {
      icon: BitoImage6,
      title: "Regulatory and",
      title2: "Compliance Advisory",
      description:
        "Offering insights into Indias regulatory landscape to ensure compliance with local laws and regulations. Facilitating the necessary permits and approvals required for smooth operations.",
    },
    {
      icon: BitoImage7,
      title: "Feasibility Study and",
      title2: "Market Entry Assistance",
      description:
        "Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.",
    },
  ];

  return (
    <div className="w-full">
      {/* =========================================================
          HOME BANNER
      ========================================================= */}
      <section
        className="
          relative
          -mt-[170px]
          flex
          min-h-[75vh]
          items-end
          bg-cover
          bg-center
          bg-no-repeat
          pt-[235px]
          pb-[50px]
          brightness-[90%]
        "
        style={{
          backgroundImage: `url(${ourWorkBanner})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-white">
            <p
              className="
                m-0
                text-[22px]
                leading-[1.2]
                font-bnpr
                sm:text-[24px]
              "
            >
              Welcome to
            </p>

            <strong
              className="
                block
                text-[22px]
                leading-[1.2]
                font-bnpr
                sm:text-[24px]
              "
            >
              Bihar Internatinal Trade Organization
            </strong>

            <h2
              className="
                mt-2
                text-[60px]
                font-bold
                leading-none
                sm:text-[80px]
                md:text-[100px]
              "
            >
              Work
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================
          OBJECTIVE
      ========================================================= */}
      <section className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
          {/* Content */}
          <div className="md:col-span-6">
            <h3 className="biaHeading mb-2">
              Objective:
            </h3>

            <h4 className="font-neulis-mdm mb-4 text-xl md:text-2xl">
              Empowering Global Ventures: The Objective of BITO
            </h4>

            <p className="mb-4 text-[16px] leading-[1.6] text-[#333]">
              BITO aim to provide comprehensive facilitation and support to
              foreign companies seeking to establish and operate successfully
              in India. This initiative focuses on streamlining processes,
              enhancing ease of doing business, and fostering a conducive
              environment for international companies.
            </p>

            <p className="mb-0 text-[16px] leading-[1.6] text-[#333]">
              BITO is dedicated to offering end-to-end assistance to foreign
              businesses, ensuring a smooth entry into the Indian market.
              Through tailored solutions, BITO guides companies through
              regulatory frameworks, legal compliance, and operational
              procedures, minimizing complexities and delays. By providing
              expert consultation and hands-on support, BITO helps
              international firms navigate the diverse and dynamic business
              landscape of India, fostering long-term growth and success.
            </p>
          </div>

          {/* Image */}
          <div className="md:col-span-1"></div>

          <div className="md:col-span-5">
            <img
              src={Objective}
              alt="BITO Objective"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY SERVICES
      ========================================================= */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10">
          {/* Section Heading */}
          <h2
            className="
              mb-[55px]
              text-center
              text-[48px]
              font-bold
              leading-none
              text-[#B27F4A]
              sm:text-[54px]
              md:text-[60px]
            "
          >
            Key Services
          </h2>

          {/* Services Grid */}
          <div
            className="
              grid
              grid-cols-1
              gap-x-[55px]
              gap-y-[80px]
              sm:grid-cols-2
              sm:gap-x-[35px]
              sm:gap-y-[80px]
              lg:grid-cols-4
              lg:gap-x-[45px]
              lg:gap-y-[110px]
              xl:gap-x-[55px]
            "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-[25px]
                    flex
                    h-[65px]
                    w-[65px]
                    items-center
                    justify-center
                  "
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      h-[60px]
                      w-[60px]
                      object-contain
                    "
                  />
                </div>

                {/* Title */}
                <h4
                  className="
                    m-0
                    min-h-[58px]
                    max-w-[300px]
                    text-center
                    font-neulis-mdm
                    text-[22px]
                    font-bold
                    leading-[1.45]
                    text-[#3A2A22]
                    sm:text-[21px]
                    lg:text-[22px]
                  "
                >
                  {item.title}
                  <br />
                  {item.title2}
                </h4>

                {/* Description */}
                <p
                  className="
                    mt-[18px]
                    mb-0
                    max-w-[330px]
                    text-center
                    text-[16px]
                    leading-[1.48]
                    text-[#222]
                    sm:text-[15.5px]
                    lg:text-[16px]
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY BENEFITS
      ========================================================= */}
      <section className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
          {/* Content */}
          <div className="md:col-span-6">
            <h3 className="biaHeading mb-2">
              Key Benefits:
            </h3>

            <h4 className="font-neulis-mdm mb-4 text-xl md:text-2xl">
              Key Benefits: From Roots to Wings – The BITO Advantage
            </h4>

            <p className="mb-5 text-[16px] leading-[1.6] text-[#333]">
              Discover how BITO empowers foreign companies to establish and
              thrive in India by simplifying processes, enhancing business
              efficiency, and providing comprehensive support.
            </p>

            <ul className="m-0 list-none p-0">
              {/* Benefit 1 */}
              <li className="mb-5 flex items-start">
                <img
                  src={curriculum}
                  alt=""
                  className="mt-1 h-[30px] w-[30px] shrink-0 object-contain"
                />

                <div className="ml-4">
                  <h5 className="font-neulis-mdm m-0 text-[18px] leading-[1.5]">
                    Accelerated market entry with reduced bureaucratic
                    hurdles.
                  </h5>
                </div>
              </li>

              {/* Benefit 2 */}
              <li className="mb-5 flex items-start">
                <img
                  src={training}
                  alt=""
                  className="mt-1 h-[30px] w-[30px] shrink-0 object-contain"
                />

                <div className="ml-4">
                  <h5 className="font-neulis-mdm m-0 text-[18px] leading-[1.5]">
                    Enhanced understanding of the local business landscape.
                  </h5>
                </div>
              </li>

              {/* Benefit 3 */}
              <li className="mb-5 flex items-start">
                <img
                  src={future}
                  alt=""
                  className="mt-1 h-[30px] w-[30px] shrink-0 object-contain"
                />

                <div className="ml-4">
                  <h5 className="font-neulis-mdm m-0 text-[18px] leading-[1.5]">
                    Mitigation of legal and regulatory risks.
                  </h5>
                </div>
              </li>

              {/* Benefit 4 */}
              <li className="flex items-start">
                <img
                  src={future}
                  alt=""
                  className="mt-1 h-[30px] w-[30px] shrink-0 object-contain"
                />

                <div className="ml-4">
                  <h5 className="font-neulis-mdm m-0 text-[18px] leading-[1.5]">
                    Cost-effective and efficient solutions tailored to
                    individual business requirements.
                  </h5>
                </div>
              </li>
            </ul>
          </div>

          {/* Spacer */}
          <div className="hidden md:col-span-1 md:block"></div>

          {/* Image */}
          <div className="md:col-span-5">
            <img
              src={keyServicesImg}
              alt="BITO Key Services"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;