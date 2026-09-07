/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Country, State } from "country-state-city";

const BIACorporate = ({ ...props }) => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const navigate = useNavigate();
console.log(props)
    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    const handleCountryChange = (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
        setStates(State.getStatesOfCountry(countryCode));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.finalSubmit();
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
        <Modal.Body>
          <Form className="modalForm d-flex flex-column justify-content-center" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Company Name"
                value={props.formData.compnayName}
                onChange={props.handleChange}
                name="compnayName"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Industry Type"
                value={props.formData.industry}
                onChange={props.handleChange}
                name="industry"
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                aria-label="Select Country"
                value={props.formData.country}
                onChange={handleCountryChange}
                name="country"
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
                value={props.formData.stateCorporate}
                onChange={props.handleChange}
                name="stateCorporate"
                disabled={!selectedCountry} 
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
              <Form.Control
                type="text"
                placeholder="City"
                value={props.formData.corporateCity}
                onChange={props.handleChange}
                name="corporateCity"
              />
            </Form.Group>
            <Button
              style={{ width: "40%", margin: "0 auto" }}
              variant="primary"
              className="section-3-btn my-2"
              onClick={handleSubmit}
              disabled={props.isLoading}
            >
              {props.isLoading ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
};

export default BIACorporate;