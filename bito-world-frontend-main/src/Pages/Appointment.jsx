/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Appointment.css'
import { Button, Form, Modal, Row, Col, Card, Alert } from 'react-bootstrap'
import Section3 from "../assets/chirag-paswan.png";
import PravinKumar from "../assets/praveen.jpg";
import Amresh from "../assets/amresh.png";
import anil from '../assets/anil-pratham.png'
import Ashish from '../assets/ashish-mishra.png'
import Prabhat from '../assets/prabhat-ranjan.png'
import jeff from '../assets/Jheff.jpg'

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
            id: 1,
            name: "Shri Chirag Paswan",
            role: "Chairman",
            image: Section3,
            available: true
        },
        {
            id: 2,
            name: "Pravin Kumar",
            role: "President",
            image: PravinKumar,
            available: true
        },
        {
            id: 3,
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
            const apiUrl = 'https://bitolandingpage-iyhj.vercel.app/api';
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

            // Google Apps Script URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxM68oriZ-R_egzhbrBRH6BnBw7z1Xy0lQbibhPj3h1a1xDkanSxvFdb-74fiILMsfN2w/exec';
            
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
                            <div className="appointment-card">
                                <div className="text-center mb-5">
                                    <h3 className="appointment-title">Schedule Your Meeting</h3>
                                    <p className="appointment-subtitle">
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
                                            <Card className="form-section-card mb-4">
                                                <Card.Header className="section-header">
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
                                                                    className="form-control-custom"
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
                                                                    className="form-control-custom"
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
                                                                    className="form-control-custom"
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
                                                                    className="form-control-custom"
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
                                                                    className="form-control-custom"
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        {/* Meeting Details Section */}
                                        <Col lg={6}>
                                            <Card className="form-section-card mb-4">
                                                <Card.Header className="section-header">
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
                                                                    className="form-select-custom"
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
                                                                    className="form-control-custom"
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
                                                                    className="form-control-custom"
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
                                            <Card className="form-section-card mb-4">
                                                <Card.Header className="section-header">
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
                                                                    className="form-select-custom"
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
                                                                        className="form-control-custom"
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
                                                                    className="form-control-custom"
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
                                            className="appointment-btn"
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
                <Modal.Body className="success-modal-body">
                    <div className="text-center">
                        <i className="fas fa-envelope-open-text text-primary mb-3" style={{fontSize: '3rem'}}></i>
                        <h5 className="mb-3">Thank you for your appointment request!</h5>
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