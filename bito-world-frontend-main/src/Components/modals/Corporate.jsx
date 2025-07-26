/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { Country, State } from "country-state-city";

const Corporate = ({ props }) => {
    const [activeButton, setActiveButton] = useState("individual");
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the list of countries on component mount
        setCountries(Country.getAllCountries());
    }, []);

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        setStates(State.getStatesOfCountry(countryCode));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission reload
        // Add any form validation or submission logic here

        // Redirect to the thank-you page after submission
        navigate('/thank-you');
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="custom-modal-style"
        >
            {/* Selector buttons for input of foreign and indian */}
            <div className="form-top-selector">
                <Link
                    to={'/individual'}
                    className={`selector-btn ${activeButton === "foreign" ? "active" : ""}`}
                    onClick={() => setActiveButton("foreign")}
                >
                    Individual
                </Link>
                <Link
                    to={'/corporate'}
                    className={`selector-btn ${activeButton === "indian" ? "active" : ""}`}
                    onClick={() => setActiveButton("indian")}
                >
                    Corporate
                </Link>
            </div>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="modalForm d-flex flex-column justify-content-center">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Name" required />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            as="select"
                            placeholder="Country"
                            onChange={handleCountryChange}
                            required
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            as="select"
                            placeholder="State"
                            disabled={!selectedCountry}
                            required
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="number" placeholder="Phone" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Occupation" required />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="section-3-btn my-2"
                    >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default Corporate;