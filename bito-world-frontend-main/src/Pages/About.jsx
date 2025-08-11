/* eslint-disable react/no-unescaped-entities */
import { Image, Tab, Tabs } from "react-bootstrap";
import {
  about,
  biharAsmitaFoundation,
  curriculum,
  economics,
  future,
  infra,
  lachhuar,
  meetup,
  multiSpecialityHospital,
  organizationalStructure,
  socialImpact,
  spiritual,
  training,
} from "../assets/about";
import { biaMission, biaVision } from "../assets/bia";
import MeetOurVisionaryLeader from "../Components/MeetOurVisionaryLeader1";
import "./about.css";

const About = () => {
  return (
    <div>
      {/* Home Banner */}
      

      <section
  style={{
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingTop: "235px",
    paddingBottom: "50px",
    marginTop: "-170px",
    minHeight: "75vh",
    position: "relative",
  }}
>
  <img
    src="https://t4.ftcdn.net/jpg/05/08/80/19/360_F_508801991_UTsCAOorx25USitqonfRADueJlzyjhDq.jpg"
    alt="About Banner"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  />

  <div className="container text-white">
    <p className="fs-4 m-0 font-bnpr">Welcome to</p>
    <strong className="fs-4 font-bnpr">
      Bihar International Trade Organization
    </strong>
    <h2
      key={1}
      className="bannerHeading"
      style={{ fontSize: "100px", fontWeight: 700 }}
    >
      About Us
    </h2>
  </div>
</section>


      <section className="container py-3 py-md-5">
        <div className="row pb-4 pb-md-1">
          <div className="col-12 col-md-6 my-3 my-md-1">
            <h3 className="biaHeading">About Us</h3>
            <h4 className="font-neulis-mdm">
              From Roots to Wings: The Story of BITO
            </h4>
            <p>
              The Bihar International Trade Organization (BITO) incepted in 2015
              with a simple but powerful dream: to uplift Bihar—its people,
              culture, and economy—and change its story for the better. From its
              humble beginnings in Lachhuar, Jamui, BITO has grown into a global
              movement, connecting Biharis in over 25 countries.
            </p>
            <p>
              Through projects that empower small businesses, celebrate Bihar’s
              rich heritage, and improve education and healthcare, BITO has
              become a symbol of hope and progress. It brings Biharis together,
              inspiring pride in their roots and confidence in their future.
            </p>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-5">
            <img src={about} alt="" width="100%" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-light">
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img
                  src={biaVision}
                  alt=""
                  width={70}
                  height={70}
                  className="biaVisionMissionImg"
                />
                <h4 className="biaHeading m-0">Vision</h4>
              </div>
              <p>
                BITO envisions itself as a catalyst for transformation of Bihar
                leading to a future state where Bihar stands as a global leader
                in economic innovation, cultural heritage, and social progress.
              </p>
              <p>
                By empowering local industries, nurturing entrepreneurship, and
                preserving its rich cultural legacy, BITO aims to position Bihar
                as a dynamic and resilient community that inspires pride and
                prosperity for generations to come.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-3 py-3">
                <img
                  src={biaMission}
                  alt=""
                  width={70}
                  height={70}
                  className="biaVisionMissionImg"
                />
                <h4 className="biaHeading m-0">Mission</h4>
              </div>
              <p>
                BITO’s mission is to catalyze economic growth and cultural pride
                in Bihar by fostering innovation, supporting entrepreneurship,
                and promoting global recognition of its rich heritage.
              </p>
              <p>
                Through strategic partnerships and community-driven initiatives,
                BITO seeks to empower Biharis worldwide, enhancing their
                economic opportunities and cultural identity while driving
                positive transformation within and beyond the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <MeetOurVisionaryLeader />

      <section className="container pb-3 pb-md-5">
        {/* DESKTOP DESIGN LAYOUT */}
        <h1 className="section-3-heading d-none d-sm-block pb-4">
          Our Journey: Transforming Dreams into Reality
        </h1>

        {/* MOBILE DESIGN LAYOUT */}
        <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
          Our Journey: <br />
          Transforming Dreams into Reality
        </h1>

        <div className="row section-2-row">
          {/* Right div for image */}
          <div className="right-side-div col-lg-6">
            <Image
              className="section-2-img rounded-0"
              src={lachhuar}
              alt="section-2 img"
            />
          </div>

          {/* Left div for content */}
          <div className="left-side-div col-lg-6">
            <h4 className="font-neulis-mdm">
              Lachhuar: A Story of Revival and Pride
            </h4>
            <p>
              Under the visionary leadership of Shri Chirag Paswan, Lachhuar,
              Jamui—the birthplace of Bhagwan Mahavir—has become a symbol of
              what passion and purpose can achieve:
            </p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <img src={infra} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">
                    Infrastructure Upgrades
                  </h5>
                  <p>
                    A Jain Temple, a 108-bed hospital, and a state-of-the-art
                    guesthouse.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <img src={spiritual} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">
                    Spiritual Tourism Boom
                  </h5>
                  <p>
                    Lachhuar integrated into the Jain Circuit, attracting over
                    10 lakh visitors annually.
                  </p>
                </div>
              </li>
              <li className="d-flex">
                <img src={economics} alt="" height={30} width={30} />
                <div className="ms-3">
                  <h5 className="font-neulis-mdm font-18">Economic Growth</h5>
                  <p>
                    Investments of nearly ₹1000 crore have turned Jamui into one
                    of Bihar’s fastest-developing districts (NITI Aayog).
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-yellow-light">
        <div className="container py-3 py-md-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-3 pb-3">
                <h4 className="biaHeading m-0">Our Social Impact</h4>
              </div>
              <h4 className="font-neulis-mdm">
                Bihar Skill University: Shaping Futures
              </h4>
              <p>
                Education is the key to progress, and BITO is proud to support
                the creation of Bihar Skill University. This university aims to
                empower the youth of Bihar by providing top-quality skill
                development programs that prepare them for opportunities around
                the world.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex">
                  <img src={curriculum} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">
                      Modern Curriculum
                    </h5>
                    <p>
                      Focused on building innovation and entrepreneurship
                      skills.
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <img src={training} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">
                      Practical Training
                    </h5>
                    <p>
                      Partnerships with industries to offer hands-on experience
                      and job opportunities.
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <img src={future} alt="" height={30} width={30} />
                  <div className="ms-3">
                    <h5 className="font-18 font-neulis-mdm">A Bright Future</h5>
                    <p>
                      Giving hope to thousands of students striving for a better
                      tomorrow.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <Image
                className="section-2-img py-3 rounded-0"
                src={socialImpact}
                alt="section-2 img"
              />
              <p className="text-brown">
                "This is more than just a university—it’s a promise to our youth
                that no dream is too big, no goal too far."
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <Image
                className="section-2-img rounded-0"
                src={multiSpecialityHospital}
                alt="section-2 img"
              />
            </div>
            <div className="col-lg-6 p-3">
              <h4 className="font-neulis-mdm">
                BITO Multi-Specialty Hospital:
                <br /> A Lifeline for Bihar
              </h4>
              <p>
                BITO’s healthcare projects are not just infrastructure—they’re a
                lifeline for countless families across the state. The 108-bed
                hospital in Lachhuar is a testament to BITO’s commitment to
                providing accessible, quality healthcare.
              </p>
              <ul>
                <li>
                  <p>
                    Focus on maternal and child health, critical care, and
                    specialized treatments.
                  </p>
                </li>
                <li>
                  <p>Affordable healthcare for the underprivileged.</p>
                </li>
                <li>
                  <p>
                    A center of healing for those who had to travel far for
                    medical needs.
                  </p>
                </li>
              </ul>

              <p className="text-brown">
                “For every mother who worried about her child’s health, for
                every family that lost hope waiting for treatment—this hospital
                stands as a symbol of compassion and care.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-3 py-md-5">
        <h3 className="text-center biaHeading">Our Initiatives</h3>
        <p className="text-center">
          At BITO, our mission transcends growth—it’s about empowering lives and
          creating a lasting legacy for Bihar and its people. From fostering
          entrepreneurship to celebrating our rich heritage, every initiative is
          crafted to elevate Bihar globally.
        </p>
        <OurInitiativeTabs />
      </section>

      <section className="bg-brown-dark text-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3">
              <h2 className="fs-1">Membership</h2>
            </div>
            <div className="col-md-9">
              Membership in BITO will be open to individuals, entrepreneurs,
              industrialists, professionals, and organizations having a
              connection to Bihar and sharing the vision and values of the
              organization. Members will benefit from networking opportunities,
              participation in events, access to resources, and collaboration
              with other like-minded businesses.
            </div>
          </div>
          <img src={meetup} alt="" width={"100%"} className="my-4" />

          <div className="mt-4">
            <p>
              <strong>A. Trade Fairs and Exhibitions:</strong> Organizing
              domestic and international trade fairs and exhibitions to showcase
              products and services from Bihar.
            </p>
            <p>
              <strong>B. Business Delegations: </strong> Facilitating business
              delegations to other states and countries to explore new markets
              and investment opportunities.
            </p>
            <p>
              <strong>C. Knowledge Sharing Events: </strong> Hosting seminars,
              workshops, and conferences on topics related to business
              development, innovation, and sustainability.
            </p>
            <p>
              <strong>D. Skill Development Programs:</strong> Conducting
              training programs and skill development initiatives to enhance the
              capabilities of entrepreneurs and professionals.
            </p>
            <p>
              <strong>E. Investment Summits:</strong> Organizing investment
              summits to attract investors and promote Bihar as an investment
              destination.
            </p>
          </div>
          <div className="d-md-flex justify-content-between mt-5">
            <div className="w-md-50">
              <h2 className="font-neulis-mdm">Membership in BITO</h2>
              <p>
                will be open to individuals, entrepreneurs, industrialists,
                professionals, and organizations with ties to Bihar.
              </p>
            </div>

            <button className="btn btn-light border-button enroll-now-btn text-white fs-2">
              Enroll Now{" "}
              <i className="fa fa-arrow-right fs-4" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

const OurInitiativeTabs = () => {
  return (
    <>
    <Tabs defaultActiveKey="01" id="our-initiative" className="my-4 border-0">
      <Tab eventKey="01" title="01">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                Bihar Asmita Foundation:
                <br /> Honoring Heritage, Inspiring Future
              </h4>
              <p>
                The Bihar Asmita Foundation is at the heart of preserving and
                promoting Bihar’s cultural and historical significance. Through
                initiatives like the annual <strong>Bihar Asmita Diwas</strong>,
                we unite the global Bihari community to celebrate achievements
                and instill pride.
              </p>
              <p>
                <strong>Preserving Pride:</strong> Highlighting Bihar’s
                spiritual, cultural, and historical importance on a global
                stage.
              </p>
              <p>
                <strong>Inspiring Generations:</strong> Honoring excellence to
                motivate the youth to contribute to Bihar’s future.
              </p>
              <p className="text-brown">
                “Our heritage is not just our past; it’s the foundation for a
                brighter tomorrow.”
              </p>
            </div>
          </div>
       
        </div>
      </Tab>
      <Tab eventKey="02" title="02">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                BITO Startup Incubation Centre:
                <br /> Empowering Entrepreneurs
              </h4>
              <p>
                The BITO Startup Incubation Centre (BSIC) is a catalyst for
                Bihar’s entrepreneurial spirit, driving innovation and economic
                growth.
                <strong> Nurturing Startups </strong> Providing mentorship,
                funding, and networking opportunities to budding entrepreneurs.
              </p>
              <p>
                <strong>job Creation:</strong> Establishing incubation hubs that
                foster businesses and generate employment.
              </p>
              <p>
                <strong>Global Outreach:</strong> Connecting startups to
                international markets, making Bihar a hub for innovation.
              </p>
              <p className="text-brown">
                “BSIC turns ideas into enterprises, empowering Biharis to lead
                the future.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="03" title="03">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                BITO Industries Association (BIA): :
                <br /> Driving Industrial Growth
              </h4>
              <p>
                BITO Industries Association (BIA) accelerates sustainable
                industrial growth , ensuring global competitiveness while
                promoting eco-friendly practices.
              </p>
              <p>
                <strong>Economic Development:</strong> Attracting investments
                and forging collaborations between industries and policymakers
              </p>
              <p>
                <strong>Green Practices:</strong> Encouraging sustainability in
                industrial operations for long-term growth.
              </p>
              <p>
                <strong>Thriving Ecosystem:</strong> Building an industrial base
                that supports jobs, innovation, and economic prosperity.
              </p>
              <p className="text-brown">
                “BIA is transforming industries into a global benchmark of
                innovation and sustainability.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="04" title="04">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                BITO Mart:
                <br /> Empowering Retailers for a Digital Future
              </h4>
              <p>
                BITO Mart is a no-commission e-commerce platform, empowering
                small retailers and vendors to succeed without barriers.
              </p>
              <p>
                <strong>Economic Empowerment:</strong>Providing opportunities
                for small businesses to thrive without intermediaries.
              </p>
              <p>
                <strong>Digital Transformation:</strong> Enabling local
                retailers to reach customers nationwide and globally. Financial
                Inclusion: Supporting entrepreneurs with tools and resources to
                grow in the digital economy.
              </p>
              <p className="text-brown">
                “BITO Mart is not just a platform—it’s a revolution for Bihar’s
                small businesses.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="05" title="05">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                BITO Voice:
                <br /> Telling Bihar’s Stories to the World
              </h4>
              <p>
                BITO Voice is a digital media platform dedicated to celebrating
                the stories of Biharis who have achieved greatness across the
                globe. Through inspiring narratives, interviews, and showcases,
                we aim to uplift Bihar’s image and inspire pride.
              </p>
              <p>
                <strong>Celebrating Achievements:</strong> Highlighting life
                stories of celebrated Biharis excelling in various fields.
              </p>
              <p>
                <strong>Global Platform:</strong> Bridging the gap between
                Bihar’s rich heritage and modern success stories.
              </p>
              <p className="text-brown">
                “BITO Voice is where the triumphs of Biharis echo worldwide.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="06" title="06">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                Tourism and Spirituality:
                <br /> Celebrating Bihar’s Rich Legacy
              </h4>
              <p>
                Bihar’s iconic spiritual sites, including Nalanda, Vaishali,
                Bodh Gaya, and Lachhuar, are transformed into global
                destinations under BITO’s tourism initiatives.
              </p>
              <p>
                <strong>Global Tourism Hub:</strong>Enhancing infrastructure and
                promoting Bihar’s heritage globally.
              </p>
              <p>
                <strong>Cultural Pride:</strong> Showcasing the spiritual and
                cultural essence of Bihar.
              </p>
              <p>
                <strong>Economic Impact:</strong> Boosting revenue and creating
                jobs through heritage tourism.
              </p>
              <p className="text-brown">
                “Every visitor who discovers Bihar’s spiritual legacy carries a
                piece of its magic with them.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="07" title="07">
        <div>
          <div className="row pb-lg-5">
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={biharAsmitaFoundation} alt="" width="100%" />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h4 className="font-neulis-mdm">
                Global Partnerships and Trade:
                <br /> Connecting Bihar to the World
              </h4>
              <p>
                BITO establishes strategic collaborations to expand Bihar’s
                global footprint in trade, investment, and cultural exchange.
              </p>
              <p>
                <strong>Strategic Alliances:</strong>BITO establishes strategic
                collaborations to expand Bihar’s global footprint in trade,
                investment, and cultural exchange.
              </p>
              <p>
                <strong>Diaspora Connection:</strong> Mobilizing the global Bihari community through over 25 BITO chapters worldwide.
              </p>
              <p>
                <strong>Economic Leadership:</strong> Positioning Bihar as a key player in the global economy.
              </p>
              <p className="text-brown">
              “Our partnerships aren’t just about commerce; they’re about sharing Bihar’s story with the world.”
              </p>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>

    
       <div className="row pt-lg-5 pb-4 pb-md-1">
            <div className="col-12 col-md-6 my-3 my-md-1">
              <h3 className="biaHeading">Organizational Structure:</h3>
              <h4 className="font-neulis-mdm mb-5">
                BITO will have a well-defined organizational structure
                comprising the following elements:
              </h4>
              <p>
                <strong>A. Board of Directors:</strong> A group of experienced
                and prominent business leaders who will provide strategic
                guidance and direction to BITO.
              </p>
              <p>
                <strong>B. Executive Committee:</strong> Responsible for
                day-to-day operations, decision-making, and implementation of
                BITO's initiatives.
              </p>
              <p>
                <strong>C. Sector-Specific Committees:</strong> Specialized
                committees focusing on different sectors like agriculture,
                manufacturing, IT, healthcare, etc., to address the unique
                challenges and opportunities in each sector.
              </p>
              <p>
                <strong>D. Regional Chapters:</strong> To ensure effective
                coordination and representation across different regions of
                Bihar and other countries, BITO will establish regional
                chapters.
              </p>
            </div>
            <div className="col-12 col-md-6 px-3 px-md-4">
              <img src={organizationalStructure} alt="" width="100%" />
            </div>
          </div>
          
          </>
  );
};
