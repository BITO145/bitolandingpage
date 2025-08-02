/* eslint-disable no-unused-vars */
import React from 'react'
import '../Pages/Events/OurWork.css'
import {
    BitoImage,
    BitoImage1,
    BitoImage2,
    BitoImage3,
    BitoImage4,
    BitoImage5,
    BitoImage6,
    BitoImage7,
} from '../assets'
import keyServicesImg from '../assets/key-services.jpg'
import {
  aboutUs,
  biharAsmitaFoundation,
  curriculum,
  economics,
  future,
  infra,
  lachhuar,
  meetup,
  multiSpecialityHospital,
  organizationalStructure,
  socialImpact,
  spiritual,
  training,
} from "../assets/about";
import Objective from '../assets/about/objective.jpg'
import { Container } from 'react-bootstrap'

const OurWork = () => {

    const items = [
        { icon: BitoImage, title: 'Feasibility Study & ', title2: 'Market Entry Assistance', description: 'Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.' },
        { icon: BitoImage1, title: 'Regulatory Compliance', title2: 'Advisory', description: "Offering insights into India's regulatory landscape to ensure compliance with local laws and regulations.Facilitating the necessary permits and approvals required for smooth operations." },
        { icon: BitoImage2, title: 'Legal and', title2: 'Taxation Support', description: 'Collaborating with legal experts to navigate complex legal frameworks.Providing tax advisory services to optimize fiscal strategies and reduce potential liabilities.' },
        { icon: BitoImage3, title: 'Customized Business', title2: 'Solutions For Start Up', description: 'Tailoring solutions based on the specific needs of the foreign company. Assisting in establishing local partnerships and building a network within the Indian business ecosystem.' },
        { icon: BitoImage4, title: 'Human Resources', title2: 'Support', description: 'Offering assistance in recruiting local talent and understanding labor laws. Providing guidance on cultural integration and workforce management.' },
        { icon: BitoImage5, title: 'Infrastructure', title2: 'and Location', description: 'Identifying suitable office locations and assisting in setting up necessary infrastructure.' },
        { icon: BitoImage6, title: 'Regulatory and', title2: 'Compliance Advisory', description: 'Offering insights into Indias regulatory landscape to ensure compliance with local laws and regulations. Facilitating the necessary permits and approvals required for smooth operations.' },
        { icon: BitoImage7, title: 'Feasibility Study and', title2: 'Market Entry Assistance', description: 'Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.' },

    ];

    return (
        <>
            <div>
                {/* Home Banner */}
                <section className="ourWork-img d-flex align-items-end">
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
                                Work
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="container py-3 py-md-5">
                    <div className="row pb-4 pb-md-1">
                        <div className="col-12 col-md-6 my-3 my-md-1">
                            <h3 className="biaHeading">Objective:</h3>
                            <h4 className="font-neulis-mdm">
                                Empowering Global Ventures: The Objective of BITO
                            </h4>
                            <p>
                                BITO aim to provide comprehensive facilitation and support to foreign companies seeking to establish and operate successfully in India. This initiative focuses on streamlining processes, enhancing ease of doing business, and fostering a conducive environment for international companies.
                            </p>
                            <p>
                                BITO is dedicated to offering end-to-end assistance to foreign businesses, ensuring a smooth entry into the Indian market. Through tailored solutions, BITO guides companies through regulatory frameworks, legal compliance, and operational procedures, minimizing complexities and delays. By providing expert consultation and hands-on support, BITO helps international firms navigate the diverse and dynamic business landscape of India, fostering long-term growth and success.
                            </p>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-5">
                            <img src={Objective} alt="" width="100%" />
                        </div>
                    </div>
                </section>
                <Container className=''>
                    <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>Key Services</h2>
                    <div className="card-grid">
                        {items.map((item, index) => (
                            <div key={index} className="card">
                                <img src={item.icon} alt={item.title} className="icon" />
                                <h4>{item.title}</h4>
                                <h4 className='mo-space'>{item.title2}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
                <section className="container py-3 py-md-5">
                    <div className="row pb-4 pb-md-1">
                        <div className="col-12 col-md-6 my-3 my-md-1">
                            <h3 className="biaHeading">Key Benefits:</h3>
                            <h4 className="font-neulis-mdm">
                                Key Benefits: From Roots to Wings – The BITO Advantage
                            </h4>
                            <p>
                            Discover how BITO empowers foreign companies to establish and thrive in India by simplifying processes, enhancing business efficiency, and providing comprehensive support.
                            </p>
                            <ul className="list-unstyled">
                                <li className="d-flex keyBenefitsMargin">
                                    <img src={curriculum} alt="" height={30} width={30} />
                                    <div className="ms-3">
                                        <h5 className="font-18 font-neulis-mdm">
                                        Accelerated market entry with reduced bureaucratic hurdles.
                                        </h5>
                                         
                                    </div>
                                </li>
                                <li className="d-flex keyBenefitsMargin">
                                    <img src={training} alt="" height={30} width={30} />
                                    <div className="ms-3">
                                        <h5 className="font-18 font-neulis-mdm">
                                        Enhanced understanding of the local business landscape.
                                        </h5>
                                       
                                    </div>
                                </li>
                                <li className="d-flex keyBenefitsMargin">
                                    <img src={future} alt="" height={30} width={30} />
                                    <div className="ms-3">
                                        <h5 className="font-18 font-neulis-mdm">Mitigation of legal and regulatory risks.</h5>
                                       
                                    </div>
                                </li>
                                <li className="d-flex keyBenefitsMargin">
                                    <img src={future} alt="" height={30} width={30} />
                                    <div className="ms-3">
                                        <h5 className="font-18 font-neulis-mdm">Cost-effective and efficient solutions tailored to individual business requirements.</h5>
                                       
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-1"></div>
                        <div className="col-12 col-md-5">
                            <img src={keyServicesImg} alt="" width="100%" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default OurWork