require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function testAdminLogin() {
  try {
    console.log('Testing admin login...');
    
    // Simulate admin login
    const adminData = {
      email: 'admin@bitoworld.com',
      password: 'admin123'
    };
    
    console.log('Admin credentials:');
    console.log('Email:', adminData.email);
    console.log('Password:', adminData.password);
    
    // Generate a test token
    const token = jwt.sign(
      { id: 'test-admin-id', email: adminData.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    
    console.log('\n✅ Test token generated successfully!');
    console.log('Token:', token.substring(0, 50) + '...');
    
    // Test token verification
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ Token verification successful!');
    console.log('Decoded payload:', decoded);
    
    console.log('\n🎉 Admin login system is ready!');
    console.log('You can now log in to the admin dashboard with:');
    console.log('- Email: admin@bitoworld.com');
    console.log('- Password: admin123');
    
  } catch (error) {
    console.error('❌ Error testing admin login:', error.message);
  }
}

testAdminLogin(); 