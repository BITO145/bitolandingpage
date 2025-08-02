require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./src/models/Contact');
const Appointment = require('./src/models/Appointment');

async function createTestData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Create test contact submissions
    const testContacts = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I would like to learn more about your services. Please contact me.',
        status: 'unread'
      },
      {
        name: 'Sarah Smith',
        email: 'sarah@example.com',
        message: 'Great initiative! I want to join your organization.',
        status: 'read'
      },
      {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        message: 'Interested in partnership opportunities. Let\'s discuss.',
        status: 'replied'
      }
    ];

    // Create test appointments
    const testAppointments = [
      {
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '+1234567890',
        selectedLeader: 'leader1',
        leaderName: 'Dr. Amresh Kumar',
        leaderRole: 'Founder & CEO',
        date: new Date('2024-01-15'),
        time: '10:00',
        purpose: 'Business Discussion',
        message: 'I want to discuss potential collaboration.',
        status: 'pending'
      },
      {
        name: 'Bob Wilson',
        email: 'bob@example.com',
        phone: '+1987654321',
        selectedLeader: 'leader2',
        leaderName: 'Anil Pratham',
        leaderRole: 'Director',
        date: new Date('2024-01-16'),
        time: '14:00',
        purpose: 'Mentorship',
        customPurpose: 'Career guidance session',
        message: 'Looking for career advice in technology sector.',
        status: 'confirmed'
      },
      {
        name: 'Carol Davis',
        email: 'carol@example.com',
        phone: '+1122334455',
        selectedLeader: 'leader3',
        leaderName: 'Ashish Mishra',
        leaderRole: 'Advisor',
        date: new Date('2024-01-17'),
        time: '11:00',
        purpose: 'Investment Discussion',
        message: 'Interested in investment opportunities.',
        status: 'completed'
      }
    ];

    // Clear existing test data
    await Contact.deleteMany({ email: { $in: ['john@example.com', 'sarah@example.com', 'mike@example.com'] } });
    await Appointment.deleteMany({ email: { $in: ['alice@example.com', 'bob@example.com', 'carol@example.com'] } });

    // Insert test contacts
    const contacts = await Contact.insertMany(testContacts);
    console.log(`✅ Created ${contacts.length} test contact submissions`);

    // Insert test appointments
    const appointments = await Appointment.insertMany(testAppointments);
    console.log(`✅ Created ${appointments.length} test appointments`);

    console.log('\n🎉 Test data created successfully!');
    console.log('You can now see the dashboard with sample data.');
    console.log('Go to: http://localhost:5173/admin-dashboard');
    console.log('Login with: admin@bitoworld.com / admin123');

    await mongoose.disconnect();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ Error creating test data:', error.message);
    process.exit(1);
  }
}

createTestData(); 