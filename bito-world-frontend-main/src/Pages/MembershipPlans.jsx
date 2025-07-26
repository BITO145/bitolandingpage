import React, { useState } from 'react';
import './MembershipPlans.css';
import emailjs from '@emailjs/browser';

const plans = [
    {
        name: 'Basic',
        color: '#b27f4a',
        oldPrice: 50,
        discountPrice: 40,
        features: [true, true, false, false, false, false],
    },
    {
        name: 'Standard',
        color: '#b27f4a',
        oldPrice: 100,
        discountPrice: 80,
        features: [true, true, true, false, false, false],
    },
    {
        name: 'Business',
        color: '#b27f4a',
        oldPrice: 200,
        discountPrice: 160,
        features: [true, true, true, true, true, false],
    },
    {
        name: 'Exclusive',
        color: '#b27f4a',
        oldPrice: 400,
        discountPrice: 320,
        features: [true, true, true, true, true, true],
    },
];


const featuresList = [
    'Business Meets',
    'Seminars & Workshops',
    'Industry Voice',
    'Exclusive Dinner with Higherups',
    'VIP Event Invitations',
    'Business Consultations',
    'Policy Advocacy Support',
    'Featured Industry Profile',
    'Leadership Opportunities'
];

const MembershipPlans = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '', occupation: '', email: '' });

    const openModal = (planName) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFormData({ name: '', phone: '', occupation: '', email: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_wrk5j76', 'template_ajfrv6q', { ...formData, selectedPlan }, '3CoQnyOSI3gq1XqZ6')
            .then(() => {
                alert('Subscription email sent successfully!');
                closeModal();
            }, (error) => {
                alert('Failed to send subscription email. Please try again.');
                console.error(error);
            });
    };

    return (
        <>
            <div style={{ background: "#b27f4a", height: "160px", marginTop: "-161px" }}></div>
            <div className='container-memb'>
                <div className="membership-container">

                    <h2 className="membership-heading">Membership Plans</h2>
                    <p className="membership-subtitle">Explore our various levels of industry engagement and benefit.</p>

                    <div className="membership-cards py-sm-5">

                        {plans.map((plan, index) => (
                            <div key={index} className="membership-card">
                                {/* Vertical Ribbon */}
                                <div
                                    className="ribbon"
                                    style={{ backgroundColor: plan.color }}
                                >
                                    {plan.name} Plan
                                </div>

                                {/* Pricing */}
                                <div className="membership-pricing">
                                    <span className="old-price">${plan.oldPrice}</span>
                                    <span className="discount-price">Now ${plan.discountPrice}</span>
                                </div>
                                <div className="limited-time">20% OFF LIMITED TIME</div>

                                {/* Features List */}
                                <div className="features-list">
                                    {featuresList.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="feature-item">
                                            {plan.features[featureIndex] ? (
                                                <span className="checkmark">✔</span>
                                            ) : (
                                                <span className="dash">x</span>
                                            )}
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Subscribe Button */}
                                <button onClick={() => openModal(plan.name)} className="subscribe-button">
                                    Subscribe
                                </button>
                            </div>
                        ))}



                    </div>

                    {isModalOpen && (
                        <div className="modal-overlay">
                            <div className="modal-content animate-modal">
                                <h3>Subscribe to {selectedPlan} Plan</h3>
                                <form onSubmit={handleSubmit} className="subscription-form">
                                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                    <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    <button type="submit" className="submit-button">Submit</button>
                                </form>
                                <button onClick={closeModal} className="close-button">x</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MembershipPlans;
