// test-statistics.js
const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:5000/api/statistics';

// Hàm test API
async function testAPI(endpoint, description) {
  try {
    console.log(`\n🧪 Testing: ${description}`);
    console.log(`📍 Endpoint: ${BASE_URL}${endpoint}`);
    
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Success:', data.message);
      console.log('📊 Data preview:', JSON.stringify(data.data, null, 2).substring(0, 200) + '...');
    } else {
      console.log('❌ Error:', data.message);
    }
  } catch (error) {
    console.log('❌ Network Error:', error.message);
  }
}

// Chạy các test
async function runTests() {
  console.log('🚀 Bắt đầu test API thống kê...\n');
  
  // Test health check
  await testAPI('/health', 'Health Check');
  
  // Test dashboard
  await testAPI('/dashboard', 'Dashboard Stats');
  
  // Test booking stats
  await testAPI('/bookings', 'Booking Stats (Daily)');
  await testAPI('/bookings?period=weekly', 'Booking Stats (Weekly)');
  await testAPI('/bookings?period=monthly', 'Booking Stats (Monthly)');
  
  // Test movie stats
  await testAPI('/movies', 'Movie Stats (Default)');
  await testAPI('/movies?sortBy=averageRating&limit=5', 'Movie Stats (Top Rated)');
  await testAPI('/movies?sortBy=totalBookings&limit=3', 'Movie Stats (Most Booked)');
  
  // Test cinema stats
  await testAPI('/cinemas', 'Cinema Stats');
  
  // Test user stats
  await testAPI('/users', 'User Stats');
  
  // Test review stats
  await testAPI('/reviews', 'Review Stats');
  
  // Test comprehensive report
  await testAPI('/comprehensive', 'Comprehensive Report');
  
  // Test custom date range
  await testAPI('/custom-range?startDate=2024-01-01&endDate=2024-01-07', 'Custom Date Range');
  
  // Test export
  await testAPI('/export?format=json&type=comprehensive', 'Export Data');
  
  console.log('\n🎉 Hoàn thành test API thống kê!');
}

// Chạy test nếu file được thực thi trực tiếp
if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { testAPI, runTests }; 