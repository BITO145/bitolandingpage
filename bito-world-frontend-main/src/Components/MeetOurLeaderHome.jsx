/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import Amresh from "../assets/amresh.png";
import anil from '../assets/anil-pratham.png'
import bannerBito from '../assets/bito-advisor-banner.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Button, Image, Modal } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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
    bitoAdvisor: false,
    name: "Pravin Kumar",
    role: "President",
    image: PravinKumar,
    shortMsg: 'It is with great pride and responsibility that I address you....',
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
    bitoAdvisor: false,
    name: "Amaresh Mishra",
    role: "Secretary-General",
    image: Amresh,
    shortMsg: 'As Secretary General of BITO, I am proud to lead an...',
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
  // New Leaders here
  {
    bitoAdvisor: true,
    name: "Anil Pratham",
    bgColor: '#f5e0cb',
    bannerImage: bannerBito,
    role: "IPS (Former DGP, Police Reforms), Gujarat",
    image: anil,
    shortMsg: 'Shri Anil Pratham, IPS, a distinguished officer and a dedicated leader...',
    specialTitle: 'BITO',
    specialHeading: 'Advisors',
    redirectTo: '/bito-advisors',
    modalMessage: (
      <>
        <p>
          Shri Anil Pratham, IPS, a distinguished officer and a dedicated leader who has spent over three decades serving the nation with integrity and commitment. A 1989-batch IPS officer, he rose through the ranks with an unwavering focus on justice, public safety, and progressive reforms, ultimately serving as Director General of Police (DGP), Police Reforms, Gujarat.
        </p>
        <p>
          Throughout his career, Shri Anil Pratham has been more than just a law enforcement officer—he has been a guardian of justice, a mentor to many, and a changemaker. His work has touched countless lives, from ensuring women and child safety to tackling cybercrime, economic fraud, and human trafficking. His tenure with the Central Industrial Security Force (CISF) further deepened his understanding of national security and crisis management.
        </p>
        <p>
          What truly sets him apart is his people-centric approach. He believes that policing is not just about enforcing laws but about building trust, fostering community engagement, and driving meaningful reforms. His leadership has always been guided by a vision of making society safer, fairer, and more resilient.
        </p>
        <p>
          Now, as an Advisor to the Bihar International Trade Organisation (BITO), he brings his wealth of experience to a new mission—empowering Bihar’s people, businesses, and entrepreneurs. He sees Bihar not just as a state but as a land of opportunities, rich in culture, talent, and ambition. His commitment to fostering economic growth and social progress is a testament to his belief in collective development and a brighter future for all.
        </p>
        <p>Let’s build a stronger Bihar, together.</p> <br /><br />
        <strong>Jai Bihar! Jai Bharat!</strong>
      </>
    ),
  },

];


const MeetOurLeaderHome = (props) => {
  const [modalData, setModalData] = useState(null);

  const handleClose = () => setModalData(null);

  const handleShowModal = (leader) => {
    setModalData(leader);
  };

  return (
    <section className="container py-5">

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        modules={[Autoplay, Pagination]}
        className=""
      >
        {leaders.map((leader, index) => (
          <SwiperSlide key={index}>
            {leader.bitoAdvisor ? (
              <Link style={{ textDecoration: 'none' }} to={leader.redirectTo}>
                <div className="col-12">
                  <div style={{ background: `${leader.bgColor}` }} className="president-card-bitoAdvisors premond bitoAdvisorCard">
                    <img className="w-100" src={leader.bannerImage} alt="" />
                     

                  </div>
                </div>
              </Link>
            ) : <div className="col-12">
              <div className="president-card premond">
                <div className="upper-title">
                  <Image
                    className="img-2-president"
                    src={leader.image}
                    alt={leader.name}
                  />
                  <div className="name-div">
                    <h2 className="name-div-head">{leader.name}</h2>
                    <p className="name-div-subhead">{leader.role}</p>
                    <p className="chairmain-inner">
                      Bihar International Trade Organization
                    </p>
                  </div>
                </div>

                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  {leader.shortMsg ? leader.shortMsg : ""}
                </p>
                <div>
                  <Button
                    onClick={() => handleShowModal(leader)}
                    className="section-3-btn px-4 py-2"
                  >
                    Read More{" "}
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </div>}

          </SwiperSlide>
        ))}
      </Swiper>

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
    </section>
  );
};

export default MeetOurLeaderHome;
