/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../../assets/logos/footer-logo.png";
import { Link } from "react-router-dom";
import Facebook from "../../assets/social/facebook-logo.png";
import Instagram from "../../assets/social/insta.png";
import Linkedin from "../../assets/social/linkedin.png";
import Twitter from "../../assets/social/twitter.png";
import Youtube from "../../assets/social/youtube.png";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5e0cb" }}>
        <Container>
          <Row>
            <Col lg={2} className="pt-[30px] max-[1000px]:flex max-[1000px]:justify-center max-[1000px]:items-center">
              <Image
                className="w-[70%] max-[1000px]:w-[30%]"
                src={FooterLogo}
                alt="footer-logo"
              />
            </Col>

            <Col className="w-[80%] max-[1000px]:w-full" lg={10}>
              <p className="pt-[40px] max-[1000px]:p-[20px] max-[1000px]:text-center">
                Welcome to BITO, your partner in discovering the vibrant history
                and promising future of Bihar. Our organization is dedicated to
                preserving Bihar&apos;s cultural heritage while simultaneously
                creating new opportunities for education, employment, and
                economic growth.
              </p>

              <p className="pt-[40px] max-[1000px]:p-[20px] max-[1000px]:text-center">
                Bihar International Trade Organization (BITO) Preserving
                Heritage, Creating Opportunities Explore the rich tapestry of
                Bihar&apos;s history and culture, where the past meets the
                future. BITO is your gateway to a rejuvenated Bihar, dedicated
                to preserving its heritage while paving the way for progress.
              </p>
            </Col>
          </Row>
          {/* Second section in Footer */}

          <Row className="py-[30px] max-[1000px]:py-[10px] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:border-t max-[1000px]:border-[#dbc1a5] max-[1000px]:text-center">
            <Col className="" lg={4}>
              <div className="[&_span]:font-bold [&_span]:text-[#422a1e]">
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
              <div className="[&_li]:list-none">
                <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>

                {/* <li>About</li> */}
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/our-work"><li>Our Work</li></Link>
                {/* <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/bsic/"><li >BSIC</li></a> */}
                {/* <li>Chapter</li>
                <li>Bihar Voice</li> */}

              </div>
            </Col>

            <Col
              className="d-sm-block d-none" lg={2} sm={6}>
              <div className="[&_li]:list-none"> 
                {/* <li>EOI for BIA</li> */}

                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/events'}>Events</Link>

                {/* <li>Media</li> */}
                <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.bitojobs.com/"><li>Job</li></a>


                <Link style={{textDecoration:'none',color:'#442c20'}} to="/contact-us"><li>Contact</li></Link>

                <Link style={{ textDecoration: 'none', color: 'black' }} to="/membership">
                  Membership
                </Link>

              </div>
            </Col>
            {/* MOBILE DEVELOPMENT  */}
            <div className="d-sm-none d-block mobile-footer">
              <Row>

                <Col className="quick-Home w-50" sm={6}>
                  <div className="[&_li]:list-none">
                    <p style={{ fontSize: '15px', fontWeight: '600' }}>Quick Links</p>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
                    {/* <li>About</li> */}
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/our-work"><li>Our Work</li></Link>
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://bitoworld.in/BSIC"><li >BSIC</li></a>
                    {/* <li>Chapter</li>
                <li>Bihar Voice</li> */}

                  </div>
                </Col>

                <Col
                  className="w-50" sm={6}>
                  <div className="[&_li]:list-none">
                    {/* <li>EOI for BIA</li> */}

                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/events">Events</Link>

                    {/* <li>Media</li> */}
                    <a style={{ textDecoration: 'none', color: 'black' }} href="https://www.bitojobs.com/"><li>Job</li></a>


                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact-us"><li>Contact</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/membership">Membership</Link>

                  </div>
                </Col>
              </Row>
            </div>
            {/* MOBILE DEVELOPMENT END */}


            <Col className="max-[1000px]:border-t max-[1000px]:border-[#dbc1a5]" lg={4} sm={12}>
              <div className="pl-[60px] max-[1000px]:pl-0 max-[1000px]:mt-[20px]">
                <p>Newsletter</p>
                <div
                  style={{ gap: "6px" }}
                  className="news-email-contact d-flex align-items-center justify-content-center"
                >
                  <input
                    className="bg-white rounded-[50px] px-[20px] py-[3px] border-0"
                    type="text"
                    placeholder="Enter your Email"
                  />
                  <Button className="rounded-[50px] border-0 bg-[#b27f4a] text-white text-[15px] font-semibold">Subscribe</Button>
                </div>

                <div className="max-[1000px]:text-center">
                  <h4>Social Links</h4>

                  <div className="d-flex align-items-center max-[1000px]:justify-center">
                    <a href="https://www.facebook.com/BiharInternationalTradeOrganisation/" target="_blank" rel="noreferrer noopener">
                      <Image
                        src={Facebook}
                        className="w-[90%]"
                        alt="footer-social-logo"
                      />
                    </a>
                    <a href="https://www.instagram.com/bito_world_official/" target="_blank" rel="noreferrer noopener">
                      <Image
                        src={Instagram}
                        className="w-[90%]"
                        alt="footer-social-logo"
                      />
                    </a>
                    <a href="https://www.linkedin.com/company/bihar-international-trade-organisation/" target="_blank" rel="noreferrer noopener">
                      <Image
                        src={Linkedin}
                        className="w-[90%]"
                        alt="footer-social-logo"
                      />
                    </a>
                    <a href="https://x.com/BITOWorldoff" target="_blank" rel="noreferrer noopener">
                      <Image
                        src={Twitter}
                        className="w-[90%]"
                        alt="footer-social-logo"
                      />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
                      <Image
                        src={Youtube}
                        className="w-[90%]"
                        alt="footer-social-logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* Third Row */}

        </Container>
        <Container className="py-3 mt-3 max-[1000px]:border-t max-[1000px]:border-[#dbc1a5]">
          <Col lg={12}>
            <p className="text-center m-0 mt-[35px] max-[1000px]:text-[10px]">
              Copyright © 2025 Bihar International Trade Organization (BITO)
            </p>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Footer;
