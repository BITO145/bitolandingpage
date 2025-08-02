/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook-logo.png";
import Instagram from "../assets/insta.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";

const Footer = () => {


  return (
    <>
      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row>
            <Col lg={2} className="logo-div">
              <Image
                className="footer-logo"
                src={FooterLogo}
                alt="footer-logo"
              />
            </Col>

            <Col className="footer-info" lg={10}>
              <p>
                Welcome to BITO, your partner in discovering the vibrant history
                and promising future of Bihar. Our organization is dedicated to
                preserving Bihar&apos;s cultural heritage while simultaneously
                creating new opportunities for education, employment, and
                economic growth.
              </p>

              <p>
                Bihar International Trade Organization (BITO) Preserving
                Heritage, Creating Opportunities Explore the rich tapestry of
                Bihar&apos;s history and culture, where the past meets the
                future. BITO is your gateway to a rejuvenated Bihar, dedicated
                to preserving its heritage while paving the way for progress.
              </p>
            </Col>
          </Row>
          {/* Second section in Footer */}

          <Row className="address-email-div-footer">
            <Col className="" lg={4}>
              <div className="address-div">
                <span>Address:</span>
                <p className="address-para">
                  173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic
                  City Metro Station, Noida-201309 Phone: 0120-4914498
                </p>

                <p className="email">
                  {" "}
                  <span style={{ marginRight: '10px' }}>Email:</span>office@bitoworld.in
                </p>
              </div>
            </Col>

            <Col className="quick-Home d-sm-block d-none" lg={2} sm={6}>
              <div className="quick-links">
                <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                <a style={{ textDecoration: 'none', color: 'black' }} href="/">Home</a>

                {/* <li>About</li> */}
                <a style={{ textDecoration: 'none', color: 'black' }} href="/our-work"><li>Our Work</li></a>
                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/bsic/"><li >BSIC</li></a> */}
                {/* <li>Chapter</li>
                <li>Bihar Voice</li> */}

              </div>
            </Col>

            <Col
              className="d-sm-block d-none" lg={2} sm={6}>
              <div className="quick-links-2">
                {/* <li>EOI for BIA</li> */}

                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/events'}>Events</Link>

                {/* <li>Media</li> */}
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.bitojobs.com/"><li>Job</li></a>


                <a style={{textDecoration:'none',color:'#442c20'}} href="/contact-us"><li>Contact</li></a>

                <a style={{ textDecoration: 'none', color: 'black' }} href="/membership">
                  Membership
                </a>

              </div>
            </Col>
            {/* MOBILE DEVELOPMENT  */}
            <div className="d-sm-none d-block mobile-footer">
              <Row>

                <Col className="quick-Home w-50" sm={6}>
                  <div className="quick-links">
                    <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="/">Home</a>
                    {/* <li>About</li> */}
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/history.php"><li>Our Work</li></a>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/old-site/BSIC.php"><li >BSIC</li></a>
                    {/* <li>Chapter</li>
                <li>Bihar Voice</li> */}

                  </div>
                </Col>

                <Col
                  className="w-50" sm={6}>
                  <div className="quick-links-2">
                    {/* <li>EOI for BIA</li> */}

                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'https://bitoworld.in/old-site/bitoashmita.php'}>Events</Link>

                    {/* <li>Media</li> */}
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.bitojobs.com/"><li>Job</li></a>



                    <li>Contact</li>
                    <a style={{ textDecoration: 'none', color: 'black' }} href={'/membership'}>Membership</a>

                  </div>
                </Col>
              </Row>
            </div>
            {/* MOBILE DEVELOPMENT END */}


            <Col className="mopbile-news" lg={4} sm={12}>
              <div className="newsletter-div">
                <p>Newsletter</p>
                <div
                  style={{ gap: "6px" }}
                  className="news-email-contact d-flex align-items-center justify-content-center"
                >
                  <input
                    className="footer-input"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Button className="subs-btn">Subscribe</Button>
                </div>

                <div className="social-footer mt-3">
                  <h4>Social Links</h4>

                  <div className="social-icons d-flex align-items-center">
                    <Link to={'https://www.facebook.com/BiharInternationalTradeOrganisation/'}>
                      <Image
                        src={Facebook}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link to={'https://www.instagram.com/bito_world_official/'}>
                      <Image
                        src={Instagram}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link to={'https://www.linkedin.com/company/bihar-international-trade-organisation/'}>
                      <Image
                        src={Linkedin}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link to={'https://x.com/BITOWorldoff'}>
                      <Image
                        src={Twitter}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                    <Link>
                      <Image
                        src={Youtube}
                        className="social-links-img"
                        alt="footer-social-logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Third Row */}

        </Container>
        <Container className="py-3 mt-3 copyright">
          <Col lg={12}>
            <p className="footer-last-line text-center m-0">
              Copyright © 2025 Bihar International Trade Organization (BITO)
            </p>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Footer;
