import React from 'react';
import { Container } from 'react-bootstrap'
import './BitoCard.css'; // Import your CSS file
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



const BitoCard = () => {

  const items = [
    { icon: BitoImage, title: 'Business Connect and ', title2:'Stakeholder Engagement', description: 'Facilitating connections with key stakeholders, industry associations, and government bodies. Organizing networking events to foster collaboration and partnerships.' },
    { icon: BitoImage1, title: 'Helpline For NRI', title2:'and Biharis', description: 'with local authorities for utility connections and other essential services.' },
    { icon: BitoImage2, title: 'Bihari Voice', title2:'', description: 'Collaborating with legal experts to navigate complex legal frameworks.Providing tax advisory services to optimize fiscal strategies and reduce potential liabilities.' },
    { icon: BitoImage3, title: 'Customized Business', title2:'Solutions For Start Up', description: 'Tailoring solutions based on the specific needs of the foreign company. Assisting in establishing local partnerships and building a network within the Indian business ecosystem.' },
    { icon: BitoImage4, title: 'Human Resources', title2:'Support', description: 'Offering assistance in recruiting local talent and understanding labor laws. Providing guidance on cultural integration and workforce management.' },
    { icon: BitoImage5, title: 'Infrastructure', title2:'and Location', description: 'Identifying suitable office locations and assisting in setting up necessary infrastructure.' },
    { icon: BitoImage6, title: 'Regulatory and', title2:'Compliance Advisory', description: 'Offering insights into Indias regulatory landscape to ensure compliance with local laws and regulations. Facilitating the necessary permits and approvals required for smooth operations.' },
    { icon: BitoImage7, title: 'Feasibility Study and', title2:'Market Entry Assistance', description: 'Conducting market research to identify potential opportunities and challenges. Providing guidance on suitable entry strategies, such as joint ventures, wholly-owned subsidiaries, or partnerships.' },

  ];
  
  return (
    <Container className='py-sm-5'>
          <h2 style={{ color: '#b27f4a' }} className='text-center membership-heading'>BITO Action Points</h2>
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
  )
}

export default BitoCard;
