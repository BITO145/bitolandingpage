
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InstagramLogo from "../../assets/social/insta.png";
import FacebookLogo from "../../assets/social/facebook-logo.png";
import YoutubeLogo from "../../assets/social/youtube.png";
import TwitterLogo from "../../assets/social/twitter.png";
import LinkedinLogo from "../../assets/social/linkedin.png";

// ✅ Contact banner image
// Agar tumhari image kisi aur folder/file name me hai,
// to sirf ye path change karna hai.
import contactBanner from "../../assets/about/contactbanner.jpg";

const ContactUs = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    // =========================
    // HANDLE INPUT CHANGE
    // =========================
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    // =========================
    // VALIDATION
    // =========================
    const validateForm = () => {
        const newErrors = {};

        const name = formData.name.trim();
        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const message = formData.message.trim();

        if (!name) {
            newErrors.name = "Please enter your name.";
        }

        if (!email) {
            newErrors.email = "Please enter your email.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (phone && !/^\d{10}$/.test(phone)) {
            newErrors.phone =
                "Please enter a valid 10-digit phone number.";
        }

        if (!message) {
            newErrors.message = "Please enter your message.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // =========================
    // SUBMIT FORM
    // =========================
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("/api/contact/submit", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),

                    message: `${
                        formData.subject.trim()
                            ? `Subject: ${formData.subject.trim()}\n`
                            : ""
                    }${
                        formData.phone.trim()
                            ? `Phone: ${formData.phone.trim()}\n`
                            : ""
                    }${formData.message.trim()}`,
                }),
            });

            if (!response.ok) {
                let errorMessage = "Failed to send message.";

                try {
                    const errorData = await response.json();

                    if (errorData?.message) {
                        errorMessage = errorData.message;
                    }
                } catch {
                    // Ignore invalid JSON response
                }

                throw new Error(errorMessage);
            }

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setErrors({});

            // Redirect
            navigate("/thank-you");
        } catch (error) {
            console.error(
                "Error saving contact message:",
                error
            );

            alert(
                error?.message ||
                    "Failed to send message. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div>

                {/* =====================================================
                    CONTACT BANNER
                ====================================================== */}

                <section
                    className="contact-img d-flex align-items-end -mt-40"
                    style={{
                        backgroundImage: `url(${contactBanner})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "500px",
                        width: "100%",
                    }}
                >
                    <div className="container">
                        <div className="text-white">

                            <p
                                className="fs-4 m-0 font-bnpr"
                                style={{
                                    marginTop: "330px",
                                }}
                            >
                                Welcome to
                            </p>

                            <strong className="fs-4 font-bnpr">
                                Bihar Internatinal Trade Organization
                            </strong>

                            <h2
                                className="bannerHeading"
                                style={{
                                    fontSize: "100px",
                                    fontWeight: 700,
                                }}
                            >
                                Contact Us
                            </h2>

                        </div>
                    </div>
                </section>


                {/* =====================================================
                    CONTACT INFORMATION
                ====================================================== */}

                <div className="container my-5">
                    <div className="row">

                        {/* ADDRESS */}
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">

                                    <div className="locationDiv">
                                        <h4 className="cardHeading">
                                            Address
                                        </h4>

                                        <p className="cardParagraph">
                                            173, 7th Floor, Tower A,
                                            Corenthum, Sector 62,
                                            Opp. Electronic City Metro
                                            Station, Noida-201309
                                        </p>
                                    </div>

                                    <h4 className="cardHeading">
                                        Social Links
                                    </h4>

                                    <div className="social-footer mt-3">
                                        <div className="social-icons d-flex align-items-center">

                                            {/* FACEBOOK */}
                                            <a
                                                href="https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                            >
                                                <img
                                                    src={FacebookLogo}
                                                    alt="Facebook"
                                                    className="social-links-img"
                                                />
                                            </a>

                                            {/* INSTAGRAM */}
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                aria-label="Instagram"
                                            >
                                                <img
                                                    src={InstagramLogo}
                                                    alt="Instagram"
                                                    className="social-links-img"
                                                />
                                            </a>

                                            {/* LINKEDIN */}
                                            <a
                                                href="https://www.linkedin.com/company/bihar-international-trade-organisation/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                            >
                                                <img
                                                    src={LinkedinLogo}
                                                    alt="LinkedIn"
                                                    className="social-links-img"
                                                />
                                            </a>

                                            {/* TWITTER */}
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                aria-label="Twitter"
                                            >
                                                <img
                                                    src={TwitterLogo}
                                                    alt="Twitter"
                                                    className="social-links-img"
                                                />
                                            </a>

                                            {/* YOUTUBE */}
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                aria-label="YouTube"
                                            >
                                                <img
                                                    src={YoutubeLogo}
                                                    alt="YouTube"
                                                    className="social-links-img"
                                                />
                                            </a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* GENERAL ENQUIRY */}
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">

                                    <div className="locationDiv">
                                        <h2 className="cardHeading">
                                            For General Enquiry
                                        </h2>
                                    </div>

                                    <div className="locationDiv mt-5">
                                        <h4 className="cardHeading">
                                            Contact No.
                                        </h4>

                                        <p className="cardParagraph">
                                            0120-4914498
                                        </p>
                                    </div>

                                    <div className="locationDiv">
                                        <h4 className="cardHeading">
                                            Email Us
                                        </h4>

                                        <p className="cardParagraph">
                                            office@bitoworld.in
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* BUSINESS RELATIONS */}
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">

                                    <div className="locationDiv">
                                        <h2 className="cardHeading">
                                            For Business Realtions
                                        </h2>
                                    </div>

                                    <div className="locationDiv mt-5">
                                        <h4 className="cardHeading">
                                            Contact No.
                                        </h4>

                                        <p className="cardParagraph">
                                            0120-4914498
                                        </p>
                                    </div>

                                    <div className="locationDiv">
                                        <h4 className="cardHeading">
                                            Email Us
                                        </h4>

                                        <p className="cardParagraph">
                                            office@bitoworld.in
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* OTHER ENQUIRY */}
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">

                                    <div className="locationDiv">

                                        <h2 className="cardHeading">
                                            For Other Enquiry
                                        </h2>

                                    </div>

                                    <div className="locationDiv mt-5">

                                        <h4 className="cardHeading">
                                            Contact No.
                                        </h4>

                                        <p className="cardParagraph">
                                            0120-4914498
                                        </p>

                                    </div>

                                    <div className="locationDiv">

                                        <h4 className="cardHeading">
                                            Email Us
                                        </h4>

                                        <p className="cardParagraph">
                                            office@bitoworld.in
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* =====================================================
                    FORM + MAP
                ====================================================== */}

                <section>
                    <div className="row contactRow">

                        {/* FORM */}
                        <div className="col-md-6">

                            <div className="container mt-5 mb-5">

                                <div className="row justify-content-center">

                                    <div className="col-12">

                                        <div className="card shadow-lg">

                                            <div className="card-body">

                                                <h2 className="cardHeading">
                                                    Enquire Now
                                                </h2>

                                                <form
                                                    onSubmit={handleSubmit}
                                                    noValidate
                                                >

                                                    {/* NAME */}
                                                    <div className="mb-3">

                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                formData.name
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className={`form-control ${
                                                                errors.name
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            id="name"
                                                            placeholder="Enter your name"
                                                            autoComplete="name"
                                                            required
                                                        />

                                                        {errors.name && (
                                                            <div className="invalid-feedback">
                                                                {
                                                                    errors.name
                                                                }
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* EMAIL */}
                                                    <div className="mb-3">

                                                        <input
                                                            name="email"
                                                            type="email"
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className={`form-control ${
                                                                errors.email
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            id="email"
                                                            placeholder="Enter your email"
                                                            autoComplete="email"
                                                            required
                                                        />

                                                        {errors.email && (
                                                            <div className="invalid-feedback">
                                                                {
                                                                    errors.email
                                                                }
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* PHONE */}
                                                    <div className="mb-3">

                                                        <input
                                                            name="phone"
                                                            value={
                                                                formData.phone
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="tel"
                                                            className={`form-control ${
                                                                errors.phone
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            id="phone"
                                                            placeholder="Enter your phone number"
                                                            autoComplete="tel"
                                                            inputMode="numeric"
                                                            minLength={10}
                                                            maxLength={10}
                                                        />

                                                        {errors.phone && (
                                                            <div className="invalid-feedback">
                                                                {
                                                                    errors.phone
                                                                }
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* SUBJECT */}
                                                    <div className="mb-3">

                                                        <input
                                                            value={
                                                                formData.subject
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="subject"
                                                            type="text"
                                                            className="form-control"
                                                            id="subject"
                                                            placeholder="Enter subject"
                                                        />

                                                    </div>


                                                    {/* MESSAGE */}
                                                    <div className="mb-3">

                                                        <textarea
                                                            value={
                                                                formData.message
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            name="message"
                                                            className={`form-control ${
                                                                errors.message
                                                                    ? "is-invalid"
                                                                    : ""
                                                            }`}
                                                            id="message"
                                                            rows="4"
                                                            placeholder="Enter your message"
                                                            required
                                                        />

                                                        {errors.message && (
                                                            <div className="invalid-feedback">
                                                                {
                                                                    errors.message
                                                                }
                                                            </div>
                                                        )}

                                                    </div>


                                                    {/* SUBMIT BUTTON */}
                                                    <div className="d-grid">

                                                        <button
                                                            disabled={
                                                                isLoading
                                                            }
                                                            type="submit"
                                                            className="btn btn-primary contactBtn"
                                                        >
                                                            {isLoading
                                                                ? "Submitting..."
                                                                : "Submit"}
                                                        </button>

                                                    </div>

                                                </form>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* MAP */}
                        <div className="col-md-6">

                            <div className="container mt-5 mb-5">

                                <iframe
                                    title="BITO Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.188514236718!2d77.37410100000001!3d28.626937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53be7ef9aef%3A0x88edc82dc4a1a8d0!2sCorenthum%20Tower!5e0!3m2!1sen!2sin!4v1743405203500!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{
                                        border: "0",
                                        maxWidth: "100%",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </div>

                        </div>

                    </div>
                </section>

            </div>
        </>
    );
};

export default ContactUs;

