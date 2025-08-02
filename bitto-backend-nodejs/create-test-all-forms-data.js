require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./src/models/Contact');
const Appointment = require('./src/models/Appointment');
const Membership = require('./src/models/Membership');

async function createTestAllFormsData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Create test contact submissions from ContactUs page
    const testContacts = [
      {
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        message: 'Subject: Business Inquiry\nPhone: +919876543210\nI would like to discuss business opportunities with BITO.',
        status: 'unread'
      },
      {
        name: 'Priya Patel',
        email: 'priya@example.com',
        message: 'Subject: Partnership Discussion\nPhone: +919876543211\nInterested in forming a partnership with your organization.',
        status: 'read'
      },
      {
        name: 'Amit Kumar',
        email: 'amit@example.com',
        message: 'Subject: General Inquiry\nPhone: +919876543212\nLooking for information about your services.',
        status: 'replied'
      }
    ];

    // Create test appointments from Appointment page
    const testAppointments = [
      {
        name: 'Deepak Singh',
        email: 'deepak@example.com',
        phone: '+919876543213',
        selectedLeader: '1',
        leaderName: 'Shri Chirag Paswan',
        leaderRole: 'Chairman',
        date: new Date('2024-01-20'),
        time: '10:00',
        purpose: 'Business Partnership Discussion',
        message: 'Want to discuss potential business partnership.',
        status: 'pending'
      },
      {
        name: 'Neha Verma',
        email: 'neha@example.com',
        phone: '+919876543214',
        selectedLeader: '2',
        leaderName: 'Pravin Kumar',
        leaderRole: 'President',
        date: new Date('2024-01-21'),
        time: '14:00',
        purpose: 'Investment Opportunities',
        customPurpose: 'Startup funding discussion',
        message: 'Seeking investment for my startup.',
        status: 'confirmed'
      },
      {
        name: 'Vikram Malhotra',
        email: 'vikram@example.com',
        phone: '+919876543215',
        selectedLeader: '3',
        leaderName: 'Amaresh Mishra',
        leaderRole: 'Secretary-General',
        date: new Date('2024-01-22'),
        time: '11:00',
        purpose: 'Strategic Planning',
        message: 'Need guidance on strategic planning.',
        status: 'completed'
      }
    ];

    // Create test membership applications from Membership page
    const testMemberships = [
      {
        name: 'Suresh Kumar',
        email: 'suresh@example.com',
        phone: '+919876543216',
        organization: 'Tech Solutions Pvt Ltd',
        membershipType: 'corporate',
        message: 'Country: IN, State: BR, City: Patna 800001, Gender: Male, Qualification: MBA, Industry: Technology',
        status: 'pending'
      },
      {
        name: 'Anjali Singh',
        email: 'anjali@example.com',
        phone: '+919876543217',
        organization: 'Delhi University',
        membershipType: 'student',
        message: 'Country: IN, State: DL, City: Delhi 110001, Gender: Female, Qualification: B.Tech, Industry: Education',
        status: 'approved'
      },
      {
        name: 'Rajesh Gupta',
        email: 'rajesh@example.com',
        phone: '+919876543218',
        organization: 'Freelance Consultant',
        membershipType: 'individual',
        message: 'Country: IN, State: MH, City: Mumbai 400001, Gender: Male, Qualification: CA, Industry: Consulting',
        status: 'completed'
      },
      {
        name: 'Meera Patel',
        email: 'meera@example.com',
        phone: '+919876543219',
        organization: 'Bihar Chamber of Commerce',
        membershipType: 'associate',
        message: 'Country: IN, State: BR, City: Patna 800002, Gender: Female, Qualification: LLB, Industry: Legal',
        status: 'rejected'
      }
    ];

    // Clear existing test data
    await Contact.deleteMany({ 
      email: { 
        $in: ['rahul@example.com', 'priya@example.com', 'amit@example.com'] 
      } 
    });
    await Appointment.deleteMany({ 
      email: { 
        $in: ['deepak@example.com', 'neha@example.com', 'vikram@example.com'] 
      } 
    });
    await Membership.deleteMany({ 
      email: { 
        $in: ['suresh@example.com', 'anjali@example.com', 'rajesh@example.com', 'meera@example.com'] 
      } 
    });

    // Insert test data
    const contacts = await Contact.insertMany(testContacts);
    console.log(`✅ Created ${contacts.length} test contact submissions`);

    const appointments = await Appointment.insertMany(testAppointments);
    console.log(`✅ Created ${appointments.length} test appointments`);

    const memberships = await Membership.insertMany(testMemberships);
    console.log(`✅ Created ${memberships.length} test membership applications`);

    console.log('\n🎉 All test data created successfully!');
    console.log('You can now see all form responses in the admin dashboard.');
    console.log('Go to: http://localhost:5173/admin-dashboard');
    console.log('Login with: admin@bitoworld.com / admin123');
    console.log('\n📊 Dashboard will show:');
    console.log('- 3 Contact form submissions (from ContactUs page)');
    console.log('- 3 Appointment requests (from Appointment page)');
    console.log('- 4 Membership applications (from Membership page)');

    await mongoose.disconnect();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ Error creating test data:', error.message);
    process.exit(1);
  }
}

createTestAllFormsData(); 