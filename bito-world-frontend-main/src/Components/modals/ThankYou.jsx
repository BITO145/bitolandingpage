import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div
            className='mt-[-10rem] text-white bg-no-repeat bg-cover bg-[image:linear-gradient(0deg,rgb(0_0_0/30%),rgb(0_0_0/40%)),url(/src/assets/thankyou.jpg)]'
        >
            <Container className="h-[100vh] text-center d-flex flex-column align-items-center justify-content-center">
            <FaCheckCircle className="text-[4rem] text-[#00d084] mb-[20px]" />
            <h1>Thank You </h1>
            <p>Your submission has been received successfully.</p>
            <p>We appreciate your effort and will get back to you soon.</p>
            <Button variant="primary" className="mt-[30px] py-[10px] px-[30px] text-[1.1rem] bg-[#422a1d] border-[#422a1d]" onClick={handleBackToHome}>
                Back to Home
            </Button>

          <div className="bg-white p-[20px] rounded-[8px] text-[#422a1d] w-[300px] mt-[30px]">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a className="text-[30px] text-[#422a1d] mx-[10px]" href="https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL"><i className="fab fa-facebook"></i></a>
              <a className="text-[30px] text-[#422a1d] mx-[10px]" href="https://www.linkedin.com/company/bihar-international-trade-organisation/"><i className="fab fa-linkedin"></i></a>
              <a className="text-[30px] text-[#422a1d] mx-[10px]" href="#"><i className="fab fa-pinterest"></i></a>
              <a className="text-[30px] text-[#422a1d] mx-[10px]" href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

        </Container>
        </div>
    );
};

export default ThankYou;
