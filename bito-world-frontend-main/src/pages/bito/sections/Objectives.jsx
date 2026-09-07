import React from 'react';

function Objectives() {
    return (
        <section className="p-[20px] max-w-[1200px] mx-auto text-center py-5">
            <h2 style={{ color: '#b27f4a' }} className='text-left membership-heading'>Our Objectives</h2>
            <div className="grid grid-cols-1 gap-[20px] min-[768px]:grid-cols-2 pt-sm-5">
                <div className="text-left p-[15px]">
                    <strong className='text-[20px] text-[#422a1e]'>1. Promoting Industrial Development</strong>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Attract Investments:</strong> Actively engage with potential investors to create
                        and expand industrial ventures in Bihar. Provide a supportive environment
                        to attract both domestic and international investments.</p>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Support Industry Expansion:</strong> Offer tailored resources, guidance, and
                        support mechanisms to foster the growth and scalability of existing
                        industries, enhancing their competitive edge and operational efficiency.</p>
                </div>

                <div className="text-left p-[15px]">
                    <strong className='text-[20px] text-[#422a1e]'>2. Fostering Innovation</strong>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Encourage Collaboration:</strong> Establish platforms and forums that facilitate industry-wide collaboration, knowledge sharing, and partnerships. Foster an ecosystem where industries can collectively address challenges and leverage opportunities.</p>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Drive Technological Advancements:</strong> Promote and support cutting-edge research, technological developments, and innovative practices that enhance industry competitiveness and drive forward industry progress.</p>
                </div>

                <div className="text-left p-[15px]">
                    <strong className='text-[20px] text-[#422a1e]'>3. Advocacy and Policy Support</strong>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Represent Industry Interests:</strong> Serve as a unified voice for the industrial
                        sector in discussions with government authorities and other stakeholders.
                        Advocate for policies and regulations that benefit and advance industrial
                        interests.</p>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Policy Advocacy:</strong> Work to shape and influence industrial policies to create
                        a favorable regulatory environment that supports sustainable growth,
                        reduces barriers, and enhances the overall business climate.</p>
                </div>

                <div className="text-left p-[15px]">
                    <strong className='text-[20px] text-[#422a1e]'>4. Sustainable Practices</strong>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Promote Eco-Friendly Technologies:</strong> Advocate for and support the
                        adoption of environmentally friendly technologies and practices.
                        Encourage industries to implement energy-efficient processes, waste
                        management solutions, and other sustainable practices.</p>
                    <p className='pt-sm-3 my-[5px] text-black'><strong className="text-[#b2804a]">Ensure Community Well-being:</strong> Strive to balance industrial growth with
                        social responsibility. Ensure that industrial development positively impacts
                        the community and contributes to environmental preservation, enhancing
                        the overall quality of life.</p>
                </div>
            </div>
        </section>
    );
}

export default Objectives;
