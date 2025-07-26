// Benefits.js
import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="benefits py-5">
      <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Benefits Explained</h2>
      <div className="benefits-grid pt-sm-5">
        
        <ul className="benefit-list">
          <li><strong>Business Meets:</strong> Access to exclusive industry gatherings and networking opportunities.</li>
          <li><strong>Seminars & Workshops:</strong> Invitations to educational sessions covering industry trends, challenges, and solutions.</li>
          <li><strong>Training Programs:</strong> Access to training sessions aimed at enhancing skills and knowledge.</li>
          <li><strong>Industry Reports:</strong> Receive detailed reports and insights to inform business decisions.</li>
          <li><strong>R&D Support:</strong> Financial and strategic support for research and development projects.</li>
          <li><strong>Exclusive Dinner with Higher-ups:</strong> An invitation to an exclusive dinner with an eminent personality for high-level networking.</li>
        </ul>
        
        <ul className="benefit-list">
          <li><strong>VIP Event Invitations:</strong> Priority invitations to high-profile events and functions.</li>
          <li><strong>Business Consultations:</strong> Personalized consultations with industry experts to address specific business needs.</li>
          <li><strong>Policy Advocacy Support:</strong> Assistance with navigating and influencing industrial policies and regulations.</li>
          <li><strong>Featured Industry Profile:</strong> Prominent placement of your company profile in key publications and platforms.</li>
          <li><strong>Leadership Opportunities:</strong> Opportunities to take on leadership roles within industry forums and committees.</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Benefits;
