require('dotenv').config();
const mongoose = require('mongoose');
const Membership = require('./src/models/Membership');

async function createTestMembershipData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Create test membership applications
    const testMemberships = [
      {
        name: 'Rajesh Kumar',
        email: 'rajesh@example.com',
        phone: '+919876543210',
        organization: 'Tech Solutions Ltd',
        membershipType: 'corporate',
        message: 'Interested in corporate membership for our company.',
        status: 'pending'
      },
      {
        name: 'Priya Singh',
        email: 'priya@example.com',
        phone: '+919876543211',
        organization: 'Delhi University',
        membershipType: 'student',
        message: 'Student looking to join BITO for networking opportunities.',
        status: 'approved'
      },
      {
        name: 'Amit Patel',
        email: 'amit@example.com',
        phone: '+919876543212',
        organization: 'Freelance Consultant',
        membershipType: 'individual',
        message: 'Individual membership for professional development.',
        status: 'completed'
      },
      {
        name: 'Sunita Verma',
        email: 'sunita@example.com',
        phone: '+919876543213',
        organization: 'Bihar Chamber of Commerce',
        membershipType: 'associate',
        message: 'Associate membership for chamber collaboration.',
        status: 'rejected'
      }
    ];

    // Clear existing test data
    await Membership.deleteMany({ 
      email: { 
        $in: ['rajesh@example.com', 'priya@example.com', 'amit@example.com', 'sunita@example.com'] 
      } 
    });

    // Insert test memberships
    const memberships = await Membership.insertMany(testMemberships);
    console.log(`✅ Created ${memberships.length} test membership applications`);

    console.log('\n🎉 Test membership data created successfully!');
    console.log('You can now see membership applications in the admin dashboard.');
    console.log('Go to: http://localhost:5173/admin-dashboard');
    console.log('Login with: admin@bitoworld.com / admin123');

    await mongoose.disconnect();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ Error creating test membership data:', error.message);
    process.exit(1);
  }
}

createTestMembershipData(); 