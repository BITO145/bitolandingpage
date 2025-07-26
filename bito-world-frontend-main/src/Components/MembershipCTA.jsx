import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import RightArrow from "../assets/white-right-arrow.png";
import Modal1 from "./modals/modal1";
import Individual from "./modals/Individual";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";


const serviceId = "service_wrk5j76";
const templateId = "template_ajfrv6q";
const publicKey = "3CoQnyOSI3gq1XqZ6";

const MembershipCTA = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [individualModal, setIndividualModal] = useState(false)


    // const [formData2, setFormData2] = useState({
    //     cityPincode: "",
    //     gender: "",
    //     qualification: "",
    //     compnayName: "",
    //     industry: "",
    //     country: "",
    //     stateCorporate: '',
    //     corporateCity: ''
    // });

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


    //   handle changes for second final form
    // const handleChange2 = (e) => {
    //     console.log(e);
    //     setFormData2({ ...formData2, [e.target.name]: e.target.value });
    // };

    
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
            <div
                style={{
                    backgroundColor: "#422a1d",
                    marginTop: '0px'
                }}
            >
                <Container>
                    <Row style={{ padding: "50px 0" }}>
                        <Col lg={6}>
                            <div className="membership-cta">
                                <span className="text-white" style={{ fontWeight: "700" }}>
                                  JOIN US 
                                 </span>
                                <p className="text-white">
                                    As individuals, entrepreneurs, industrialists,
                                    professionals, and organizations with ties to Bihar.
                                </p>
                            </div>
                        </Col>

                        <Col className="membership-right-cta-div" lg={6}>
                            <div>
                                <Button
                                    className="enroll-now-btn"
                                    onClick={() => setModalShow(true)}
                                >
                                    Enroll Now
                                    <Image
                                        style={{ marginTop: "0px" }}
                                        src={RightArrow}
                                        alt="right-arrow"
                                    />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>


                <Modal1
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    setIndividualModal={setIndividualModal}
                    setModalShow={setModalShow}


                    formData={formData}
                    handleChange={handleChange}
                />
                <Individual
                    show={individualModal}
                    onHide={() => setIndividualModal(false)}
                    formData={formData}
                    handleChange={handleChange}
                    finalSubmit={handleFinalSubmit}

                />


            </Container>
        </>
    );
};

export default MembershipCTA;
