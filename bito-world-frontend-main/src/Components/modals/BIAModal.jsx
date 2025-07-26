/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Country, State } from "country-state-city";

const BIAModal = ({
  ...props
}) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
console.log(props)
  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    const stateList = State.getStatesOfCountry(selectedCountryCode);
    setStates(stateList || []);
    props.handleChange(e);
  };

  const handleBeforeClose = (e) => {
    e.preventDefault(); 

    if (e.target.closest("form").checkValidity()) {
      props.setModalShow(false)
      props.setNextStepModal(true); 
    } else {
      e.target.closest("form").reportValidity();
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
      <Modal.Body>
        <Form className="modalForm d-flex flex-column justify-content-center">
          <h2 className="name-div-head text-center">Enroll</h2>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              name="name"
              value={props.formData.name}
              onChange={props.handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="select"
              name="country"
              value={props.formData.country}
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
              name="state"
              value={props.formData.state}
              onChange={props.handleChange}
              required
              disabled={!props.formData.country}
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
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={props.formData.email}
              onChange={props.handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="tel"
              placeholder="Enter Phone Number"
              name="phone"
              value={props.formData.phone}
              onChange={props.handleChange}
              minLength={7}
              maxLength={15}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter Occupation"
              name="occupation"
              value={props.formData.occupation}
              onChange={props.handleChange}
              required
            />
          </Form.Group>

          <Button
            style={{ width: "40%", margin: "0 auto" }}
            variant="primary"
            className="section-3-btn my-2"
            onClick={handleBeforeClose}
          >
            Next
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default BIAModal;
