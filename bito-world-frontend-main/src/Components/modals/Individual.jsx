/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { Country, State } from "country-state-city"; // Import the library

const Individual = ({ formData, handleChange, finalSubmit, ...props }) => {
    const [activeTab, setActiveTab] = useState("individual");
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    // Fetch countries on component mount
    useEffect(() => {
        const countryList = Country.getAllCountries();
        setCountries(countryList);
    }, []);

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        setStates(State.getStatesOfCountry(countryCode)); // Fetch states based on selected country
        handleChange(e); // Update formData with selected country
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            // Save to database
            const apiUrl = import.meta.env.VITE_API_BASE_URL || 'https://bitolandingpage-iyhj.vercel.app/api';
            const dbResponse = await fetch(`${apiUrl}/membership/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    organization: formData.compnayName || 'Individual',
                    membershipType: activeTab === 'individual' ? 'individual' : 'corporate',
                    message: `Country: ${formData.country}, State: ${formData.state}, City: ${formData.cityPincode}, Gender: ${formData.gender}, Qualification: ${formData.qualification}, Industry: ${formData.industry}`
                })
            });

            if (dbResponse.ok) {
                console.log("Membership application saved successfully!");
                window.location.href = "/thank-you";
            } else {
                console.error('Failed to save to database');
                toast.error("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error saving to database:", error);
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const renderForm = () => {
        if (activeTab === "individual") {
            return (
                <Form className="modalForm d-flex flex-column justify-content-center">
                    <Form.Group>
                        <Form.Control type="text" placeholder="City with Pincode" value={formData.cityPincode} onChange={handleChange} name='cityPincode' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select aria-label="Select Gender" value={formData.gender} onChange={handleChange} name='gender'>
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Qualification" value={formData.qualification} onChange={handleChange} name='qualification' />
                    </Form.Group>
                    <Button
                        style={{ width: '40%', margin: '0 auto' }}
                        variant="primary"
                        className="section-3-btn my-2"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </Form>
            );
        } else {
            return (
                <Form className="modalForm d-flex flex-column justify-content-center">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Company Name" value={formData.compnayName} onChange={handleChange} name='compnayName' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Industry Type" value={formData.industry} onChange={handleChange} name='industry' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select
                            aria-label="Select Country"
                            value={formData.country}
                            onChange={handleCountryChange}
                            name='country'
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Select
                            aria-label="Select State"
                            value={formData.stateCorporate}
                            onChange={handleChange}
                            name='stateCorporate'
                            disabled={!selectedCountry} // Disable until a country is selected
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="City" value={formData.corporateCity} onChange={handleChange} name='corporateCity' />
                    </Form.Group>
                    <Button
                        style={{ width: '40%', margin: '0 auto' }}
                        variant="primary"
                        className="section-3-btn my-2"
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                    </Button>
                </Form>
            );
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="custom-modal-style"
        >
            <div className="form-top-selector">
                <button
                    className={`selector-btn ${activeTab === "individual" ? "active" : ""}`}
                    onClick={() => setActiveTab("individual")}
                >
                    Individual
                </button>
                <button
                    className={`selector-btn ${activeTab === "corporate" ? "active" : ""}`}
                    onClick={() => setActiveTab("corporate")}
                >
                    Corporate
                </button>
            </div>
            <Modal.Body>
                {renderForm()}
            </Modal.Body>
        </Modal>
    );
};

export default Individual;