import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import ImageFirst from '../../assets/bito/image-first.png';
import ImageSecond from '../../assets/bito/image-second.png';
import Vision from "../../assets/Layer-21.png";
import Mission from "../../assets/Layer-22.png";
import './BitoPage.css';

const BitoDriving = () => {
    return (
        <>

            <Container className="industrial mt-4 py-4 member-container">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h2 style={{ color: '#b27f4a' }} className='pb-3 text-left membership-heading'>Driving Industrial and Sustainable Growth</h2>
                        <big className='ex2'>
                            The BITO Industries Association, a pivotal part of the Bihar International Trade Organization (BITO),
                            is committed to
                        </big>
                        <ol className='pt-3 propelling'>
                            <li>Propelling industrial development</li>
                            <li>Fostering innovation</li>
                            <li>Industrial advocacy</li>
                            <li>Facilitating collaboration</li>
                            <li>Driving sustainable growth aligned with 17 SDGs - UN in Bihar and beyond</li>
                        </ol>
                        <p>We provide a platform for industries to connect, innovate, and contribute to a responsible and prosperous industrial ecosystem.</p>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <Image src={ImageFirst} className='img-fluid' />
                    </Col>
                </Row>
            </Container>


            <Container className="association py-4 member-container">
                <Row>
                    <Col sm={12} md={6} lg={6} className='image-r order-last  order-sm-first'>
                        <div className='image-p'>
                            <Image src={ImageSecond} className='img-fluid' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <h2 style={{ color: '#b27f4a' }} className='text-left membership-heading'> About Us</h2>
                        <p className='pe-sm-5'>
                            The BITO Industries Association is committed to creating industrial
                            ecosystem that encourages growth, innovation, Market Linkages and
                            sustainability. As an integral part of BITO, our primary aim is to facilitate
                            collaboration among industries, government bodies, and other
                            stakeholders to drive industrial progress and enhance the economic
                            landscape of Bihar & beyond.
                        </p>
                        <p className='pe-sm-5'>
                            The BITO Industries Association (BIA) is dedicated to fostering a thriving
                            industrial environment through:
                        </p>
                        <ul>
                            <li className='pb-2'><strong>Business Connect:</strong> Facilitating connections among businesses, government bodies, and stakeholders.</li>
                            <li className='pb-2'><strong>Market and Product Access:</strong> Enhancing opportunities for market expansion and product accessibility.</li>
                            <li className='pb-2'><strong>Industrial Advocacy:</strong> Representing industry interests and advocating for supportive policies.</li>
                            <li className='pb-2'><strong>Sustainable Growth:</strong> Promoting eco-friendly practices and ensuring responsible industrial development.</li>
                        </ul>
                    </Col>


                </Row>
            </Container>


            <div style={{ backgroundColor: "#422a1e" }}>
                <Container className='member-container'>
                    <Row className="mission-vision-row py-5">
                        <Col className="mission-vision-row-col-1" lg={6}>
                            <div className="vision">
                                <div
                                    style={{ gap: "20px" }}
                                    className="d-flex align-items-center"
                                >
                                    <img src={Vision} alt="Vision" style={{ filter: "brightness(4.5)" }} />
                                    <span className='text-bito'>Vision</span>
                                </div>
                                <p className="text-white">
                                    To be the catalyst for industrial excellence and sustainable development,
                                    fostering innovation and collaboration among industries, goverment, and
                                    stakeholders for a resilient, eco-friendly ecosystem.
                                </p>
                            </div>
                        </Col>

                        <Col className="mx-auto mission-vision-row-col-2" lg={6}>
                            <div className="mission">
                                <div
                                    style={{ gap: "20px" }}
                                    className="d-flex align-items-center"
                                >
                                    <img src={Mission} alt="Mission" style={{ filter: "brightness(4.5)" }} />
                                    <span className='text-bito'>Mission</span>
                                </div>
                                <p className="text-white">
                                    Our mission is to bridge gaps among industries, government, and stakeholders and
                                    advocate for policy changes. We aim to create opportunities for market expansion
                                    and promote sustainable practices that benefit both the community and the
                                    environment.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default BitoDriving