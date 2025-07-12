// routes/statisticsRoutes.js
const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getBookingStats,
  getMovieStats,
  getCinemaStats,
  getUserStats,
  getReviewStats,
  getComprehensiveReport,
  getCustomDateRangeStats
} = require('../controllers/statisticsController');

// Middleware để log các request thống kê
const logStatisticsRequest = (req, res, next) => {
  console.log(`📊 [${new Date().toISOString()}] Thống kê API được gọi: ${req.method} ${req.path}`);
  next();
};

// Áp dụng middleware cho tất cả routes
router.use(logStatisticsRequest);

// Dashboard - Tổng quan thống kê
router.get('/dashboard', getDashboardStats);

// Thống kê đặt vé theo thời gian
router.get('/bookings', getBookingStats);

// Thống kê phim
router.get('/movies', getMovieStats);

// Thống kê rạp chiếu
router.get('/cinemas', getCinemaStats);

// Thống kê người dùng
router.get('/users', getUserStats);

// Thống kê đánh giá
router.get('/reviews', getReviewStats);

// Báo cáo tổng hợp
router.get('/comprehensive', getComprehensiveReport);

// Thống kê theo khoảng thời gian tùy chỉnh
router.get('/custom-range', getCustomDateRangeStats);

// Export thống kê (có thể mở rộng để xuất PDF/Excel)
router.get('/export', (req, res) => {
  try {
    const { format = 'json', type = 'comprehensive' } = req.query;
    
    // Mô phỏng export (trong thực tế sẽ tạo file PDF/Excel)
    const exportData = {
      format,
      type,
      timestamp: new Date().toISOString(),
      message: `Dữ liệu ${type} đã được chuẩn bị để xuất với định dạng ${format}`,
      downloadUrl: `/api/statistics/download/${type}_${Date.now()}.${format}`
    };

    res.json({
      success: true,
      data: exportData,
      message: 'Chuẩn bị xuất dữ liệu thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi khi chuẩn bị xuất dữ liệu',
      error: error.message
    });
  }
});

// Health check cho API thống kê
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Statistics API đang hoạt động bình thường',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

module.exports = router; 