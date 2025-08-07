// Test script for debugging the portfolio API
const fetch = require('node-fetch');

const BACKEND_URL = 'https://portfolio-site-dis6.onrender.com';

async function testHealth() {
  console.log('🔍 Testing health endpoint...');
  try {
    const response = await fetch(`${BACKEND_URL}/api/health`);
    const data = await response.json();
    console.log('✅ Health check response:', data);
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
  }
}

async function testContactForm() {
  console.log('\n📧 Testing contact form endpoint...');
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from the debugging script.'
    };
    
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const data = await response.json();
    console.log('✅ Contact form response:', data);
    console.log('Response status:', response.status);
  } catch (error) {
    console.error('❌ Contact form test failed:', error.message);
  }
}

async function testContactTest() {
  console.log('\n🧪 Testing contact test endpoint...');
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message'
    };
    
    const response = await fetch(`${BACKEND_URL}/api/contact-test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    const data = await response.json();
    console.log('✅ Contact test response:', data);
  } catch (error) {
    console.error('❌ Contact test failed:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting API tests...\n');
  
  await testHealth();
  await testContactTest();
  await testContactForm();
  
  console.log('\n✨ Tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}

module.exports = { testHealth, testContactForm, testContactTest }; 