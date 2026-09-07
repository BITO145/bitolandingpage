// KeyActivities.js
import React from 'react';

const KeyActivities = () => {
  return (
    <>
    <section className='bg-[#fffbf5]'>
    <div className="max-w-[1200px] mx-auto p-[20px] text-[#3A3A3A] py-sm-5">
      <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Key Activities</h2>

      <div className="grid grid-cols-1 gap-[20px] min-[768px]:grid-cols-2 min-[768px]:gap-[20px] pt-sm-5">
        <div className="p-[20px] rounded-[8px]">
          <strong className='text-[20px] text-[#422a1e]'>1. Industry Networking and Collaboration</strong>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Networking Events:</strong> Connect with industry leaders and government
            officials.</p>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Seminars and Workshops:</strong> Engage in discussions on industry
            advancements and challenges.</p>
        </div>

        <div className="p-[20px] rounded-[8px]">
          <strong className='text-[20px] text-[#422a1e]'>2. Training and Skill Development</strong>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Training Programs:</strong> Tailored programs to enhance the skills of industry
            professionals.</p>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Skill Development Initiatives:</strong> Projects aimed at improving capabilities and
            industry standards</p>
        </div>

        <div className="p-[20px] rounded-[8px]">
          <strong className='text-[20px] text-[#422a1e]'>3. Research and Development Support</strong>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">R&D Activities:</strong> Encourage and support research initiatives for
            technological advancements.</p>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Industry Competitiveness:</strong> Facilitate resources to maintain and boost
            industry competitiveness.</p>
        </div>

        <div className="p-[20px] rounded-[8px]">
          <strong className='text-[20px] text-[#422a1e]'>4. Sustainability Initiatives</strong>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Energy Efficiency:</strong> Promote practices that reduce energy consumption.
            solutions.</p>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Waste Management:</strong> Advocate for effective waste management
            solutions.</p>
          <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Eco-Friendly Technologies:</strong> Adoption of environmentally friendly
            technologies.</p>
        </div>

      </div>
      <div className="p-[20px] rounded-[8px]">
        <strong className='text-[20px] text-[#422a1e]'>5. Industry Voice & Advocacy</strong>
        <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Policy Representation:</strong> Act as a collective voice for industries in discussions with government authorities, ensuring that the needs and concerns of the
          industrial sector are effectively communicated and addressed.</p>
        <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Advocacy for Policy Changes:</strong> Work actively to influence and shape industrial policies and regulations, advocating for changes that benefit the industry and
          create a more conducive business environment.</p>
        <p className='pt-sm-3 my-[10px] text-black'><strong className="text-[#D0A067]">Stakeholder Engagement:</strong> Engage with key stakeholders, including policymakers, regulatory bodies, and industry groups, to build support for initiatives and
          policies that drive industrial growth and innovation.</p>
      </div>
    </div>
    </section>
    
    </>
  );
};

export default KeyActivities;