import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import RightArrow from "../../assets/icons/white-right-arrow.png";
import Modal1 from "../../Components/modals/modal1.jsx";
import Individual from "../../Components/modals/Individual.jsx";
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
                                                        <div className="font-[500] text-[4rem] max-[1000px]:text-[3rem]">
                                <span className="text-white font-bold">
                                  JOIN US 
                                 </span>
                                <p className="text-white text-[22px] max-[1000px]:text-[18px] max-[1000px]:leading-[24px]">
                                    As individuals, entrepreneurs, industrialists,
                                    professionals, and organizations with ties to Bihar.
                                </p>
                            </div>
                        </Col>

                        <Col className="flex justify-center items-center" lg={6}>
                            <div>
                                <Button
                                                                        className="enroll-now-btn px-[70px] py-[20px] rounded-[50px] text-[30px] bg-transparent border-white flex justify-center items-center gap-[30px] w-full"
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
