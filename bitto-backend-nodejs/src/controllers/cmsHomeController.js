const CmsHome = require('../models/Cms');

// Get homepage content
const getHome = async (req, res) => {
  try {
    let homeContent = await CmsHome.findOne({ type: 'home' });
    
    // If no content exists, create default content
    if (!homeContent) {
      homeContent = new CmsHome({
        type: 'home',
        hero_title: 'Transform Bihar Together, We Can',
        hero_subtitle: 'Fostering Entrepreneurship, Innovation, and Global Connections',
        hero_description: 'The Bihar International Trade Organization (BITO) is a key force for progress and unity for people, both in India and worldwide. Through a series of well-structured initiatives, BITO is dedicated to building a vibrant, cohesive, and prosperous community that transcends borders and generations.',
        vision_title: 'Vision',
        vision_text: 'An Atmanirbhar Bihar—A Glorious Bihar Asmita—A Prosperous, Proud, And Cohesive Bihari Community Leading Globally.',
        mission_title: 'Mission',
        mission_text: 'To spearhead a revolution in sustainable development, drive transformative change across bihar and beyond, and create a lasting legacy of pride, progress, and enduring strength for future generations.',
        objectives: [
          {
            title: 'Economic Empowerment',
            text: 'Economic Empowerment'
          },
          {
            title: 'Cultural Preservation',
            text: 'Cultural Preservation & Promotion'
          },
          {
            title: 'Global Collaboration',
            text: 'Global Collaboration'
          },
          {
            title: 'Inclusitivity',
            text: 'Inclusitivity & Sustainability'
          }
        ],
        roadmap: [
          {
            years: 'Years 1-2 | Foundation & Growth',
            milestones: [
              'Global Chapter Expansion Establish 25 new international chapters.',
              'Startups Incubated Launch 108 new startups in agriculture and FMCG.',
              'Launch BITO Mart Expand nationwide to feature Bihari startup products.',
              'Finalize Bihar University Complete the blueprint and secure partnerships.',
              'Hospital & Medical College Begin construction to enhance healthcare infrastructure.'
            ]
          },
          {
            years: 'Years 3-4 | Acceleration',
            milestones: [
              '100,000 Jobs Created Through industrial growth, startups, and export initiatives.',
              'Export Expansion Increase exports to 25 new countries.',
              'Tourism Development Develop Nalanda and Vaishali as top global spiritual destinations.'
            ]
          },
          {
            years: 'Year 5 | Consolidation & Expansion',
            milestones: [
              'Top 5 Tourism Destination Establish Bihar as a premier spiritual and cultural destination.',
              'Global BITO Summit Host to showcase achievements and attract international investments.',
              'Establish Export Hub Create a hub for managing international trade of Bihari products.',
              'Complete Bihar University Construction Finalize and fully operationalize the university.',
              'Hospital Construction Complete the new hospital to enhance regional healthcare services.'
            ]
          }
        ],
        bodies: [
          {
            title: 'Startup & Incubation',
            description: 'BITO Startup & Incubation Centre (BSIC)'
          },
          {
            title: 'Asmita Foundation',
            description: 'BITO Bihar Asmita Foundation'
          },
          {
            title: 'Industries Association',
            description: 'BITO Industries Association (BIA)'
          }
        ],
        initiatives: [
          {
            title: 'Bihar University',
            description: 'Bihar University'
          },
          {
            title: 'Business Connect',
            description: 'Business Connect & Collaboration'
          },
          {
            title: 'Global Bihar Heritage',
            description: 'Global Bihar Heritage Initiative'
          },
          {
            title: 'Hospital',
            description: 'BITO Multi Specialty Hospital'
          }
        ],
        global_chapters: [
          {
            title: 'Our Global Chapters',
            description: 'Our Global Chapters'
          }
        ],
        membership_title: 'Membership',
        membership_text: 'Membership in BITO will be open to individuals, entrepreneurs, industrialists, professionals, and organizations having a connection to Bihar and sharing the vision and values of the organization.',
        partners: [
          {
            name: 'Our Partners',
            logo: ''
          }
        ],
        footer_welcome: 'Welcome to BITO, your partner in discovering the vibrant history and promising future of Bihar. Our organization is dedicated to preserving Bihar\'s cultural heritage while simultaneously creating new opportunities for education, employment, and economic growth.',
        footer_address: '173, 7th Floor, Tower A, Corenthum, Sector 62, Opp. Electronic City Metro Station, Noida-201309 Phone: 0120-4914498',
        footer_email: 'office@bitoworld.in',
        footer_links: [
          { name: 'Home', url: '/' },
          { name: 'Our Work', url: '/our-work' },
          { name: 'BSIC', url: '/bsic' },
          { name: 'Events', url: '/events' },
          { name: 'Job', url: '/job' },
          { name: 'Contact', url: '/contact' },
          { name: 'Membership', url: '/membership' }
        ],
        footer_newsletter_text: 'Enter your Email',
        footer_social_links: [
          { icon: 'facebook', url: '#' },
          { icon: 'twitter', url: '#' },
          { icon: 'linkedin', url: '#' },
          { icon: 'instagram', url: '#' },
          { icon: 'youtube', url: '#' }
        ],
        footer_copyright: 'Copyright © 2025 Bihar International Trade Organization (BITO)'
      });
      await homeContent.save();
    }
    
    res.json(homeContent);
  } catch (error) {
    console.error('Home CMS Error:', error);
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

// Update homepage content (admin only)
const updateHome = async (req, res) => {
  try {
    const homeContent = await CmsHome.findOneAndUpdate(
      { type: 'home' },
      { ...req.body, updatedAt: new Date() },
      { new: true, upsert: true }
    );
    
    res.json(homeContent);
  } catch (error) {
    console.error('Update Home CMS Error:', error);
    res.status(500).json({
      status: false,
      message: 'Internal server error',
      data: []
    });
  }
};

module.exports = {
  getHome,
  updateHome
}; 