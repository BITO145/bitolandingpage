/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Img1 from '../assets/first-img.png'
import Img2 from '../assets/img-2.png'
import Img3 from '../assets/img-3.png'

const Roadmap = () => {
    return (
        <>
            <div style={{position: 'relative' }}>
                <Container className='years-mb pb-5'>
                    <h1 style={{ color: '#b27f4a', fontWeight: '500' }} className='heading'>5 Years Road Map</h1>

                    {/* First section */}
                    <Row style={{marginTop:'40px'}}>
                        <Col lg={5}>
                            <div className='1-2yr-div'>
                                <span style={{ fontWeight: '700', fontSize: '22px' }} className="small-head">Years 1-2  |  <span style={{ fontWeight: 'bold', color: '#9c7041' }}>Foundation & Growth</span></span>
                                <div style={{ marginTop: '30px' }} className='global'>
                                    <p><span style={{ fontWeight: 'bold' }}>Global Chapter Expansion</span> Establish 25 new international chapters.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Startups Incubated</span> Launch 108 new startups in agriculture and FMCG.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Launch BITO Mart</span> Expand nationwide to feature Bihari startup products.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Finalize Bihar University</span> Complete the blueprint and secure partnerships.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Hospital & Medical College</span> Begin construction to enhance healthcare infrastructure.</p>
                                </div>
                            </div>

                        </Col>

                        <Col className='middle-line' lg={2}>
                            <div className="vl"></div>
                        </Col>
                        {/* Image */}
                        <Col lg={5}>
                            <Image style={{ width: '100%' }} src={Img1} alt="hello" />
                        </Col>
                    </Row>





                    {/* second section */}
                    <Row style={{ marginTop: '25px' }}>
                        {/* Image */}
                        <Col lg={5} className='order-sm'>
                            <Image  src={Img2} className='img-2-3to4yr' alt="hello" />
                        </Col>

                        <Col className='middle-line' lg={2}>
                            <div className="vl"></div>
                        </Col>

                        <Col lg={5}>
                            <div className='3-4yr-div tom-mem'>
                                <span style={{ fontWeight: '700', fontSize: '22px' }}>Years 3-4  |  <span style={{ fontWeight: 'bold', color: '#9c7041' }}>Acceleration</span></span>
                                <div style={{ marginTop: '30px' }} className='global'>
                                    <p><span style={{ fontWeight: 'bold' }}>100,000 Jobs Created</span> Through industrial growth, startups, and export initiatives.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Export Expansion</span> Increase exports to 25 new countries.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Tourism Development</span> Develop Nalanda and Vaishali as top global spiritual destinations.</p>
                                </div>
                            </div>

                        </Col>

                    </Row>




                    {/* Third section */}
                    <Row style={{ marginTop: '25px' }}>
                        <Col lg={5}>
                            <div className='5yr-div'>
                                <span style={{ fontWeight: '700', fontSize: '22px' }} className="small-head">Year 5  |  <span style={{ fontWeight: 'bold', color: '#9c7041' }}>Consolidation & Expansion</span></span>
                                <div style={{ marginTop: '30px' }} className='global'>
                                    <p><span style={{ fontWeight: 'bold' }}>Top 5 Tourism Destination</span> Establish Bihar as a premier spiritual and cultural destination.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Global BITO Summit</span> Host to showcase achievements and attract international investments.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Establish Export Hub</span> Create a hub for managing international trade of Bihari products.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Complete Bihar University Construction</span> Finalize and fully operationalize the university.</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Hospital Construction</span> Complete the new hospital to enhance regional healthcare services.</p>
                                </div>
                            </div>

                        </Col>

                        <Col className='middle-line' lg={2}>
                            <div className="vl"></div>
                        </Col>

                        {/* Image */}
                        <Col lg={5}>
                            <Image style={{ width: '100%' }} src={Img3} alt="hello" />
                        </Col>
                    </Row>



                </Container>

            </div>


        </>
    )
}

export default Roadmap