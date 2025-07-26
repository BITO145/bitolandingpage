const mongoose = require('mongoose');

const cmsHomeSchema = new mongoose.Schema({
  type: { type: String, default: 'home', unique: true },
  // Hero Section
  hero_title: String,
  hero_subtitle: String,
  hero_description: String,
  hero_image: String,
  // Vision & Mission
  vision_title: String,
  vision_text: String,
  mission_title: String,
  mission_text: String,
  // Objectives (array of {title, text})
  objectives: [
    {
      title: String,
      text: String
    }
  ],
  // Roadmap (array of {year, milestones: [text]})
  roadmap: [
    {
      years: String,
      milestones: [String]
    }
  ],
  // BITO Bodies (array of {title, description})
  bodies: [
    {
      title: String,
      description: String
    }
  ],
  // Initiatives (array of {title, description})
  initiatives: [
    {
      title: String,
      description: String
    }
  ],
  // Global Chapters (array of {title, description})
  global_chapters: [
    {
      title: String,
      description: String
    }
  ],
  // Membership Section
  membership_title: String,
  membership_text: String,
  membership_image: String,
  // Partners (array of {name, logo})
  partners: [
    {
      name: String,
      logo: String
    }
  ],
  // Footer
  footer_welcome: String,
  footer_address: String,
  footer_email: String,
  footer_links: [
    {
      name: String,
      url: String
    }
  ],
  footer_newsletter_text: String,
  footer_social_links: [
    {
      icon: String,
      url: String
    }
  ],
  footer_copyright: String,
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CmsHome', cmsHomeSchema); 