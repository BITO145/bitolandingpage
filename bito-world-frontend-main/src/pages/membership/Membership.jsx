/* eslint-disable no-unused-vars */
import React, { useState } from "react";


import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import RightArrow from '../../assets/icons/right-arrow.png'
import Kamal from '../../assets/team/kamal.png'
import Kamal2 from '../../assets/member/kamlas546.jpg'
import MembershipCTA from '../../components/membership/MembershipCTA.jsx'
import Roadmap from '../../components/membership/Roadmap.jsx'
import Discount from '../../assets/icon/Layer-49.png'
import Development from '../../assets/icon/Layer-51.png'
import Professional from '../../assets/icon/Layer-50.png'
import Trades from '../../assets/icon/Layer-52.png'
import { Link } from 'react-router-dom'
import BitoCard from '../bito/BitoCard';
import Modal1 from '../../components/modals/modal1.jsx'
import Individual from "../../components/modals/Individual.jsx";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";



const serviceId = "service_wrk5j76";
const templateId = "template_ajfrv6q";
const publicKey = "3CoQnyOSI3gq1XqZ6";




const Membership = () => {

   const [modalShow, setModalShow] = React.useState(false);
   const [individualModal, setIndividualModal] = useState(false)


   const [formData, setFormData] = useState({
      name: "",
      country: "",
      state: "",
      email: "",
      phone: "",
      occupation: "",
      cityPincode: "",
      gender: "",
      qualification: "",
      compnayName: "",
      industry: "",
      countryCorporate: "",
      stateCorporate: '',
      corporateCity: ''
  });

  // Shared handler to manage form inputs from both modals
  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

    // Final submission of the complete data through EmailJS
    const handleFinalSubmit = async () => {
      try {
          const result = await emailjs.send(serviceId, templateId, formData, publicKey);
          toast.success("Thank you for submitting your details, you will be contacted by our team soon.");
          console.log("EmailJS Result:", result);
      } catch (error) {
          console.error("Email sending failed:", error);
          toast.error("Error sending email.");
      }
  };






    return (
        <>
 {/* Home Banner */}
 <div className="bg-[url('../assets/banners/membership-banner.png')] bg-cover bg-no-repeat bg-center py-[250px] -mt-[170px] max-[1000px]:bg-[url('../assets/member/bannerdesk.jpg')] max-[1000px]:bg-center max-[1000px]:pt-[100px] max-[1000px]:px-[30px] max-[1000px]:pb-[30px] max-[1000px]:-mt-[90px]">
<div className='banner-content-membership container'>
   <div className='text-center'>
      <h4 className='text-center text-[36px] m-0 leading-[36px] text-white' style={{ fontSize: '30px' }}>
      Welcome to
      </h4>
      <h4 className="text-center text-[30px] m-0 leading-[36px] text-white max-[1000px]:text-[18px]">
      Bihar International Trade Organization
      </h4>
      <h2 className="text-[100px] font-[500] leading-[95px] pt-3 m-0 text-white">
        <span>BITO</span> Membership</h2>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4 mt-sm-5" style={{alignItems: 'stretch'}}>
              <button onClick={() => setModalShow(true)} className="px-4 py-2 btn btn-light border-button" style={{whiteSpace: 'nowrap'}}>
                Enroll Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSrbn2ZJLUKlOGGs8KpGDIInwtj5MPcjfw1cBlFC4IKWNhZQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-4 py-2 btn btn-light border-button d-flex align-items-center justify-content-center" style={{textDecoration: 'none', whiteSpace: 'nowrap'}}>
                Register for BITO Leadership 24 <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            </div>
            <Modal1 show={modalShow}
                    onHide={() => setModalShow(false)}
                    setIndividualModal={setIndividualModal}
                    setModalShow={setModalShow}
                    formData={formData}
                    handleChange={handleChange}/>
                    <Individual
                    show={individualModal}
                    onHide={() => setIndividualModal(false)}
                    formData={formData}
                    handleChange={handleChange}
                    finalSubmit={handleFinalSubmit}

                />
   </div>
</div>
</div>
{/* Second Section */}
<div style={{ padding: '70px 0' }} className='py-0 px-[20px]'>
<Container>
   <h1 className='text-center text-[4rem] font-[500] text-[#b27f4a] leading-[4rem] d-none d-sm-block max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem] max-[1000px]:mb-[2rem]'>Become A Member</h1>
   <h1 className='text-center text-[4rem] font-[500] text-[#b27f4a] leading-[4rem] d-block d-sm-none max-[1000px]:text-[3rem] max-[1000px]:leading-[3rem] max-[1000px]:mb-[2rem]'>Become <br/>A Member</h1>
   <div style={{ gap: '10px', marginTop: '0px' }} className='flex items-center justify-center'>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button className='py-2 rounded-[100px] bg-transparent text-[#9c7041] px-[60px] border-2 border-[#9c7041] text-[2rem] font-bold grid hover:bg-[#9c7041] hover:border-[#9c7041] max-[1000px]:px-[20px] max-[1000px]:py-[8px] max-[1000px]:text-[20px]'> Individual <small style={{fontSize:'16px'}}> (BITO)</small></Button>
   </a>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} className='py-2 rounded-[100px] bg-transparent text-[#9c7041] px-[60px] border-2 border-[#9c7041] text-[2rem] font-bold grid hover:bg-[#9c7041] hover:border-[#9c7041] max-[1000px]:px-[20px] max-[1000px]:py-[8px] max-[1000px]:text-[20px]'>Corporate <small style={{ fontSize: '16px' }}> (BITO Industry Association) </small>
   </Button>
   </a>
   </div>
</Container>
</div>
<hr />
{/* Third Section */}
<Container className='mt-sm-5'>
   <Row>
      <Col lg={4}>
      <h2 style={{ color: '#b27f4a' }} className='text-[#b27f4a] font-[500] text-[4rem] max-[1000px]:text-center max-[1000px]:text-[3rem] max-[1000px]:mt-[20px] max-[1000px]:leading-[3rem]'>Key Benefits</h2>
      <div className='mt-[35px]'>
         <div className='flex items-center gap-[10px]'>
            <Image src={Discount} alt='discount' />
            <p>Access to Exclusive Trade Resources and Markets</p>
         </div>
         <div className='flex items-center gap-[10px]'>
            <Image src={Professional} alt='discount' />
            <p> Professional Connections: Network with industry leaders and global partners.</p>
         </div>
         <div className='flex items-center gap-[10px]'>
            <Image src={Development} alt='discount' />
            <p>Professional Development: Enhance skills through workshops, seminars, and
               training.
            </p>
         </div>
         <div className='flex items-center gap-[10px]'>
            <Image src={Trades} alt='discount' />
            <p>Exclusive Discounts: Avail discounts on trade services and events.</p>
         </div>
      </div>
      </Col>
      <Col className='max-w-[40%] max-[1000px]:max-w-full max-[1000px]:mt-[20px] max-[1000px]:text-left' lg={4}>
      <h2 style={{ color: '#b27f4a' }} className='text-[#b27f4a] font-[500] text-[4rem] max-[1000px]:text-center max-[1000px]:text-[3rem] max-[1000px]:mt-[20px] max-[1000px]:leading-[3rem]'>Transform Bihar <br /> Together, We Can</h2>
      <div className='mt-[35px]'>
         <p>BITO invites investors, organizations, NRIs, and HNIs to be part of this transformative journey.</p>
         <p>
            With a dedicated team, advanced infrastructure, and extensive resources, we offer a seamless experience through our Single-Window Clearance system.
         </p>
         <p style={{fontSize:'22px'}}>
            <small style={{ fontWeight: 'bold' }}>Explore diverse opportunities </small>
            to make
            a significant impact:
         </p>
      </div>
      </Col>
      <Col
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
      }}
      lg={4}>
      <Image style={{ width: '100%' }} src={Kamal} alt="img" className='d-none d-sm-block'/>
      <Image style={{ width: '100%' }} src={Kamal2} alt="img" className='d-sm-none molk'/>
      </Col>
   </Row>
</Container>
{/* Forth Seciton */}

<div className=''>
<BitoCard/>
</div>



{/* CTA here */}
<div id="enrollNow">
   <MembershipCTA />
</div>

        </>
    )
}

export default Membership
