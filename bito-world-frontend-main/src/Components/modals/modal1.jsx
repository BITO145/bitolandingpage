import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Country, State } from "country-state-city";

const Modal1 = ({
  formData,
  handleChange,
  setModalShow,
  setIndividualModal,
  ...props
}) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  // Fetch all countries on component mount
  useEffect(() => {
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    const stateList = State.getStatesOfCountry(selectedCountryCode);
    setStates(stateList || []);
    handleChange(e); // Update formData for country
  };

  const handleBeforeClose = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (e.target.closest("form").checkValidity()) {
      setModalShow(false); // Close Modal1
      setIndividualModal(true); // Open Individual modal
    } else {
      e.target.closest("form").reportValidity(); // Trigger validation UI feedback
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
            <Form.Label htmlFor="name">Full Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Enter Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              as="select"
              id="country"
              name="country"
              value={formData.country}
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
            <Form.Label htmlFor="state">State</Form.Label>
            <Form.Control
              as="select"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={!formData.country}
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
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <Form.Control
              id="phone"
              type="tel"
              placeholder="Enter Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              minLength={7}
              maxLength={15}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="occupation">Occupation</Form.Label>
            <Form.Control
              id="occupation"
              type="text"
              placeholder="Enter Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            style={{ width: '40%', margin: '0 auto' }}
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

export default Modal1;
