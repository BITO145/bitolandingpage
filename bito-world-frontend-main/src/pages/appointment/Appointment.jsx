/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button, Form, Modal, Row, Col, Card, Alert } from 'react-bootstrap'
import Section3 from "../../assets/team/chirag-paswan.png";
import PravinKumar from "../../assets/team/praveen.jpg";
import Amresh from "../../assets/team/amresh.png";
import anil from '../../assets/team/anil-pratham.png'
import Ashish from '../../assets/team/ashish-mishra.png'
import Prabhat from '../../assets/team/prabhat-ranjan.png'
import jeff from '../../assets/team/Jheff.jpg'

const Appointment = () => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        selectedLeader: '',
        date: '',
        time: '',
        purpose: '',
        customPurpose: '',
        message: ''
    });

    // Available leaders for appointment booking
    const leaders = [
        
        {
            id: 2,
            name: "Amaresh Mishra",
            role: "Secretary-General",
            image: Amresh,
            available: true
        },
        {
            id: 4,
            name: "Shri Anil Kumar Pratham",
            role: "IPS (Ex-DGP) Gujarat, Global Advisor",
            image: anil,
            available: true
        },
        {
            id: 5,
            name: "Ashish Mishra",
            role: "BITO Advisor",
            image: Ashish,
            available: true
        },
        {
            id: 6,
            name: "Prabhat Ranjan",
            role: "BITO Advisor",
            image: Prabhat,
            available: true
        },
        {
            id: 7,
            name: "Clr. Jeff Whitton FAICD",
            role: "Honorary Global Advisor",
            image: jeff,
            available: true
        }
    ];

    // Predefined purposes
    const predefinedPurposes = [
        "Business Partnership Discussion",
        "Investment Opportunities",
        "Startup Guidance",
        "Cultural Exchange Programs",
        "International Trade Consultation",
        "Policy Discussion",
        "Networking Opportunity",
        "Project Collaboration",
        "Mentorship Session",
        "Strategic Planning"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // --- CUSTOM VALIDATION CHECK ---
        const { name, email, phone, selectedLeader, date, time, purpose, customPurpose } = formData;
        
        // Check if required fields are empty
        if (!name || !email || !phone || !selectedLeader || !date || !time || !purpose) {
            setError('Please fill in all required fields.');
            setIsSubmitting(false);
            return; // Stop the submission
        }

        // Check for the custom purpose field if 'Other' is selected
        if (purpose === 'other' && !customPurpose) {
            setError('Please specify the purpose of your meeting.');
            setIsSubmitting(false);
            return; // Stop the submission
        }
        // --- END OF CUSTOM VALIDATION CHECK ---

        try {
            // Prepare data for Google Apps Script
            const appointmentData = {
                ...formData,
                selectedLeaderName: leaders.find(l => l.id.toString() === formData.selectedLeader)?.name || '',
                selectedLeaderRole: leaders.find(l => l.id.toString() === formData.selectedLeader)?.role || '',
                submissionDate: new Date().toISOString(),
                status: 'Pending',
                timestamp: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata'
                })
            };

            // Save to database first
            const apiUrl = import.meta.env.VITE_API_BASE_URL;
            const dbResponse = await fetch(`${apiUrl}/appointment/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    selectedLeader: formData.selectedLeader,
                    leaderName: leaders.find(l => l.id.toString() === formData.selectedLeader)?.name || '',
                    leaderRole: leaders.find(l => l.id.toString() === formData.selectedLeader)?.role || '',
                    date: formData.date,
                    time: formData.time,
                    purpose: formData.purpose,
                    customPurpose: formData.customPurpose,
                    message: formData.message
                })
            });

            if (!dbResponse.ok) {
                console.error('Failed to save to database');
            }

            // Google Apps Script URL (from .env)
            const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData)
            });

            console.log('Appointment data sent to Google Apps Script');
            setShowSuccessModal(true);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                designation: '',
                selectedLeader: '',
                date: '',
                time: '',
                purpose: '',
                customPurpose: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending data:', error);
            setError('There was an error submitting your appointment request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <>
            <div>
                {/* Banner Section */}
                <section className="about-img d-flex align-items-end">
                    <div className="container">
                        <div className="text-white">
                            <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
                                Welcome to
                            </p>
                            <strong className="fs-4 font-bnpr">
                                Bihar International Trade Organization
                            </strong>
                            <h2
                                className="bannerHeading"
                                style={{ fontSize: "100px", fontWeight: 700 }}
                            >
                                Book Appointment
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Appointment Form Section */}
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="bg-white rounded-[20px] p-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#e8e8e8] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[5px] before:bg-[linear-gradient(135deg,#b17d49_0%,#8b5a2b_100%)] max-[576px]:p-[25px_15px] max-[576px]:m-[15px]">
                                <div className="text-center mb-5">
                                    <h3 className="text-[#422a1d] font-extrabold text-[2.8rem] mb-[15px] bg-[linear-gradient(135deg,#422a1d_0%,#b17d49_100%)] bg-clip-text text-transparent max-[576px]:text-[1.8rem]">Schedule Your Meeting</h3>
                                    <p className="text-[#666] text-[1.2rem] leading-[1.6] max-w-[600px] mx-auto max-[768px]:text-[1.1rem]">
                                        Book an appointment with our esteemed leaders to discuss business opportunities, 
                                        partnerships, or any other matters of interest.
                                    </p>
                                </div>

                                {/* Alert for validation errors */}
                                {error && (
                                    <Alert variant="danger" className="mb-4">
                                        <i className="fas fa-exclamation-triangle me-2"></i>
                                        {error}
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        {/* Personal Information Section */}
                                        <Col lg={6}>
                                            <Card className="border-none rounded-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[ease] overflow-hidden mb-4 hover:-translate-y-[2px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
                                                <Card.Header className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] border-b-2 border-[#b17d49] py-[20px] px-[25px] rounded-t-[15px] max-[768px]:py-[15px] max-[768px]:px-[20px]">
                                                    <h5 className="mb-0">
                                                        <i className="fas fa-user me-2"></i>
                                                        Personal Information
                                                    </h5>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col md={12} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Full Name *</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="name"
                                                                    value={formData.name}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    placeholder="Enter your full name"
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Email Address *</Form.Label>
                                                                <Form.Control
                                                                    type="email"
                                                                    name="email"
                                                                    value={formData.email}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    placeholder="Enter your email"
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Phone Number *</Form.Label>
                                                                <Form.Control
                                                                    type="tel"
                                                                    name="phone"
                                                                    value={formData.phone}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    placeholder="Enter your phone number"
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Company/Organization</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="company"
                                                                    value={formData.company}
                                                                    onChange={handleInputChange}
                                                                    placeholder="Enter your company name"
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Designation</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="designation"
                                                                    value={formData.designation}
                                                                    onChange={handleInputChange}
                                                                    placeholder="Enter your designation"
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        {/* Meeting Details Section */}
                                        <Col lg={6}>
                                            <Card className="border-none rounded-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[ease] overflow-hidden mb-4 hover:-translate-y-[2px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
                                                <Card.Header className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] border-b-2 border-[#b17d49] py-[20px] px-[25px] rounded-t-[15px] max-[768px]:py-[15px] max-[768px]:px-[20px]">
                                                    <h5 className="mb-0">
                                                        <i className="fas fa-calendar-alt me-2"></i>
                                                        Meeting Details
                                                    </h5>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col md={12} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Select Leader to Meet *</Form.Label>
                                                                <Form.Select
                                                                    name="selectedLeader"
                                                                    value={formData.selectedLeader}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                >
                                                                    <option value="">Choose a leader...</option>
                                                                    {leaders.map(leader => (
                                                                        <option key={leader.id} value={leader.id}>
                                                                            {leader.name} - {leader.role}
                                                                        </option>
                                                                    ))}
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Preferred Date *</Form.Label>
                                                                <Form.Control
                                                                    type="date"
                                                                    name="date"
                                                                    value={formData.date}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    min={new Date().toISOString().split('T')[0]}
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={6} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Preferred Time *</Form.Label>
                                                                <Form.Control
                                                                    type="time"
                                                                    name="time"
                                                                    value={formData.time}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>

                                    {/* Purpose and Message Section */}
                                    <Row>
                                        <Col lg={12}>
                                            <Card className="border-none rounded-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 ease-[ease] overflow-hidden mb-4 hover:-translate-y-[2px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)]">
                                                <Card.Header className="bg-[linear-gradient(135deg,#f8f9fa_0%,#e9ecef_100%)] border-b-2 border-[#b17d49] py-[20px] px-[25px] rounded-t-[15px] max-[768px]:py-[15px] max-[768px]:px-[20px]">
                                                    <h5 className="mb-0">
                                                        <i className="fas fa-comments me-2"></i>
                                                        Meeting Purpose & Additional Information
                                                    </h5>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col md={12} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Purpose of Meeting *</Form.Label>
                                                                <Form.Select
                                                                    name="purpose"
                                                                    value={formData.purpose}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                >
                                                                    <option value="">Select purpose...</option>
                                                                    {predefinedPurposes.map((purpose, index) => (
                                                                        <option key={index} value={purpose}>
                                                                            {purpose}
                                                                        </option>
                                                                    ))}
                                                                    <option value="other">Other (Please specify)</option>
                                                                </Form.Select>
                                                            </Form.Group>
                                                        </Col>

                                                        {/* Custom Purpose */}
                                                        {formData.purpose === 'other' && (
                                                            <Col md={12} className="mb-3">
                                                                <Form.Group>
                                                                    <Form.Label>Please specify your purpose *</Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        name="customPurpose"
                                                                        value={formData.customPurpose}
                                                                        onChange={handleInputChange}
                                                                        required
                                                                        placeholder="Please describe your purpose"
                                                                        className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                        )}

                                                        {/* Additional Message */}
                                                        <Col md={12} className="mb-3">
                                                            <Form.Group>
                                                                <Form.Label>Additional Message</Form.Label>
                                                                <Form.Control
                                                                    as="textarea"
                                                                    rows={4}
                                                                    name="message"
                                                                    value={formData.message}
                                                                    onChange={handleInputChange}
                                                                    placeholder="Any additional information you'd like to share..."
                                                                    className="border-2 border-[#e0e0e0] rounded-[10px] py-[15px] px-[18px] text-[1rem] transition-all duration-300 ease-[ease] bg-[#fafafa] focus:border-[#b17d49] focus:shadow-[0_0_0_0.25rem_rgba(177,125,73,0.15)] focus:outline-none focus:bg-white focus:-translate-y-[px] max-[576px]:py-[12px] max-[576px]:px-[15px] max-[576px]:text-[0.95rem]"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>

                                    {/* Submit Button */}
                                    <div className="text-center">
                                        <Button 
                                            type="submit" 
                                            className="relative overflow-hidden bg-[linear-gradient(135deg,#b17d49_0%,#8b5a2b_100%)] border-none rounded-[50px] py-[18px] px-[50px] text-[1.2rem] font-bold text-white transition-all duration-300 ease-[ease] shadow-[0_8px_25px_rgba(177,125,73,0.3)] uppercase tracking-[1px] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] before:transition-[left_0.5s] hover:bg-[linear-gradient(135deg,#8b5a2b_0%,#b17d49_100%)] hover:-translate-y-[3px] hover:shadow-[0_12px_35px_rgba(177,125,73,0.4)] hover:text-white hover:before:left-[100%] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 max-[768px]:py-[15px] px-[40px] max-[768px]:text-[1.1rem] max-[768px]:w-full"
                                            size="lg"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin me-2"></i>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-calendar-check me-2"></i>
                                                    Book Appointment
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal} centered>
                <Modal.Header closeButton className="success-modal-header">
                    <Modal.Title>
                        <i className="fas fa-check-circle text-success me-2"></i>
                        Appointment Request Submitted!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center py-[30px] px-[20px] text-[1rem]">
                    <div className="text-center">
                        <i className="fas fa-envelope-open-text text-primary mb-3" style={{fontSize: '3rem'}}></i>
                        <h5 className="text-[#422a1d] font-bold m-0 text-[1.3rem] mb-3 max-[768px]:text-[1.2rem]">Thank you for your appointment request!</h5>
                        <p>We have received your booking and will contact you shortly to confirm the details.</p>
                        <p>You will receive a confirmation email with further instructions.</p>
                        <div className="mt-4 p-3 bg-light rounded">
                            <small className="text-muted">
                                <i className="fas fa-info-circle me-1"></i>
                                Your appointment request has been recorded and will be reviewed by our team.
                            </small>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccessModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Appointment