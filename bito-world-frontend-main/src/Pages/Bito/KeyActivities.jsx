// KeyActivities.js
import React from 'react';
import './KeyActivities.css';

const KeyActivities = () => {
  return (
    <>
    <section className='bg-activities'>
    <div className="key-activities py-sm-5">
      <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Key Activities</h2>

      <div className="activity-grid pt-sm-5">
        <div className="activity">
          <strong className='objectives-title'>1. Industry Networking and Collaboration</strong>
          <p className='pt-sm-3'><strong>Networking Events:</strong> Connect with industry leaders and government
            officials.</p>
          <p className='pt-sm-3'><strong>Seminars and Workshops:</strong> Engage in discussions on industry
            advancements and challenges.</p>
        </div>

        <div className="activity">
          <strong className='objectives-title'>2. Training and Skill Development</strong>
          <p className='pt-sm-3'><strong>Training Programs:</strong> Tailored programs to enhance the skills of industry
            professionals.</p>
          <p className='pt-sm-3'><strong>Skill Development Initiatives:</strong> Projects aimed at improving capabilities and
            industry standards</p>
        </div>

        <div className="activity">
          <strong className='objectives-title'>3. Research and Development Support</strong>
          <p className='pt-sm-3'><strong>R&D Activities:</strong> Encourage and support research initiatives for
            technological advancements.</p>
          <p className='pt-sm-3'><strong>Industry Competitiveness:</strong> Facilitate resources to maintain and boost
            industry competitiveness.</p>
        </div>

        <div className="activity">
          <strong className='objectives-title'>4. Sustainability Initiatives</strong>
          <p className='pt-sm-3'><strong>Energy Efficiency:</strong> Promote practices that reduce energy consumption.
            solutions.</p>
          <p className='pt-sm-3'><strong>Waste Management:</strong> Advocate for effective waste management
            solutions.</p>
          <p className='pt-sm-3'><strong>Eco-Friendly Technologies:</strong> Adoption of environmentally friendly
            technologies.</p>
        </div>


      </div>
      <div className="activity">
        <strong className='objectives-title'>5. Industry Voice & Advocacy</strong>
        <p className='pt-sm-3'><strong>Policy Representation:</strong> Act as a collective voice for industries in discussions with government authorities, ensuring that the needs and concerns of the
          industrial sector are effectively communicated and addressed.</p>
        <p className='pt-sm-3'><strong>Advocacy for Policy Changes:</strong> Work actively to influence and shape industrial policies and regulations, advocating for changes that benefit the industry and
          create a more conducive business environment.</p>
        <p className='pt-sm-3'><strong>Stakeholder Engagement:</strong> Engage with key stakeholders, including policymakers, regulatory bodies, and industry groups, to build support for initiatives and
          policies that drive industrial growth and innovation.</p>
      </div>
    </div>
    </section>
    
    </>
  );
};

export default KeyActivities;