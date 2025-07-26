/* eslint-disable no-unused-vars */
import React, { useState } from "react";


import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import RightArrow from '../assets/right-arrow.png'
import Kamal from '../assets/kamal.png'
import Kamal2 from '../assets/member/kamlas546.jpg'
import MembershipCTA from '../Components/MembershipCTA'
import Roadmap from '../Components/Roadmap'
import Discount from '../assets/icon/Layer-49.png'
import Development from '../assets/icon/Layer-51.png'
import Professional from '../assets/icon/Layer-50.png'
import Trades from '../assets/icon/Layer-52.png'
import { Link } from 'react-router-dom'
import BitoCard from './BitoCard';
import Modal1 from '../Components/modals/modal1'
import Individual from "../Components/modals/Individual";
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
 <div className="h-100 member-img">
<div className='banner-content-membership container'>
   <div className='btn-center'>
      <h4 className='mem-text text-white' style={{ fontSize: "30px" }}>
      Welcome to
      </h4>
      <h4 className="mem-text sub-heading text-white">
      Bihar International Trade Organization
      </h4>
      <h2 className="main-banner-heading-membership pt-3 m-0 text-white">
        <span>BITO</span> Membership</h2>
            <button onClick={() => setModalShow(true)} className="px-4 py-2 btn btn-light mt-sm-5 border-button">
              Enroll Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
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
<div style={{ padding: '70px 0' }} className='p-sm-3'>
<Container>
   <h1 className='text-center membership-heading d-none d-sm-block'>Become A Member</h1>
   <h1 className='text-center membership-heading d-block d-sm-none'>Become <br/>A Member</h1>
   <div style={{ gap: '10px', marginTop: '0px' }} className='becomeMember-2-heading'>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button className=' py-2 member-btn'> Individual <small style={{fontSize:'16px'}}> (BITO)</small></Button>
   </a>
   <a style={{ textDecoration: 'none' }} href="#enrollNow">
   <Button style={{ display: 'flex', flexDirection: 'column', alignItems:'center' }} className=' py-2 member-btn'>Corporate <small style={{ fontSize: '16px' }}> (BITO Industry Association) </small>
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
      <h2 style={{ color: '#b27f4a' }} className='section-2-head'>Key Benefits</h2>
      <div className='infographic-container'>
         <div className='infographic-div'>
            <Image src={Discount} alt='discount' />
            <p>Access to Exclusive Trade Resources and Markets</p>
         </div>
         <div className='infographic-div'>
            <Image src={Professional} alt='discount' />
            <p> Professional Connections: Network with industry leaders and global partners.</p>
         </div>
         <div className='infographic-div'>
            <Image src={Development} alt='discount' />
            <p>Professional Development: Enhance skills through workshops, seminars, and
               training.
            </p>
         </div>
         <div className='infographic-div'>
            <Image src={Trades} alt='discount' />
            <p>Exclusive Discounts: Avail discounts on trade services and events.</p>
         </div>
      </div>
      </Col>
      <Col className='left-side-div' lg={4}>
      <h2 style={{ color: '#b27f4a' }} className='section-2-head'>Transform Bihar <br /> Together, We Can</h2>
      <div className='section-para'>
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