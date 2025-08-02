/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import InstagramLogo from '../assets/insta.png'
import FacebookLogo from '../assets/facebook-logo.png'
import YoutubeLogo from '../assets/youtube.png'
import TwitterLogo from '../assets/twitter.png'
import LinkedinLogo from '../assets/linkedin.png'
import { useNavigate } from 'react-router-dom'


const ContactUs = () => {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        setIsLoading(true);

        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            setIsLoading(false); // Stop loading if validation fails
            return;
        }

        try {
            // Save to database
            const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
            const dbResponse = await fetch(`${apiUrl}/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `${formData.subject ? 'Subject: ' + formData.subject + '\n' : ''}${formData.phone ? 'Phone: ' + formData.phone + '\n' : ''}${formData.message}`
                })
            });

            if (dbResponse.ok) {
                console.log("Message saved successfully!");
                setIsLoading(false);
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Reset form
                navigate("/thank-you"); // Redirect to Thank You page
            } else {
                console.error('Failed to save to database');
                setIsLoading(false);
                alert("Failed to send message. Please try again.");
            }

        } catch (error) {
            console.error("Error saving to database:", error);
            setIsLoading(false);
            alert("Failed to send message. Please try again.");
        }
    };
    return (
        <>
            <div>
                <section className=" contact-img d-flex align-items-end">
                    <div className="container">
                        <div className="text-white">
                            <p className="fs-4 m-0 font-bnpr" style={{ marginTop: "330px" }}>
                                Welcome to
                            </p>
                            <strong className="fs-4 font-bnpr">
                                Bihar Internatinal Trade Organization
                            </strong>
                            <h2
                                key={1}
                                className="bannerHeading"
                                style={{ fontSize: "100px", fontWeight: 700 }}
                            >
                                Contact Us
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Address row */}
                <div className='container my-5'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">
                                    <div className="locationDiv">
                                        <h4 className='cardHeading'>Address</h4>
                                        <p className='cardParagraph'>173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic City Metro Station, Noida-201309 </p>
                                    </div>
                                    <h4 className='cardHeading'>Social Links</h4>
                                    <div class="social-footer mt-3">
                                        <div class="social-icons d-flex align-items-center">
                                            <a href="https://www.facebook.com/people/Bihar-International-Trade-Organisation/61553947718537/?mibextid=ZbWKwL">
                                                <img src={FacebookLogo} alt="footer-social-logo" class="social-links-img" />
                                            </a>
                                            <a href="/contact-us">
                                                <img src={InstagramLogo} alt="footer-social-logo" class="social-links-img" />
                                            </a>
                                            <a href="https://www.linkedin.com/company/bihar-international-trade-organisation/">
                                                <img src={LinkedinLogo} alt="footer-social-logo" class="social-links-img" />
                                            </a>
                                            <a href="/contact-us">
                                                <img src={TwitterLogo} alt="footer-social-logo" class="social-links-img" />
                                            </a>
                                            <a href="/contact-us">
                                                <img src={YoutubeLogo} alt="footer-social-logo" class="social-links-img" />
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">
                                    <div className="locationDiv">
                                        <h2 className='cardHeading'>For General Enquiry</h2>

                                    </div>
                                    <div className="locationDiv mt-5">
                                        <h4 className='cardHeading'>Contact No.</h4>
                                        <p className='cardParagraph'> 0120-4914498</p>
                                    </div>
                                    <div className="locationDiv">
                                        <h4 className='cardHeading'>Email Us</h4>
                                        <p className='cardParagraph'>office@bitoworld.in</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">
                                    <div className="locationDiv">
                                        <h2 className='cardHeading'>For Business Realtions</h2>

                                    </div>
                                    <div className="locationDiv mt-5">
                                        <h4 className='cardHeading'>Contact No.</h4>
                                        <p className='cardParagraph'> 0120-4914498</p>
                                    </div>
                                    <div className="locationDiv">
                                        <h4 className='cardHeading'>Email Us</h4>
                                        <p className='cardParagraph'>office@bitoworld.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cardBox mb-2">
                                <div className="locationWrapper">
                                    <div className="locationDiv">
                                        <h2 className='cardHeading'>For Other Enquiry</h2>

                                    </div>
                                    <div className="locationDiv mt-5">
                                        <h4 className='cardHeading'>Contact No.</h4>
                                        <p className='cardParagraph'> 0120-4914498</p>
                                    </div>
                                    <div className="locationDiv">
                                        <h4 className='cardHeading'>Email Us</h4>
                                        <p className='cardParagraph'>office@bitoworld.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Forms and other details */}
                <section>
                    <div className="row contactRow">
                        <div className="col-md-6">
                            <div className="">
                                <div className="container mt-5 mb-5">
                                    <div className="row justify-content-center">
                                        <div className="">
                                            <div className="card shadow-lg">
                                                <div className="card-body">
                                                    <h2 className='cardHeading'>Enquire Now</h2>
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="mb-3">

                                                            <input type="text" name='name' value={formData.name} onChange={handleChange} className="form-control" id="name" placeholder="Enter your name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <input name='email' type="email" value={formData.email} onChange={handleChange} className="form-control" id="email" placeholder="Enter your email" />
                                                        </div>
                                                        <div className="mb-3"> 
                                                            <input name='phone' value={formData.phone} onChange={handleChange} type="tel" className="form-control" id="phone" placeholder="Enter your phone number" minLength={10} maxLength={10} />
                                                        </div>
                                                        <div className="mb-3">

                                                            <input value={formData.subject} onChange={handleChange} name='subject' type="text" className="form-control" id="subject" placeholder="Enter subject" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <textarea value={formData.message} onChange={handleChange} name='message' className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                                                        </div>
                                                        <div className="d-grid">
                                                            <button disabled={isLoading} type="submit" className="btn btn-primary contactBtn">{isLoading ? "Submitting..." : "Submit"}</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right side here */}
                        <div className="col-md-6">
                            <div className="container mt-5 mb-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.188514236718!2d77.37410100000001!3d28.626937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53be7ef9aef%3A0x88edc82dc4a1a8d0!2sCorenthum%20Tower!5e0!3m2!1sen!2sin!4v1743405203500!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>

                    </div>
                </section>
            </div>


        </>
    )
}

export default ContactUs