import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className='thank-you'>
            <Container className="thank-you-container text-center d-flex flex-column align-items-center justify-content-center">
            <FaCheckCircle className="check-icon" />
            <h1>Thank You </h1>
            <p>Your submission has been received successfully.</p>
            <p>We appreciate your effort and will get back to you soon.</p>
            <Button variant="primary" className="home-button" onClick={handleBackToHome}>
                Back to Home
            </Button>

          <div className="social-connect">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL"><i className="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/company/bihar-international-trade-organisation/"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

        </Container>
        </div>
    );
};

export default ThankYou;
