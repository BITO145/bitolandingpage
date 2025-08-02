const https = require('https');

const testBackend = async () => {
  const baseUrl = 'https://bitolandingpage-iyhj.vercel.app';
  
  console.log('🔍 Testing Backend Deployment...\n');
  
  const endpoints = [
    '/',
    '/api',
    '/api/contact/submit',
    '/api/appointment/submit',
    '/api/membership/submit'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const response = await new Promise((resolve, reject) => {
        const req = https.request(`${baseUrl}${endpoint}`, {
          method: 'GET',
          headers: {
            'User-Agent': 'Backend-Test/1.0'
          }
        }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve({ status: res.statusCode, data }));
        });
        
        req.on('error', reject);
        req.setTimeout(5000, () => {
          req.destroy();
          reject(new Error('Timeout'));
        });
        
        req.end();
      });
      
      console.log(`✅ ${endpoint}: ${response.status} ${response.status === 200 ? 'OK' : 'ERROR'}`);
      if (response.status !== 200) {
        console.log(`   Response: ${response.data.substring(0, 100)}...`);
      }
    } catch (error) {
      console.log(`❌ ${endpoint}: ERROR - ${error.message}`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log('- If all endpoints return 404, the backend is not deployed correctly');
  console.log('- If some endpoints work, there might be a routing issue');
  console.log('- Check Vercel dashboard for deployment status');
};

testBackend(); 