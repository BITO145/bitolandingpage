import React, { useState } from 'react';
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
                <div className="text-center p-[50px] bg-[#f0f0f0]">

                    <h2 className="text-[2.5em] text-[#2a8fc0] font-bold">Membership Plans</h2>
                    <p className="text-[#666] text-[1.2em] mb-[30px]">Explore our various levels of industry engagement and benefit.</p>

                    <div className="flex justify-center gap-[20px] py-sm-5">

                        {plans.map((plan, index) => (
                            <div key={index} className="group w-[360px] pt-[25px] rounded-[10px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative overflow-hidden transition-transform duration-300 ease-[ease] hover:-translate-y-[5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]">
                                {/* Vertical Ribbon */}
                                <div
                                    className="absolute top-0 left-[17px] w-[35px] h-[25rem] flex items-center justify-center text-[0.9em] font-bold [writing-mode:vertical-rl] uppercase py-[10px] -translate-x-[10px] transition-[0.5s] group-hover:h-[20rem] group-hover:rotate-[270deg] group-hover:left-[140px] group-hover:-top-[135px]"
                                    style={{ backgroundColor: plan.color }}
                                >
                                    {plan.name} Plan
                                </div>

                                {/* Pricing */}
                                <div className="text-[1.6em] text-[#333] my-[15px] font-bold">
                                    <span className="line-through text-[#999] text-[0.8em] mr-[10px]">${plan.oldPrice}</span>
                                    <span className="text-[#422a1d]">Now ${plan.discountPrice}</span>
                                </div>
                                <div className="text-[#b27f4a] text-[0.9em] -mt-[5px] mb-[20px]">20% OFF LIMITED TIME</div>

                                {/* Features List */}
                                <div className="my-[15px] text-[1em] text-[#666]">
                                    {featuresList.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center my-[8px] ml-[50px] text-left border-b border-[#e7e7e7]">
                                            {plan.features[featureIndex] ? (
                                                <span className="text-[#00c853] mr-[8px] font-bold">✔</span>
                                            ) : (
                                                <span className="text-[#e53935] mr-[8px] font-bold">x</span>
                                            )}
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Subscribe Button */}
                                <button onClick={() => openModal(plan.name)} className="mt-[20px] py-[12px] w-full bg-[#b28455] text-white border-none rounded-[5px] cursor-pointer text-[1em] font-bold transition-colors duration-300 ease-[ease] hover:bg-[#422a1d]">
                                    Subscribe
                                </button>
                            </div>
                        ))}



                    </div>

                    {isModalOpen && (
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[5px] flex items-center justify-center z-[1000]">
                            <div className="bg-[#fffbf5] p-[30px] rounded-[12px] shadow-[0_8px_16px_rgba(0,0,0,0.2)] w-[90%] max-w-[400px] text-center relative transition-all duration-300 ease-[ease]">
                                <h3 className="text-[#b28455] text-[1.5em] mb-[20px] font-[Roboto,sans-serif]">Subscribe to {selectedPlan} Plan</h3>
                                <form onSubmit={handleSubmit} className="subscription-form">
                                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full my-[12px] py-[12px] text-[1em] border border-[#ddd] rounded-[8px] transition-border duration-300 ease-[ease] focus:outline-none focus:border-[#b28455] focus:shadow-[0_0_5px_rgba(178,132,85,0.5)]" />
                                    <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full my-[12px] py-[12px] text-[1em] border border-[#ddd] rounded-[8px] transition-border duration-300 ease-[ease] focus:outline-none focus:border-[#b28455] focus:shadow-[0_0_5px_rgba(178,132,85,0.5)]" />
                                    <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} required className="w-full my-[12px] py-[12px] text-[1em] border border-[#ddd] rounded-[8px] transition-border duration-300 ease-[ease] focus:outline-none focus:border-[#b28455] focus:shadow-[0_0_5px_rgba(178,132,85,0.5)]" />
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full my-[12px] py-[12px] text-[1em] border border-[#ddd] rounded-[8px] transition-border duration-300 ease-[ease] focus:outline-none focus:border-[#b28455] focus:shadow-[0_0_5px_rgba(178,132,85,0.5)]" />
                                    <button type="submit" className="w-full py-[12px] text-[1em] font-bold bg-[#b28455] text-white border-none rounded-[8px] cursor-pointer transition-colors duration-300 ease-[ease] hover:bg-[#9a6b42]">Submit</button>
                                </form>
                                <button onClick={closeModal} className="absolute top-[8px] right-[10px] py-[2px] px-[7px] bg-[#b28455] border-none rounded-full cursor-pointer text-[1.2em] text-white transition-colors duration-300 ease-[ease] w-[30px] h-[30px] hover:bg-[#ccc]">x</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MembershipPlans;
