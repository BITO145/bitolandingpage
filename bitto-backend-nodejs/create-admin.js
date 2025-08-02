require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./src/models/Admin');

async function createAdminUser() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@bitoworld.com' });
    
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists!');
      console.log('Email: admin@bitoworld.com');
      console.log('Password: admin123');
      await mongoose.disconnect();
      return;
    }
    
    // Create admin user
    const adminUser = new Admin({
      name: 'Admin',
      email: 'admin@bitoworld.com',
      password: 'admin123',
      role: 'admin'
    });
    
    await adminUser.save();
    console.log('✅ Admin user created successfully!');
    console.log('Email: admin@bitoworld.com');
    console.log('Password: admin123');
    console.log('\n⚠️  Please change the password after first login!');
    
    await mongoose.disconnect();
    console.log('✅ Connection closed');
    
  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  }
}

createAdminUser(); 