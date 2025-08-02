
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import MembershipImg from "../assets/membership.png";
import Amresh from '../assets/amresh.png'
import Vision from "../assets/Layer-21.png";
import Mission from "../assets/Layer-22.png";
import Kamal from '../assets/kamal.png'
import Kamal2 from '../assets/member/kamfool.jpg'
import Jeff from '../assets/Jheff.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Layer23,
  Layer24,
  Layer25,
  Layer26,
  Layer27,
  Layer28,
  Layer29,
  Layer30,
  Layer31,
  Layer33,
  Layer34,
  ObjectiveGoals,
} from "../assets";
import OurPartner from "../Components/OurPartner";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import GlobalPresenceSlider from "../Components/GlobalPresenceSlider";
import Roadmap from "../Components/Roadmap";



const Home = (props) => {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false)
  const [modalShow3, setModalShow3] = React.useState(false)
  const [modalShow4, setModalShow4] = React.useState(false)

  const handleClose = () => setModalShow(false);
  const handleClose2 = () => setModalShow2(false)
  const handleClose3 = () => setModalShow3(false)
  const handleClose4 = () => setModalShow4(false)

  return (
    <>
      {/* Hero Banner */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        speed={1200}
        loop={true}
        autoplay={{
          delay: 200000, // Set autoplay delay to 4 seconds
          disableOnInteraction: false, // Keep autoplay running after interaction
        }}
        pagination={{
          clickable: true, // Enables clickable pagination dots
          dynamicBullets: true, // Makes pagination bullets interactive
        }}
        breakpoints={{
          0: { slidesPerView: 1 },  // Mobile: 1 card per slide
          768: { slidesPerView: 1 } // Desktop/Tablet: 2 cards per slide
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mainSwiper"
        style={{
          "--swiper-navigation-color": "#fff",
          "marginTop": "-170px"
        }}
      >

        <SwiperSlide className="h-100 home-slider"
        >
<div className="container text-white tomker" style={{ height: "100vh" }}>
            <Row>
              <Col lg={4}>
                {/* <Link to={'/membership'} className="member-button d-sm-none d-block">

<Button
  style={{
    borderColor: "white",
    fontSize: "18px",
    borderRadius: "50px",
    marginTop: "-56px",
  }}
  className="rounded-full bg-white text-black outline-none border-none px-4 py-2 text-small"
>
  Become a Member <i class="fa fa-arrow-right" aria-hidden="true"></i>
</Button>
</Link> */}
                <div className="first-head-box">

                  {/* DESKTOP MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to</span> <br />
                    <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                      Bihar International Trade Organization
                    </span>
                    <br />
                    <span className="main-banner-heading p-0 m-0" >BITO</span>
                  </h6>
                  {/* FOR MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to Bihar International</span> <br />
                    <span className="sub-heading" style={{ paddingLeft: "6px" }}>
                      Trade Organization
                    </span>
                    <br />
                    <span className="main-banner-heading p-0 m-0" >BITO</span>
                  </h6>
                </div>

                <p className="bottom-heading d-none" style={{ paddingLeft: "6px" }}>
                  Empowering Bihar - Inspiring World
                </p>

              </Col>

              <Col lg={4}></Col>

              <Col className="right-heading right-col d-none" lg={4}>
                <div className="div">
                  <h6>
                    Your Gateway to <span>Bihar&apos;s</span>
                  </h6>
                  <h6>
                    <span>Rich Heritage</span> and Future
                  </h6>
                  <h6>Opportunities</h6>
                  <hr style={{ color: "white" }} />
                  <p>
                    Join us in celebrating Bihar&apos;s legacy while fostering
                    innovation and global connections for a brighter tomorrow.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </SwiperSlide>
        <Link to={'/membership'} className="bottom-link"></Link>

      </Swiper>



      {/* Second Section */}
      <Container className="mb-0 mb-sm-5">
        <Row className="section-2-row d-flex align-items-center">
          {/* Left div for content */}
          <Col className="left-side-div together" lg={6}>
            <h2 className="section-2-head">Transform Bihar <br></br>
              Together, We Can</h2>
            <span>
              {"Fostering "}
              <strong style={{ color: "black" }}>
                Entrepreneurship, Innovation, and Global Connections
              </strong>
            </span>
            <div className="section-para">
              <p>
                The Bihar International Trade Organization (BITO) is a key force
                for progress and unity for people, both in India and worldwide.
                Through a series of well-structured initiatives, BITO is
                dedicated to building a vibrant, cohesive, and prosperous
                community that transcends borders and generations.{" "}
              </p>

              <p>
                By focusing on economic growth, cultural preservation, and
                global engagement, BITO ensures that Bihar's contributions are
                not only recognized but celebrated worldwide.
              </p>
            </div>
            {/* 
            <Link to={'https://bitoworld.in/old-site/about.php'}>
              <div>
                <Button className="section-2-btn px-4 py-2 mt-2">Learn More <i class='fa fa-arrow-right'></i></Button>
              </div>
            </Link> */}

          </Col>
          {/* Right div for image */}
          <Col className="right-side-div mx-auto" lg={6}>
            <Image style={{ width: '100%' }} src={Kamal} alt="img" className="d-sm-block d-none" />
            <Image style={{ width: '100%' }} src={Kamal2} alt="img" className="d-sm-none d-block mbon" />
          </Col>
        </Row>
      </Container>

      {/* Third section */}
      <div className="">
        <Container className="pb-5">
          {/* DESKTOP DESIGN LAYOUT  */}

          <h1 className="text-center section-3-heading d-none d-sm-block pb-5">
            Meet Our Visionary Leaders
          </h1>
          {/* MOBILE DESIGN LAYOUT  */}
          <h1 className="text-center section-3-heading d-sm-none d-block pb-5">
            Meet Our <br />Visionary Leaders
          </h1>


          <Row className="section-2-row">
            {/* Right div for image */}
            <Col className="right-side-div" lg={6}>
              <Image
                className="section-2-img"
                src={Section3}
                alt="section-2 img"
              />
            </Col>
            {/* Left div for content */}
            {/* Modal Popup for Chirag Paswan */}
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={modalShow}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <h2 className="section-2-head new-heading">Shri Chirag Paswan
                  </h2>
                  <p className="chairman">Chairman</p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <p>
                  Dear All,
                  <br />
                  <br />
                  I extend a warm welcome to you on behalf of Bihar International Trade Organization (BITO), a platform committed to advancing economic prosperity and cultural heritage in Bihar. At BITO, our mission revolves around shaping an "Atma Nirbhar Bihar" and fostering positive change through collaborative efforts.
                  <br />
                  <br />
                  Empowering Innovation with BITO Startup Incubator
                  <br />
                  <br />
                  We are excited to share our latest endeavor, the BITO Startup Incubator, a pivotal initiative fostering innovation and entrepreneurship. This initiative positions Bihar as a hub for creative ventures, contributing to the state's self-reliance.
                  <br />
                  <br />
                  Global Collaboration for Economic Growth
                  <br />
                  <br />
                  BITO has established chapters in 21 countries, strategically positioned to facilitate investments in Bihar. Our global presence is dedicated to accelerating economic growth and creating opportunities for both local and international investors.
                  <br />
                  Celebrating Bihar's Rich Cultural Heritage
                  <br />
                  <br />
                  Bihar is the cradle of cultural luminaries such as Mother Sita, Lord Buddha, Lord Mahavir, Guru Govind Singh, and many others. BITO is dedicated to promoting Bihar's rich cultural heritage globally, recognizing its potential for tourism and religious pilgrimage.
                  <br />
                  <br />
                  Embracing "Bihari Asmita"
                  <br />
                  Join us in celebrating "Bihari Asmita," where we take pride in declaring, "Yes, I am Bihari." This affirmation encapsulates the essence of Bihar's cultural richness and the significant contributions of its people on the global stage.
                  <br />
                  Transform Bihar: Together We Can
                  <br />
                  We invite you to embark on a transformative journey with BITO. "Transform Bihar: Together We Can" is not just a motto; it's an invitation to unite, share expertise, and collectively drive economic growth. Your involvement can make a significant impact, contributing to a brighter and more prosperous Bihar. Thank you for joining us on this exciting journey. Together, let's shape a future where Bihar thrives economically and culturally.
                  <br />
                  <br />
                  Warm regards,
                  <br />
                  Shri Chirag Paswan
                </p>
              </Modal.Body>

            </Modal>
            <Col className="left-side-div" lg={6}>
              <small className="new-heading">Shri Chirag Paswan
              </small>
              <p className="chairman">Chairman</p>
              <div className="section-para">
                <p>
                  Dear All, <br />
                  <br />
                  I extend a warm welcome to you on behalf of Bihar
                  International Trade Organization (BITO), a platform committed
                  to advancing economic prosperity and cultural heritage in
                  Bihar. At BITO, our mission revolves around shaping an
                  &quot;Atma Nirbhar Bihar&quot; and fostering positive change
                  through collaborative efforts.
                  <br />
                  <br />
                  Empowering Innovation with BITO Startup
                </p>
              </div>

              <div>
                <Button onClick={() => setModalShow(true)} className="section-3-btn px-4 py-2">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
              </div>
            </Col>
          </Row>
          {/* here comes the slider */}
          {/* Fouth Section */}
          {/* Prvin kumar */}
          {/* Pravin Kumar Modal */}


    {/* team lsioder start here */}

    <Swiper
  spaceBetween={20}
  slidesPerView={2}
  speed={1200}
  loop={true}
  autoplay={{
    delay: 20000, // 20 seconds
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }}
  modules={[Autoplay, Pagination]}
  className="mt-5"
>
  {/* Slide 1 */}
  <SwiperSlide>
    <Col>
      <div className="president-card premond">
        <div className="upper-title">
          <Image className="img-2-president" src={Amresh} alt="amresh-ji" />
          <div className="name-div">
            <h2 className="name-div-head">Amaresh Mishra</h2>
            <p className="name-div-subhead">Secretary-General</p>
            <p className="chairmain-inner">
              Bihar International Trade Organization
            </p>
          </div>
        </div>

        <p className="chairmain-msg">
          Dear All, <br /><br />
          As Secretary General of BITO, I am proud to lead an organization...
        </p>
        <div>
          <Button onClick={() => setModalShow3(true)} className="section-3-btn px-4 py-2">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Button>
        </div>
      </div>
    </Col>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <Col>
      <div className="president-card-2 premond">
        <div className="upper-title">
          <Image className="img-2-president" src={PravinKumar} alt="pravin-kumar" />
          <div className="name-div">
            <h2 className="name-div-head">Pravin Kumar</h2>
            <p className="name-div-subhead">President</p>
            <p className="chairmain-inner">
              Bihar International Trade Organization
            </p>
          </div>
        </div>

        <p className="chairmain-msg">
          Dear All,
          <br /><br />
          It is with great pride and responsibility that I address you...
        </p>
        <div>
          <Button onClick={() => setModalShow2(true)} className="section-3-btn px-4 py-2">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Button>
        </div>
      </div>
    </Col>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <Col className="d-flex">
      <div className="president-card-3 premond">
        <div className="upper-title">
          <Image style={{ objectFit: 'cover' }} className="img-2-president" src={Jeff} alt="jeff-whitton" />
          <div className="name-div">
            <h2 className="name-div-head">Clr. Jeff Whitton FAICD</h2>
            <p className="name-div-subhead">Honorary Global Advisor</p>
            <p className="chairmain-inner">
              Bihar International Trade Organization
            </p>
          </div>
        </div>

        <p className="chairmain-msg">
          <b>Dear All,</b> <br /> <br />
          Clr. Jeff Whitton FAICD, is an esteemed Australian businessman...
        </p>
        <div>
          <br />
          <Button onClick={() => setModalShow4(true)} className="section-3-btn px-4 py-2">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Button>
        </div>
      </div>
    </Col>
  </SwiperSlide>
</Swiper>



  
          {/* New Modal ends here */}

          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow2}
            onHide={handleClose2}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2 className="name-div-head">Pravin Kumar</h2>
                <p className="name-div-subhead">President</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <p>
                Dear All,
                <br />
                <br />
                It is with great pride and responsibility that I address you as the President of the Bihar International Trade Organisation (BITO). Under leadership of Shri Chirag Paswan , as we embark on a transformative journey, BITO is set to drive significant change in the social, economic, and cultural landscapes of Bihar.
                <br />
                <br />
                Our mission is deeply rooted in the abundant potential of Bihar—a state rich in resources, culture, and talent. Recognizing the untapped capabilities of our local industries and the creativity of our entrepreneurs, BITO is dedicated to creating an environment where these elements can flourish. Our strategic support and development initiatives are focused on strengthening local industries and igniting a startup revolution in our state. This commitment to nurturing local businesses and startups is at the heart of our strategy to enhance employment and economic growth in Bihar.
                <br />
                <br />
                Additionally, BITO is committed to promoting Bihari culture globally. Our rich heritage, spanning centuries, is deserving of global recognition. By showcasing our traditions, arts, and festivals internationally, we aim to instill a sense of pride among Biharis worldwide and establish connections that go beyond borders. This initiative to champion our culture not only enhances Bihar's global image but also attracts tourism and international investments, benefiting our local economy.
                <br />
                <br />
                The path ahead is filled with both opportunities and challenges. With the combined efforts of our members, partners, and the broader community, I am confident in BITO's role in shaping a brighter future for Bihar. Let us move forward with determination to transform Bihar into a hub of industry, innovation, and cultural pride.
                <br />
                <br />
                Join us in celebrating "Bihari Asmita," where we take pride in declaring, "Yes, I am Bihari." This affirmation encapsulates the essence of Bihar's cultural richness and the significant contributions of its people on the global stage.
                <br />
                <br />
                Together, let's embrace this journey of transformation and make a lasting impact.
                <br />
                <br />
                Best regards, <br />
                Pravin Kumar
              </p>
            </Modal.Body>

          </Modal>
          {/* Aamreesh mishra modal */}
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow3}
            onHide={handleClose3}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2 className="name-div-head">Amaresh Mishra
                </h2>
                <p className="name-div-subhead">Secretary-General
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <p>
                Dear All,
                <br />
                <br />
                As Secretary General of BITO, I am proud to lead an organization that
                drives innovation and collaboration in our industry. Our commitment to
                advancing technology and fostering global partnerships has never been
                stronger. Together, we will continue to overcome challenges and create
                opportunities for sustainable growth and development.
                <br />
                <br />
                Under the visionary leadership of Shri Chirag Paswan, BITO has
                established itself as a catalyst for change, promoting Bihar's rich
                cultural heritage while fostering economic growth and international
                partnerships. Our organization serves as a bridge between tradition
                and progress, ensuring that Bihar's potential is recognized globally.
                <br />
                <br />
                As we move forward, I am committed to strengthening our global
                network of 21 countries, enhancing our startup incubator initiatives,
                and promoting "Bihari Asmita" worldwide. Together, we will continue
                to transform Bihar into a hub of innovation, culture, and economic
                prosperity.
                <br />
                <br />
                Best regards, <br />
                Amaresh Mishra
              </p>
            </Modal.Body>

          </Modal>
          {/* Jeff Modal */}
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow4}
            onHide={handleClose4}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2 className="name-div-head">Clr. Jeff Whitton FAICD</h2>
                <p className="name-div-subhead">Honorary Global Advisor
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <p>
                Dear All,
                <br />
                <br />
                Clr. Jeff Whitton FAICD, is an esteemed Australian businessman and entrepreneur with over three decades of industry leadership. With 20 years of dedicated service as a Local Government councillor, Jeff has been a driving force in public service and community development, leaving a lasting impact on the communities he serves. His exceptional career spans 40 years in Digital Technology, Cybersecurity, and Information Intelligence, making him a formidable expert in these critical domains.
                <br />
                <br />
                As a seasoned CEO and Board Chairman, Jeff is celebrated for his visionary leadership and strategic acumen. He is a passionate advocate for Regional Australia, where he has been a relentless champion for initiatives that drive social, economic, and cultural transformation. Jeff's unwavering commitment to progress underscores his reputation as a trailblazer who is deeply invested in shaping the future of Australia's regional landscapes.
                <br />
                <br />
                In his capacity as a Global Advisor, Jeff Whitton is set to lead and fortify the burgeoning partnership between Australia and India, with a special focus on the Bihar International Trade Organisation (BITO). At the core of BITO's mission is the powerful concept of Bihari Asmita, which champions the vibrant cultural identity and pride of Bihar. Jeff is poised to advance BITO's vision, propelling the revival and celebration of Bihar's rich traditions, arts, crafts, and heritage. He recognizes that this cultural renaissance is vital for cultivating a dynamic community of entrepreneurs and innovators who are rooted in their heritage while striving for global excellence.
                <br />
                <br />
                Jeff's leadership will be a catalyst in forging strong collaborations that bridge the cultural and economic ties between Australia and India. His visionary approach will ensure that BITO continues to ignite a deep sense of pride and belonging among Biharis, empowering them to excel on the global stage. Under his stewardship, the relationship between these two great nations, particularly through BITO's initiatives, is destined to flourish, creating transformative opportunities that celebrate and elevate the rich cultural legacy of Bihar.
              </p>
            </Modal.Body>

          </Modal>

          {/* Old UX to show commite members */}
          {/* <Row className="mt-5">
            <Col lg={4}>
              <div className="president-card-2">
                <div className="upper-title">
                  <Image className="img-2-president" src={PravinKumar} alt="pravin-kumar" />
                  <div className="name-div">
                    <h2 className="name-div-head">Pravin Kumar</h2>
                    <p className="name-div-subhead">President</p>

                  </div>
                </div>
                <p className="chairmain-inner">
                  Welcome to Bihar International Trade Organization
                </p>
                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  It is with great pride and responsibility that I address you as
                  the President of the Bihar International Trade Organisation
                  (BITO). Under leadership of Sh. Chirag Paswan , as we embark on
                  a transformative journey, BITO is set to drive significant
                  change in the social, economic, and cultural landscapes of
                  Bihar.....
                </p>
                <div>
                  <Button onClick={() => setModalShow2(true)} className="section-3-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>
         
            <Col className="amreesh-div" lg={4}>
              <div className="president-card">
                <div className="upper-title">
                  <Image className=" img-2-president" src={Amresh} alt="amresh-ji" />
                  <div className="name-div">
                    <h2 className="name-div-head">Amaresh Mishra
                    </h2>
                    <p className="name-div-subhead">Secretary-General
                    </p>

                  </div>
                </div>
                <p className="chairmain-inner">
                  Welcome to Bihar International Trade Organization
                </p>
                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  As Secretary General of BITO, I am proud to lead an organization that drives innovation and collaboration in our industry. Our commitment to advancing technology and fostering global partnerships has never been stronger. Together, we will continue to overcome challenges and create opportunities for sustainable growth and development.
                </p>
                <div>
                  <Button onClick={() => setModalShow3(true)} className="section-3-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>
             
          

            <Col className="amreesh-div" lg={4}>
              <div className="president-card">
                <div className="upper-title">
                  <Image style={{ objectFit: 'cover' }} className=" img-2-president" src={Jeff} alt="amresh-ji" />
                  <div className="name-div">
                    <h2 className="name-div-head">Clr. Jeff Whitton FAICD</h2>
                    <p className="name-div-subhead">Honorary Global Advisor
                    </p>

                  </div>
                </div>
                <p className="chairmain-inner">
                  Welcome to Bihar International Trade Organization
                </p>
                <p className="chairmain-msg">
                  Dear All,
                  <br />
                  <br />
                  Clr. Jeff Whitton FAICD, is an esteemed Australian businessman and entrepreneur with over three decades of industry leadership. With 20 years of dedicated service as a Local Government councillor, Jeff has been a driving force in public service and community development, leaving a lasting impact on the communities he serves. His exceptional career spans 40 years ....
                </p>
                <div>
                  <Button onClick={() => setModalShow4(true)} className="section-3-btn px-4 py-2">Read More</Button>
                </div>
              </div>
            </Col>
          </Row> */}


        </Container>
      </div>

      {/* Fifth Section */}



      {/* Sixth section Mission & Vision Section */}

      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row className="mission-vision-row py-5">
            <Col className="mission-vision-row-col-1" lg={6}>
              <div className="vision">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Vision} alt="" />
                  <span>Vision</span>
                </div>
                <p className="">
                  An Atmanirbhar Bihar—A Glorious Bihar Asmita—A Prosperous, Proud,
                  And Cohesive Bihari Community Leading Globally.

                </p>

                {/* <div>
                  <Button className="vision-btn px-4 py-2">Read More</Button>
                </div> */}

              </div>
            </Col>

            <Col className="mx-auto mission-vision-row-col-2" lg={6}>
              <div className="mission">
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center"
                >
                  <img src={Mission} alt="" />
                  <span>Mission</span>
                </div>
                <p className="">
                  To spearhead a revolution in sustainable development, drive transformative
                  change across bihar and beyond, and create a lasting legacy of pride,
                  progress, and enduring strength for future generations.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="events-banner-section" style={{
 position: 'relative',
 height: '500px',
 overflow: 'hidden',
 background: '#422a1d',
 margin: '40px 0'
}}>
 <style jsx>{`
   .scroll-container {
     position: absolute;
     top: 0;
     left: 0;
     width: 500%;
     height: 100%;
     display: flex;
     animation: autoScroll 25s linear infinite;
   }
   .event-slide {
     width: 20%;
     height: 100%;
     background-size: cover;
     background-position: center;
   }
   .slide-1 { background-image: url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'); }
   .slide-2 { background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'); }
   .slide-3 { background-image: url('https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800'); }
   .slide-4 { background-image: url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800'); }
   .slide-5 { background-image: url('https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800'); }
   .banner-overlay {
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: rgba(66, 42, 29, 0.8);
     z-index: 2;
   }
   .banner-content {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     text-align: center;
     color: white;
     z-index: 3;
     max-width: 600px;
     padding: 0 20px;
   }
   .banner-title {
     font-size: 2.5rem;
     font-weight: bold;
     margin-bottom: 1rem;
     text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
   }
   .event-cta-btn {
     display: inline-block;
     padding: 12px 25px;
     background: linear-gradient(45deg, #ff6b35, #f7931e);
     color: white;
     text-decoration: none;
     border-radius: 25px;
     font-weight: bold;
     transition: all 0.3s ease;
     margin-top: 20px;
   }
   @keyframes autoScroll {
     0% { transform: translateX(0); }
     20% { transform: translateX(-20%); }
     40% { transform: translateX(-40%); }
     60% { transform: translateX(-60%); }
     80% { transform: translateX(-80%); }
     100% { transform: translateX(0); }
   }
 `}</style>

 <div className="scroll-container">
   <div className="event-slide slide-1"></div>
   <div className="event-slide slide-2"></div>
   <div className="event-slide slide-3"></div>
   <div className="event-slide slide-4"></div>
   <div className="event-slide slide-5"></div>
 </div>

 <div className="banner-overlay"></div>

 <div className="banner-content">
   <h2 className="banner-title">Our Events & Achievements</h2>
   <p>Connecting Bihar's Excellence Worldwide</p>
   <a href="/events" className="event-cta-btn">
     View All Events <i className="fa fa-arrow-right"></i>
   </a>
 </div>
</div>




      {/* Seventh Objectives section */}

      <Container className="py-5 d-flex objective-container">
        <div className="objective-container-div read-center">
          <h2
            style={{
              position: "relative",
            }}
            className="section-3-heading">
            Objectives
          </h2>
          <p className="pt-3">
            BITO operates with a clear set of objectives that guide its
            activities and initiatives. These objectives are designed to address
            the diverse needs of the Bihari community, from economic empowerment
            to cultural preservation
          </p>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap flex-grow-1 my-4 mx-1 domtrack">
              <div className="w-50 px-3 domtrack1">
                <Image src={Layer23} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Economic <br /> Empowerment</strong>
                </p>
              </div>
              <div className="w-50 px-3 pb-4 border-start domtrack">
                <Image src={Layer24} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Cultural Preservation <br />& Promotion</strong>
                </p>
              </div>
            </div>
            <div className="d-flex px-3 flex-wrap pt-4 flex-grow-1 collaboration">
              <div className="w-50">
                <Image src={Layer25} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Global <br />Collaboration</strong>
                </p>
              </div>
              <div className="w-50 px-3 border-start">
                <Image src={Layer26} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Inclusitivity & <br /> Sustainability</strong>
                </p>
              </div>
            </div>

          </div>
          <a href="https://bitoworld.in/old-site/about.php">
            <button className=" my-4 section-3-btn px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </a>
        </div>
        <div className="w-50 m-auto w-sm-100">
          <Image src={ObjectiveGoals} alt="" className="objective-img" />
        </div>
      </Container>



      <div className="road-map">
        <Roadmap />
      </div>




      {/* Eight BITO Bodies section */}

      <div style={{ backgroundColor: "#fffbf5" }} className="mt-sm-0">
        <Container
          className="py-5 text-center">
          <h1 className="text-center section-3-heading">BITO Bodies</h1>
          <p>
            BITO Arms are specialized divisions within the Bihar International
            Trade Organization that focus on different aspects of its mission
          </p>
          <div className="d-flex justify-content-center gap-5 gap-sm-4 my-5 flex-wrap bodies">
            <div className="d-flex flex-column align-items-center px-sm-5 startup">
              <Image
                className="section-2-img p-3"
                src={Layer27}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Startup & <br />
                Incubation Centre <br />
                (BSIC)
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 section-2-container asmita">
              <Image
                className="section-2-img p-3"
                src={Layer28}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Bihar Asmita
                <br />
                Foundation
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 industries">
              <Image
                className="section-2-img p-3"
                src={Layer29}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong>
                BITO Industries
                Association (BIA)
              </strong>
            </div>
          </div>
          <a href="https://bitoworld.in/old-site/about.php">
            <button className="section-3-btn px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </a>
        </Container>
      </div>

      {/* ninth section */}

      <Container className="text-center my-5 Initiatives">
        <h1 className="text-center section-3-heading">
          Key Programs and Initiatives
        </h1>
        <p>
          BITO has launched several impactful programs and initiatives that are
          designed to address the needs of the Bihari community across various
          domains
        </p>
        <div className="d-flex justify-content-center gap-5 my-5 custom-wrap desktoponly">
          <div className="d-flex flex-column align-items-center px-sm-5">
            <Image
              className="section-2-img p-3"
              src={Layer33}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Bihar University</strong>
          </div>
          <div className="d-flex flex-column align-items-center px-sm-5">
            <Image
              className="section-2-img p-3"
              src={Layer30}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>Business Connect & Collaboration</strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
            <Image
              className="section-2-img p-3"
              src={Layer31}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>
              Global Bihar Heritage Initiative
            </strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 section-2-container">
            <Image
              className="section-2-img p-3"
              src={Layer34}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong>BITO Multi Specialty <br/> Hospital</strong>
          </div>
        </div>
        <a href="https://bitoworld.in/old-site/about.php">
          <button className="section-3-btn px-4 py-2 btn btn-primary">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </a>
      </Container>

      {/* Global Presence Slider */}

      <div className="">
        <GlobalPresenceSlider />
      </div>


      {/* Membership in BITO  */}

      <Container className="pt-sm-5">
        <Row style={{ background: "#422a1d" }}>
          <Col className="p-5 p-sm-1" lg={4}>
            <div className="membership px-sm-3">
              <h4>Memebership</h4>
              <p>
                Membership in BITO will be open to individuals, entrepreneurs,
                industrialists, professionals, and organizations having a
                connection to Bihar and sharing the vision and values of the
                organization.
              </p>
              <div>
                <Link to={'/membership'}>
                  <Button className="membership-btn px-4 py-2 mt-4">
                    Become A Member <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={8} className="p-mobile">
            <Image
              className="mw-100 pb-sm-4"
              src={MembershipImg}
              alt="membership-img"
            />
          </Col>
        </Row>
      </Container>




      {/* Our Partner */}

      <div className="py-5">
        <OurPartner />
      </div>
    </>
  );
};

export default Home;