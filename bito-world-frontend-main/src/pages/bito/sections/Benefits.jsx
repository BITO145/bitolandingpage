// Benefits.js
import React from 'react';

const Benefits = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-[20px] text-[#3A3A3A] font-[Arial,sans-serif] py-5">
      <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Benefits Explained</h2>
      <div className="flex gap-[20px] flex-wrap max-[600px]:flex-col pt-sm-5">
        
        <ul className="flex-1 min-w-[300px] list-none p-0">
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Business Meets:</strong> Access to exclusive industry gatherings and networking opportunities.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Seminars & Workshops:</strong> Invitations to educational sessions covering industry trends, challenges, and solutions.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Training Programs:</strong> Access to training sessions aimed at enhancing skills and knowledge.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Industry Reports:</strong> Receive detailed reports and insights to inform business decisions.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">R&D Support:</strong> Financial and strategic support for research and development projects.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Exclusive Dinner with Higher-ups:</strong> An invitation to an exclusive dinner with an eminent personality for high-level networking.</li>
        </ul>
        
        <ul className="flex-1 min-w-[300px] list-none p-0 border-b-[3px] border-[#422a1e]">
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">VIP Event Invitations:</strong> Priority invitations to high-profile events and functions.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Business Consultations:</strong> Personalized consultations with industry experts to address specific business needs.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Policy Advocacy Support:</strong> Assistance with navigating and influencing industrial policies and regulations.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Featured Industry Profile:</strong> Prominent placement of your company profile in key publications and platforms.</li>
          <li className="mb-[15px] text-black list-disc font-['Neulis']"><strong className="text-[#D0A067]">Leadership Opportunities:</strong> Opportunities to take on leadership roles within industry forums and committees.</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Benefits;
