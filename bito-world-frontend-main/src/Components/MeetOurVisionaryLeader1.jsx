/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import Amresh from "../assets/amresh.png";
import Jeff from "../assets/Jheff.jpg"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button, Image, Modal } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import MeetOurLeaderHome from "./MeetOurLeaderHome";

// Data for the leaders
const firstLeader = [
  {
    name: "Shri Chirag Paswan",
    role: "Chairman",
    image: Section3, 
    modalMessage: (
      <>
        <p>Dear All,</p>
        <p>
          I extend a warm welcome to you on behalf of Bihar International Trade
          Organization (BITO), a platform committed to advancing economic
          prosperity and cultural heritage in Bihar. At BITO, our mission
          revolves around shaping an "Atma Nirbhar Bihar" and fostering positive
          change through collaborative efforts.
        </p>
        <p>Empowering Innovation with BITO Startup Incubator</p>
        <p>
          We are excited to share our latest endeavor, the BITO Startup
          Incubator, a pivotal initiative fostering innovation and
          entrepreneurship. This initiative positions Bihar as a hub for
          creative ventures, contributing to the state's self-reliance.
        </p>
        <p>Global Collaboration for Economic Growth</p>
        <p>
          BITO has established chapters in 21 countries, strategically
          positioned to facilitate investments in Bihar. Our global presence is
          dedicated to accelerating economic growth and creating opportunities
          for both local and international investors. Celebrating Bihar's Rich
          Cultural Heritage
        </p>
        <p>
          Bihar is the cradle of cultural luminaries such as Mother Sita, Lord
          Buddha, Lord Mahavir, Guru Govind Singh, and many others. BITO is
          dedicated to promoting Bihar's rich cultural heritage globally,
          recognizing its potential for tourism and religious pilgrimage.
        </p>
        <p>
          Embracing "Bihari Asmita" Join us in celebrating "Bihari Asmita,"
          where we take pride in declaring, "Yes, I am Bihari." This affirmation
          encapsulates the essence of Bihar's cultural richness and the
          significant contributions of its people on the global stage. Transform
          Bihar: Together We Can We invite you to embark on a transformative
          journey with BITO. "Transform Bihar: Together We Can" is not just a
          motto; it's an invitation to unite, share expertise, and collectively
          drive economic growth. Your involvement can make a significant impact,
          contributing to a brighter and more prosperous Bihar. Thank you for
          joining us on this exciting journey. Together, let's shape a future
          where Bihar thrives economically and culturally.
        </p>
        <p>Warm regards, <br /> Shri Chirag Paswan</p>
      </>
    ),
  },
];
const leaders = [
  {
    name: "Pravin Kumar",
    role: "President",
    image: PravinKumar,
    shortMsg:'It is with great pride and responsibility that I address you....',
    modalMessage: (
      <>
        <p>Dear All,</p>
        <p>
          It is with great pride and responsibility that I address you as the
          President of the Bihar International Trade Organisation (BITO). Under
          leadership of Shri Chirag Paswan , as we embark on a transformative
          journey, BITO is set to drive significant change in the social,
          economic, and cultural landscapes of Bihar.
        </p>
        <p>
          Our mission is deeply rooted in the abundant potential of Bihar—a
          state rich in resources, culture, and talent. Recognizing the untapped
          capabilities of our local industries and the creativity of our
          entrepreneurs, BITO is dedicated to creating an environment where
          these elements can flourish. Our strategic support and development
          initiatives are focused on strengthening local industries and igniting
          a startup revolution in our state. This commitment to nurturing local
          businesses and startups is at the heart of our strategy to enhance
          employment and economic growth in Bihar.
        </p>
        <p>
          Additionally, BITO is committed to promoting Bihari culture globally.
          Our rich heritage, spanning centuries, is deserving of global
          recognition. By showcasing our traditions, arts, and festivals
          internationally, we aim to instill a sense of pride among Biharis
          worldwide and establish connections that go beyond borders. This
          initiative to champion our culture not only enhances Bihar's global
          image but also attracts tourism and international investments,
          benefiting our local economy.
        </p>
        <p>
          The path ahead is filled with both opportunities and challenges. With
          the combined efforts of our members, partners, and the broader
          community, I am confident in BITO's role in shaping a brighter future
          for Bihar. Let us move forward with determination to transform Bihar
          into a hub of industry, innovation, and cultural pride.
        </p>
        <p>
          Join us in celebrating "Bihari Asmita," where we take pride in
          declaring, "Yes, I am Bihari." This affirmation encapsulates the
          essence of Bihar's cultural richness and the significant contributions
          of its people on the global stage.
        </p>
        <p>
          Together, let's embrace this journey of transformation and make a
          lasting impact.
        </p>
        <p>
          Best regards, <br />
          Pravin Kumar
        </p>
      </>
    ),
  },
  {
    name: "Amaresh Mishra",
    role: "Secretary-General",
    image: Amresh,
    shortMsg:'As Secretary General of BITO, I am proud to lead an...',
    modalMessage: (
      <>
        <p>Dear All,</p>
        <p>
          As Secretary General of BITO, I am proud to lead an organization that
          drives innovation and collaboration in our industry. Our commitment to
          advancing technology and fostering global partnerships has never been
          stronger. Together, we will continue to overcome challenges and create
          opportunities for sustainable growth and development.
        </p>
      </>
    ),
  },
  {
    name: "Clr. Jeff Whitton FAICD",
    role: "Honorary Global Advisor",
    image: Jeff,
    shortMsg:'Clr. Jeff Whitton FAICD, is an esteemed Australian businessman and entrepreneur...',
    modalMessage: (
      <>
        <p>Dear All,</p>
        <p>
          Clr. Jeff Whitton FAICD, is an esteemed Australian businessman and
          entrepreneur with over three decades of industry leadership. With 20
          years of dedicated service as a Local Government councillor, Jeff has
          been a driving force in public service and community development,
          leaving a lasting impact on the communities he serves. His exceptional
          career spans 40 years in Digital Technology, Cybersecurity, and
          Information Intelligence, making him a formidable expert in these
          critical domains.
        </p>
        <p>
          As a seasoned CEO and Board Chairman, Jeff is celebrated for his
          visionary leadership and strategic acumen. He is a passionate advocate
          for Regional Australia, where he has been a relentless champion for
          initiatives that drive social, economic, and cultural transformation.
          Jeff’s unwavering commitment to progress underscores his reputation as
          a trailblazer who is deeply invested in shaping the future of
          Australia’s regional landscapes.
        </p>
        <p>
          In his capacity as a Global Advisor, Jeff Whitton is set to lead and
          fortify the burgeoning partnership between Australia and India, with a
          special focus on the Bihar International Trade Organisation (BITO). At
          the core of BITO’s mission is the powerful concept of Bihari Asmita,
          which champions the vibrant cultural identity and pride of Bihar. Jeff
          is poised to advance BITO’s vision, propelling the revival and
          celebration of Bihar’s rich traditions, arts, crafts, and heritage. He
          recognizes that this cultural renaissance is vital for cultivating a
          dynamic community of entrepreneurs and innovators who are rooted in
          their heritage while striving for global excellence.
        </p>
        <p>
          Jeff’s leadership will be a catalyst in forging strong collaborations
          that bridge the cultural and economic ties between Australia and
          India. His visionary approach will ensure that BITO continues to
          ignite a deep sense of pride and belonging among Biharis, empowering
          them to excel on the global stage. Under his stewardship, the
          relationship between these two great nations, particularly through
          BITO’s initiatives, is destined to flourish, creating transformative
          opportunities that celebrate and elevate the rich cultural legacy of
          Bihar.
        </p>
      </>
    ),
  },
  // New Leaders here
 
   
];

const MeetOurVisionaryLeader = (props) => {
  const [modalData, setModalData] = useState(null);

  const handleClose = () => setModalData(null);

  const handleShowModal = (leader) => {
    setModalData(leader);
  };

  return (
    <section className="container py-5">
      {/* DESKTOP DESIGN LAYOUT */}
      <h1 className="text-center section-3-heading d-none d-sm-block pb-5">
      Meet Our  
      Visionary Leaders
      </h1>

      {/* MOBILE DESIGN LAYOUT */}
      <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
        Meet Our <br />
        Visionary Leaders
      </h1>

      <div className="row section-2-row">
        {/* Right div for image */}
        <div className="right-side-div col-lg-6">
          <Image
            className="section-2-img"
            src={Section3}
            alt="section-2 img"
          />
        </div>

        {/* Left div for content */}
        <div className="left-side-div col-lg-6">
          <small className="new-heading">Shri Chirag Paswan</small>
          <p className="chairman">Chairman</p>
          <div className="section-para">
            <p>Dear All, </p>
            <p>
              I extend a warm welcome to you on behalf of Bihar International
              Trade Organization (BITO), a platform committed to advancing
              economic prosperity and cultural heritage in Bihar. At BITO, our
              mission revolves around shaping an "Atma Nirbhar Bihar" and
              fostering positive change through collaborative efforts.
            </p>
            <p>Empowering Innovation with BITO Startup</p>
          </div>

          <div>
            <Button
              onClick={() => handleShowModal(firstLeader[0])}
              className="section-3-btn px-4 py-2"
            >
              Read More{" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </div>

      <h1 className="advisorHeading py-5"> </h1>


      {/* Modal */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalData}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2 className="name-div-head">{modalData?.name}</h2>
            <p className="name-div-subhead">{modalData?.role}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData?.modalMessage}</Modal.Body>
      </Modal>

      <MeetOurLeaderHome/>
    </section>
  );
};

export default MeetOurVisionaryLeader;
