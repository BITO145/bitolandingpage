// Challenges.js
import React from 'react';
import './Challenges.css';

const Challenges = () => {
    return (
        <>
            <section className='bg-challenges'>
                <div className="challenges">
                    <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Challenges and the Way Forward</h2>
                    <div className="challenges-grid">

                        <div className="column" >
                            <strong className='objectives-title'>Challenges</strong>
                            <ul className="challenges-list">
                                <li className='pt-sm-3'><strong>Infrastructure Investment:</strong> Address the need for improved industrial infrastructure.</li>
                                <li className='pt-sm-3'><strong>Regulatory Hurdles:</strong> Navigate and overcome challenges related to regulations and policies.</li>
                                <li className='pt-sm-3'><strong>Equitable Growth:</strong> Ensure fair distribution of benefits across various regions.</li>
                            </ul>
                        </div>

                        <div className="column">
                            <strong className='objectives-title'>Way Forward</strong>
                            <ul className="challenges-list">
                                <li className='pt-sm-3'><strong>Strengthening Partnerships:</strong> Build and reinforce partnerships with both public and private sector stakeholders.</li>
                                <li className='pt-sm-3'><strong>Expanding Membership:</strong> Increase membership to include a diverse range of industry players.</li>
                                <li className='pt-sm-3'><strong>Policy Advocacy:</strong> Continue to advocate for favorable policies that support industrial growth and sustainability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Challenges;
