import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MembershipSection = () => {
    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/organization`)
            .then(response => {
                setOrganization(response.data);
            })
            .catch(error => {
                console.error("Error fetching organization data:", error);
            });
    }, []);

    if (!organization) return null;

    // Prepare dynamic partners array
    const partners = [
        organization.mahaveer,
        organization.jharkhand,
        organization.parivar,
        organization.sydney
    ];

    return (
        <>
            <Container className="pt-sm-5">
                <Row style={{ background: "#422a1d" }}>
                    <Col className="p-5 p-sm-1" lg={4}>
                        <div className="membership px-sm-3 text-white">
                            <h4>{organization.title}</h4>
                            <div dangerouslySetInnerHTML={{ __html: organization.description }} />
                            <div>
                                <Link to={`/${organization.slug}`}>
                                    <Button className="membership-btn px-4 py-2 mt-4">
                                        Become A Member <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} className="p-mobile">
                        <Image
                            className="mw-100 pb-sm-4"
                            src={organization.eimage}
                            alt="membership-img"
                        />
                    </Col>
                </Row>
            </Container>

            {/* Partners Section */}
            <Container className="pt-5 pb-4">
                <Row>
                    <Col lg={12}>
                        <h4 className='text-center pb-4 our-partner-head'>{organization.partner}</h4>
                    </Col>
                </Row>
                <div className='mx-auto partner-div text-center'>
                    {partners.map((item, index) => (
                        <Button className='partner-btn m-2' key={index}>{item}</Button>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default MembershipSection;
