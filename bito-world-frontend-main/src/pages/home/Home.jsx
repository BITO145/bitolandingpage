import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Section3 from "../../assets/team/chirag-paswan.png";
import PravinKumar from "../../assets/team/praveen.jpg";
import MembershipImg from "../../assets/banners/membership.png";
import Amresh from '../../assets/team/amresh.png'
import Vision from "../../assets/layers/Layer-21.png";
import Mission from "../../assets/layers/Layer-22.png";
import Kamal from '../../assets/team/kamal.png'
import Kamal2 from '../../assets/member/kamfool.jpg'
import Jeff from '../../assets/team/Jheff.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AdvisorBanner from "../../assets/banners/bito-advisor-banner.jpg";
import Banner03 from "../../assets/banners/Banner03.jpg";
import BitoWorldBanner from "../../assets/banners/BITO Site 4.png";
import TradeHero from "../../assets/tradehero.png";

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
} from "../../assets";
import OurPartner from "../../components/home/OurPartner.jsx";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import GlobalPresenceSlider from "../../components/home/GlobalPresenceSlider.jsx";
import Roadmap from "../../components/membership/Roadmap.jsx";



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
          delay: 4000, // Auto-scroll every 4 seconds
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

<SwiperSlide
  className="h-100 py-[50px] bg-[url('../assets/banners/Banner02.jpg')] bg-cover bg-center bg-no-repeat min-[800px]:max-[1200px]:py-[16pc] min-[600px]:max-[1000px]:py-[800px]! max-[600px]:mt-20 max-[600px]:bg-[url('../assets/home-banner/slider2.jpg')]"
>
<div className="container text-white" style={{ height: "100vh" }}>
       
            <Row>
              <Col lg={4}>
              
                <div className="max-[1000px]:mt-[170px]">

                  {/* DESKTOP MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to</span> <br />
                    <span className="text-[30px] max-[1000px]:text-[18px] " style={{ paddingLeft: "6px" }}>
                      Bihar International Trade Organization
                    </span>
                    <br />
                    <span className="p-0 m-0 text-[180px] font-extrabold leading-[130px] max-[1000px]:text-[6rem] max-[1000px]:font-['Neulis-bold']" >BITO</span>
                  </h6>
                  {/* FOR MOBILE ONLY  */}
                  <h6 style={{ fontSize: "20px" }} className="d-none">
                    <span style={{ paddingLeft: "6px" }}>Welcome to Bihar International</span> <br />
                    <span className="text-[30px] max-[1000px]:text-[18px]" style={{ paddingLeft: "6px" }}>
                      Trade Organization
                    </span>
                    <br />
                    <span className="p-0 m-0 text-[180px] font-extrabold leading-[130px] max-[1000px]:text-[6rem] max-[1000px]:font-['Neulis-bold']" >BITO</span>
                  </h6>
                </div>

                <p className="d-none text-[22px] font-medium max-[1000px]:text-[10px] max-[1000px]:-mt-[40px] max-[1000px]:text-center max-[1000px]:pl-0!" style={{ paddingLeft: "6px" }}>
                  Empowering Bihar - Inspiring World
                </p>

              </Col>

                            <Col lg={4}></Col>

              <Col className="d-none max-w-[25%] max-[1000px]:max-w-full max-[1000px]:mt-[40px] text-[23px] font-[200]" lg={4}>
                <div className="div">
                  <h6 className="text-[23px] font-[200]">
                    Your Gateway to <span className="font-extrabold">Bihar&apos;s</span>
                  </h6>
                  <h6 className="text-[23px] font-[200]">
                    <span className="font-extrabold">Rich Heritage</span> and Future
                  </h6>
                  <h6 className="text-[23px] font-[200]">Opportunities</h6>
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

        {/* Slide 2: Bihar International Trade Organization */}
        <SwiperSlide className="h-100 mt-12 sm:mt-0">
          <div className="relative h-screen min-h-[720px] overflow-hidden bg-[#2b1a13] mt-0 sm:mt-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={TradeHero}
                alt="India global trade"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#24140f]/35" />
              <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#24140f]/25 via-[#24140f]/25 to-transparent" />
            </div>

            {/* Subtle Texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
                `,
                backgroundSize: "90px 90px",
              }}
            />

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-6 lg:px-10">
              <div className="flex flex-1 items-center">
                <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
                  {/* Left */}
                  <div className="max-w-[720px]">
                    {/* Small Label */}
                    <div className="mb-7 flex items-center gap-3">
                      <span className="h-px w-10 bg-[#dca75b]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dca75b]">
                        Welcome to
                      </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-bold leading-[0.98] tracking-[-0.045em]">
                      <span className="block text-[52px] text-white sm:text-[68px] lg:text-[76px]">
                        Bihar International
                      </span>
                      <span className="mt-3 block text-[52px] text-[#dca75b] sm:text-[68px] lg:text-[76px]">
                        Trade Organization
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-[600px] text-[16px] leading-[1.8] text-white/70 lg:text-[17px]">
                      A global platform connecting Bihari entrepreneurs, industries and culture with the world.
                    </p>
{/* View Button */}
<div className="mt-8">
  <Link
    to="/Tradepage"
    className="group inline-flex items-center gap-3 rounded-full bg-[#dca75b] px-6 py-3 text-sm font-semibold text-[#422a1d] transition-all duration-300 hover:bg-[#f0bd73] hover:shadow-[0_10px_30px_rgba(220,167,91,0.25)]"
  >
    View Our Process

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 5l7 7-7 7M5 12h14"
      />
    </svg>
  </Link>
</div>
                    {/* Features */}
                    <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                      {["Global Network", "Verified Partners", "Quality Assured"].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
                        >
                          <svg className="h-4 w-4 text-[#dca75b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-white/90">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                </div>
              </div>

         
            </div>
          </div>
        </SwiperSlide>

     


      </Swiper>

 

      {/* Second Section */}
      <Container className="mb-0 mb-sm-5">
        <Row className="d-flex align-items-center max-[1000px]:-mt-[40px]">
          {/* Left div for content */}
          <Col className="max-w-[40%] max-[1000px]:max-w-full max-[1000px]:mt-[20px] max-[1000px]:text-center" lg={6}>
            <h2 className="text-[#b27f49] font-medium text-[4rem] max-[1000px]:text-center max-[1000px]:text-[3rem] max-[1000px]:mt-[20px] max-[1000px]:leading-[3rem]">Transform Bihar <br></br>
              Together, We Can</h2>
            <span className="text-[22px] leading-[2rem] mt-[20px] text-[#523b2f] font-['Bebas_Neue']">
              {"Fostering "}
              <strong style={{ color: "black" }}>
                Entrepreneurship, Innovation, and Global Connections
              </strong>
            </span>
            <div className="mt-[35px] max-[1000px]:mt-[15px]">
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
          <Col className="mx-auto" lg={6}>
            <Image style={{ width: '100%' }} src={Kamal} alt="img" className="d-sm-block d-none" />
            <Image style={{ width: '100%' }} src={Kamal2} alt="img" className="d-sm-none d-block max-[1000px]:-mt-[70px] max-[1000px]:relative max-[1000px]:z-[-1]" />
          </Col>
        </Row>
      </Container>

      {/* Third section */}
      <div className="">
        <Container className="pb-5">
          {/* DESKTOP DESIGN LAYOUT  */}

          <h1 className="text-center d-none d-sm-block pb-5 text-[#b27f4a] font-semibold text-[4rem] max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem]">
            Meet Our Visionary Leaders
          </h1>
          {/* MOBILE DESIGN LAYOUT  */}
          <h1 className="text-center d-sm-none d-block pb-5 text-[#b27f4a] font-semibold text-[4rem] max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem]">
            Meet Our <br />Visionary Leaders
          </h1>


          <Row className="max-[1000px]:-mt-[40px]">
            {/* Right div for image */}
            <Col lg={6}>
              <Image
                className="max-w-full rounded-[12px]"
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
                  <h2 className="text-[2rem] leading-[2rem] mt-[20px] text-[#523b2f] font-medium font-['Bebas_Neue']">Shri Chirag Paswan
                  </h2>
                  <p className="text-[20px] text-[#523b2f] font-semibold">Chief Patron</p>
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
            <Col className="max-w-[40%] max-[1000px]:max-w-full max-[1000px]:mt-[20px] max-[1000px]:text-left" lg={6}>
              <small className="text-[2rem] leading-[2rem] mt-[20px] text-[#523b2f] font-['Bebas_Neue']">Shri Chirag Paswan
              </small>
              <p className="text-[20px] text-[#523b2f] font-semibold">Chief Patron</p>
              <div className="mt-[35px] max-[1000px]:mt-[15px]">
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
                <Button onClick={() => setModalShow(true)} className="rounded-[50px] border-0 bg-[#422a1d] text-white text-[15px] font-semibold hover:bg-[#422a1d]! px-4 py-2">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></Button>
              </div>
            </Col>
          </Row>
     

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
                <h2 className="text-[#422a1d] font-bold text-[21px] max-[1000px]:text-[22px] max-[1000px]:mb-0">Pravin Kumar</h2>
                <p className="text-[12px] text-[#523b2f] font-semibold max-[1000px]:m-0 max-[1000px]:text-[16px]">President</p>
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
                <h2 className="text-[#422a1d] font-bold text-[21px] max-[1000px]:text-[22px] max-[1000px]:mb-0">Amaresh Mishra
                </h2>
                <p className="text-[12px] text-[#523b2f] font-semibold max-[1000px]:m-0 max-[1000px]:text-[16px]">Secretary-General
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
                <h2 className="text-[#422a1d] font-bold text-[21px] max-[1000px]:text-[22px] max-[1000px]:mb-0">Clr. Jeff Whitton FAICD</h2>
                <p className="text-[12px] text-[#523b2f] font-semibold max-[1000px]:m-0 max-[1000px]:text-[16px]">Honorary Global Advisor
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
                As a seasoned CEO and Board Founder, Jeff is celebrated for his visionary leadership and strategic acumen. He is a passionate advocate for Regional Australia, where he has been a relentless champion for initiatives that drive social, economic, and cultural transformation. Jeff's unwavering commitment to progress underscores his reputation as a trailblazer who is deeply invested in shaping the future of Australia's regional landscapes.
                <br />
                <br />
                In his capacity as a Global Advisor, Jeff Whitton is set to lead and fortify the burgeoning partnership between Australia and India, with a special focus on the Bihar International Trade Organisation (BITO). At the core of BITO's mission is the powerful concept of Bihari Asmita, which champions the vibrant cultural identity and pride of Bihar. Jeff is poised to advance BITO's vision, propelling the revival and celebration of Bihar's rich traditions, arts, crafts, and heritage. He recognizes that this cultural renaissance is vital for cultivating a dynamic community of entrepreneurs and innovators who are rooted in their heritage while striving for global excellence.
                <br />
                <br />
                Jeff's leadership will be a catalyst in forging strong collaborations that bridge the cultural and economic ties between Australia and India. His visionary approach will ensure that BITO continues to ignite a deep sense of pride and belonging among Biharis, empowering them to excel on the global stage. Under his stewardship, the relationship between these two great nations, particularly through BITO's initiatives, is destined to flourish, creating transformative opportunities that celebrate and elevate the rich cultural legacy of Bihar.
              </p>
            </Modal.Body>

          </Modal>

         

        </Container>
      </div>

      {/* Fifth Section */}



      {/* Sixth section Mission & Vision Section */}

      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row className="py-5 max-[1000px]:flex-col">
            <Col className="w-[45%] max-[1000px]:w-full" lg={6}>
              <div>
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center max-[1000px]:justify-center"
                >
                  <img src={Vision} alt="" className="w-[12%]" />
                  <span className="text-[3rem] font-semibold text-[#422a1d] font-['Bebas_Neue'] max-[1000px]:text-[2rem] max-[1000px]:leading-[1rem] max-[1000px]:mt-[20px]">Vision</span>
                </div>
                <p className="text-[15px] mt-[25px] text-[#422a1d] max-[1000px]:text-center max-[1000px]:mt-[10px]">
                  An Atmanirbhar Bihar—A Glorious Bihar Asmita—A Prosperous, Proud,
                  And Cohesive Bihari Community Leading Globally.

                </p>

            

              </div>
            </Col>

            <Col className="mx-auto w-[45%] max-[1000px]:w-full" lg={6}>
              <div>
                <div
                  style={{ gap: "20px" }}
                  className="d-flex align-items-center max-[1000px]:justify-center"
                >
                  <img src={Mission} alt="" className="w-[12%]" />
                  <span className="text-[3rem] font-semibold text-[#422a1d] font-['Bebas_Neue'] max-[1000px]:text-[2rem] max-[1000px]:leading-[1.5rem] max-[1000px]:mt-[25px]">Mission</span>
                </div>
                <p className="text-[15px] mt-[25px] text-[#422a1d] max-[1000px]:text-center max-[1000px]:mt-[10px] max-[1000px]:mb-0">
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
 <div className="absolute top-0 left-0 w-[500%] h-full flex animate-autoScroll">
  <div
    className="w-[20%] h-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800')" }}
  ></div>
  <div
    className="w-[20%] h-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800')" }}
  ></div>
  <div
    className="w-[20%] h-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800')" }}
  ></div>
  <div
    className="w-[20%] h-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800')" }}
  ></div>
  <div
    className="w-[20%] h-full bg-cover bg-center"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800')" }}
  ></div>
</div>

<div className="absolute inset-0 bg-[rgba(66,42,29,0.8)] z-20"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-30 max-w-[600px] px-[20px]">
  <h2 className="text-[2.5rem] font-bold mb-[1rem] text-[2px_2px_4px_rgba(0,0,0,0.7)]">Our Events & Achievements</h2>
  <p>Connecting Bihar's Excellence Worldwide</p>
  <a
    href="/events"
    className="inline-block px-[25px] py-[12px] bg-[linear-gradient(45deg,#ff6b35,#f7931e)] text-white no-underline rounded-[25px] font-bold transition-all ease-in-out delay-75 duration-[300ms] mt-[20px]"
  >
    View All Events <i className="fa fa-arrow-right"></i>
  </a>
</div>
</div>


      {/* Seventh Objectives section */}

      <Container className="py-5 d-flex max-[1000px]:flex-col">
        <div className="w-[36%] max-[1000px]:w-full max-[1000px]:text-center">
          <h2
            style={{
              position: "relative",
            }}
            className="text-[4rem] font-semibold text-[#b27f4a] max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem]">
            Objectives
          </h2>
          <p className="pt-3">
            BITO operates with a clear set of objectives that guide its
            activities and initiatives. These objectives are designed to address
            the diverse needs of the Bihari community, from economic empowerment
            to cultural preservation
          </p>
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-wrap flex-grow-1 my-4 mx-1 relative before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-[-20px] before:w-[200px] before:border-b before:border-[rgb(216,216,216)] max-[1000px]:text-center max-[1000px]:p-0! max-[1000px]:[&_img]:w-[47px]">
              <div className="w-50 px-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:bottom-[-20px] before:pb-[20px] before:w-[200px] before:border-b before:border-[rgb(216,216,216)] max-[1000px]:[&_img]:w-[50px]">
                <Image src={Layer23} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Economic <br /> Empowerment</strong>
                </p>
              </div>
              <div className="w-50 px-3 pb-4 border-start relative before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-[-20px] before:w-[200px] before:border-b before:border-[rgb(216,216,216)] max-[1000px]:[&_img]:w-[47px]">
                <Image src={Layer24} alt="" />
                <p className="pt-3" style={{
                  fontSize: "14px",
                }}>
                  <strong>Cultural Preservation <br />& Promotion</strong>
                </p>
              </div>
            </div>
            <div className="d-flex px-3 flex-wrap pt-4 flex-grow-1 max-[1000px]:text-center max-[1000px]:[&_img]:w-[50px]">
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
          <Link to="/about">
            <button className=" my-4 rounded-[50px] border-0 bg-[#422a1d] text-white text-[15px] font-semibold px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
        <div className="w-50 m-auto max-[1000px]:w-full!">
          <Image src={ObjectiveGoals} alt="" className="w-full rounded-[30px] max-[1000px]:mt-[20px]" />
        </div>
      </Container>



      <div className="road-map">
        <Roadmap />
      </div>




      {/* Eight BITO Bodies section */}

      <div style={{ backgroundColor: "#fffbf5" }}>
        <Container
          className="py-5 text-center">
          <h1 className="text-center text-[4rem] font-semibold text-[#b27f4a] max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem]">BITO Bodies</h1>
          <p>
            BITO Arms are specialized divisions within the Bihar International
            Trade Organization that focus on different aspects of its mission
          </p>
          <div className="d-flex justify-content-center gap-5 gap-sm-4 my-5 flex-wrap max-[1000px]:gap-y-[2rem]!">
            <div className="d-flex flex-column align-items-center px-sm-5 max-[1000px]:relative max-[1000px]:after:content-[''] max-[1000px]:after:absolute max-[1000px]:after:border-r max-[1000px]:after:border-[#dbc1a5] max-[1000px]:after:-right-[20px] max-[1000px]:after:h-full">
              <Image
                className="max-w-full rounded-[12px] p-3"
                src={Layer27}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong className="max-[1000px]:text-[14px]">
                BITO Startup & <br />
                Incubation Centre <br />
                (BSIC)
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 border-l border-r border-[#ccc] max-[1000px]:border-l-0 max-[1000px]:border-r-0">
              <Image
                className="max-w-full rounded-[12px] p-3"
                src={Layer28}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong className="max-[1000px]:text-[14px]">
                BITO Bihar Asmita
                <br />
                Foundation
              </strong>
            </div>
            <div className="d-flex flex-column align-items-center px-sm-5 max-[1000px]:border-t max-[1000px]:border-[#dbc1a5] max-[1000px]:w-full">
              <Image
                className="max-w-full rounded-[12px] p-3 max-[1000px]:mt-[15px]"
                src={Layer29}
                alt="section-2 img"
                width={100}
                height={100}
              />
              <strong className="max-[1000px]:text-[14px]">
                BITO Industries
                Association (BIA)
              </strong>
            </div>
          </div>
          <Link to="/about">
            <button className="rounded-[50px] border-none bg-[#422a1d] text-white text-[15px] font-semibold px-4 py-2 btn btn-primary">
              Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </Link>
        </Container>
      </div>

      {/* ninth section */}

      <Container className="text-center my-5">
        <h1 className="text-center text-[4rem] font-semibold text-[#b27f4a] max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem]">
          Key Programs and Initiatives
        </h1>
        <p>
          BITO has launched several impactful programs and initiatives that are
          designed to address the needs of the Bihari community across various
          domains
        </p>
        <div className="grid grid-cols-2 gap-0 my-5 justify-center min-[900px]:items-center min-[1001px]:grid-cols-4">
          <div className="d-flex flex-column align-items-center px-sm-5 max-[1000px]:border-r max-[1000px]:border-[#dbc1a5] max-[1000px]:h-[90%] max-[1000px]:mb-[2rem]">
            <Image
              className="max-w-full rounded-[12px] p-3"
              src={Layer33}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong className="max-[1000px]:text-[14px] max-[1000px]:px-[5px]">Bihar University</strong>
          </div>
          <div className="d-flex flex-column align-items-center px-sm-5">
            <Image
              className="max-w-full rounded-[12px] p-3"
              src={Layer30}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong className="max-[1000px]:text-[14px] max-[1000px]:px-[5px]">Business Connect & Collaboration</strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 border-l border-r border-[#ccc] max-[1000px]:border-l-0 max-[1000px]:border-r-0 max-[1000px]:border-t max-[1000px]:border-[#dbc1a5] max-[1000px]:w-full">
            <Image
              className="max-w-full rounded-[12px] p-3"
              src={Layer31}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong className="max-[1000px]:text-[14px] max-[1000px]:px-[5px]">
              Global Bihar Heritage Initiative
            </strong>
          </div>

          <div className="d-flex flex-column align-items-center px-sm-5 border-l border-r border-[#ccc] max-[1000px]:border-l max-[1000px]:border-r-0 max-[1000px]:border-t max-[1000px]:border-[#dbc1a5] max-[1000px]:h-full">
            <Image
              className="max-w-full rounded-[12px] p-3"
              src={Layer34}
              alt="section-2 img"
              width={80}
              height={80}
            />
            <strong className="max-[1000px]:text-[14px] max-[1000px]:px-[5px]">BITO Multi Specialty <br/> Hospital</strong>
          </div>
        </div>
        <Link to="/about">
          <button className="rounded-[50px] border-none bg-[#422a1d] text-white text-[15px] font-semibold px-4 py-2 btn btn-primary">
            Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </Link>
      </Container>

      {/* Global Presence Slider */}

      <div className="">
        <GlobalPresenceSlider />
      </div>


      {/* Membership in BITO  */}

      <Container className="pt-sm-5">
        <Row style={{ background: "#422a1d" }}>
          <Col className="p-[3rem] min-[576px]:max-[1000px]:p-4 min-[1001px]:p-1" lg={4}>
            <div className="px-sm-3">
              <h4 className="text-[40px] text-[#ce9c69] font-bold max-[1000px]:text-[3rem] max-[1000px]:text-center">Memebership</h4>
              <p className="text-white max-[1000px]:text-center">
                Membership in BITO will be open to individuals, entrepreneurs,
                industrialists, professionals, and organizations having a
                connection to Bihar and sharing the vision and values of the
                organization.
              </p>
              <div className="max-[1000px]:text-center">
                <Link to={'/membership'}>
                  <Button className="rounded-[50px] bg-transparent text-white text-[15px] font-semibold border border-white px-4 py-2 mt-4">
                    Become A Member <i class="fa fa-arrow-right" aria-hidden="true"></i>
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={8} className="max-[1000px]:p-0">
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
