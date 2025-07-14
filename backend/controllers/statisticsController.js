// controllers/statisticsController.js
const {
  bookingStatistics,
  movieStatistics,
  cinemaStatistics,
  userStatistics,
  reviewStatistics
} = require('../data/statistics');

// Lấy tổng quan thống kê
const getDashboardStats = (req, res) => {
  try {
    const totalRevenue = bookingStatistics.monthly.reduce((sum, month) => sum + month.revenue, 0);
    const totalBookings = bookingStatistics.monthly.reduce((sum, month) => sum + month.bookings, 0);
    const averageRating = reviewStatistics.averageRating;
    const totalMovies = movieStatistics.length;

    const dashboardStats = {
      totalRevenue,
      totalBookings,
      averageRating,
      totalMovies,
      totalUsers: userStatistics.totalUsers,
      totalReviews: reviewStatistics.totalReviews,
      topMovies: movieStatistics.slice(0, 5).sort((a, b) => b.totalRevenue - a.totalRevenue),
      recentBookings: bookingStatistics.daily.slice(-7)
    };

    res.json({
      success: true,
      data: dashboardStats,
      message: 'Lấy dữ liệu dashboard thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy dữ liệu dashboard',
      error: error.message
    });
  }
};

// Lấy thống kê đặt vé theo thời gian
const getBookingStats = (req, res) => {
  try {
    const { period = 'daily' } = req.query;
    
    let stats;
    switch (period) {
      case 'daily':
        stats = bookingStatistics.daily;
        break;
      case 'weekly':
        stats = bookingStatistics.weekly;
        break;
      case 'monthly':
        stats = bookingStatistics.monthly;
        break;
      default:
        stats = bookingStatistics.daily;
    }

    res.json({
      success: true,
      data: stats,
      message: `Lấy thống kê đặt vé theo ${period} thành công`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê đặt vé',
      error: error.message
    });
  }
};

// Lấy thống kê phim
const getMovieStats = (req, res) => {
  try {
    const { sortBy = 'totalRevenue', limit = 10 } = req.query;
    
    let sortedMovies = [...movieStatistics];
    
    switch (sortBy) {
      case 'totalRevenue':
        sortedMovies.sort((a, b) => b.totalRevenue - a.totalRevenue);
        break;
      case 'totalBookings':
        sortedMovies.sort((a, b) => b.totalBookings - a.totalBookings);
        break;
      case 'averageRating':
        sortedMovies.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'screenings':
        sortedMovies.sort((a, b) => b.screenings - a.screenings);
        break;
      default:
        sortedMovies.sort((a, b) => b.totalRevenue - a.totalRevenue);
    }

    const limitedMovies = sortedMovies.slice(0, parseInt(limit));

    res.json({
      success: true,
      data: limitedMovies,
      message: 'Lấy thống kê phim thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê phim',
      error: error.message
    });
  }
};

// Lấy thống kê rạp chiếu
const getCinemaStats = (req, res) => {
  try {
    res.json({
      success: true,
      data: cinemaStatistics,
      message: 'Lấy thống kê rạp chiếu thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê rạp chiếu',
      error: error.message
    });
  }
};

// Lấy thống kê người dùng
const getUserStats = (req, res) => {
  try {
    res.json({
      success: true,
      data: userStatistics,
      message: 'Lấy thống kê người dùng thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê người dùng',
      error: error.message
    });
  }
};

// Lấy thống kê đánh giá
const getReviewStats = (req, res) => {
  try {
    res.json({
      success: true,
      data: reviewStatistics,
      message: 'Lấy thống kê đánh giá thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê đánh giá',
      error: error.message
    });
  }
};

// Lấy báo cáo tổng hợp
const getComprehensiveReport = (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    // Tính toán tổng hợp
    const totalRevenue = bookingStatistics.monthly.reduce((sum, month) => sum + month.revenue, 0);
    const totalBookings = bookingStatistics.monthly.reduce((sum, month) => sum + month.bookings, 0);
    const averageRevenuePerBooking = totalRevenue / totalBookings;
    
    const topPerformingMovies = movieStatistics
      .sort((a, b) => b.totalRevenue - a.totalRevenue)
      .slice(0, 5);
    
    const topPerformingCinemas = cinemaStatistics
      .sort((a, b) => b.totalRevenue - a.totalRevenue);

    const comprehensiveReport = {
      summary: {
        totalRevenue,
        totalBookings,
        averageRevenuePerBooking: Math.round(averageRevenuePerBooking),
        totalUsers: userStatistics.totalUsers,
        totalMovies: movieStatistics.length,
        averageRating: reviewStatistics.averageRating
      },
      topPerformingMovies,
      topPerformingCinemas,
      bookingTrends: bookingStatistics.monthly,
      userGrowth: userStatistics.userGrowth,
      ratingDistribution: reviewStatistics.ratingDistribution,
      generatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: comprehensiveReport,
      message: 'Lấy báo cáo tổng hợp thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy báo cáo tổng hợp',
      error: error.message
    });
  }
};

// Lấy thống kê theo khoảng thời gian tùy chỉnh
const getCustomDateRangeStats = (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp startDate và endDate'
      });
    }

    // Lọc dữ liệu theo khoảng thời gian (mô phỏng)
    const filteredDailyStats = bookingStatistics.daily.filter(day => {
      const dayDate = new Date(day.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return dayDate >= start && dayDate <= end;
    });

    const totalBookings = filteredDailyStats.reduce((sum, day) => sum + day.bookings, 0);
    const totalRevenue = filteredDailyStats.reduce((sum, day) => sum + day.revenue, 0);

    const customStats = {
      period: { startDate, endDate },
      totalBookings,
      totalRevenue,
      averageBookingsPerDay: Math.round(totalBookings / filteredDailyStats.length),
      averageRevenuePerDay: Math.round(totalRevenue / filteredDailyStats.length),
      dailyBreakdown: filteredDailyStats
    };

    res.json({
      success: true,
      data: customStats,
      message: 'Lấy thống kê theo khoảng thời gian thành công'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Lỗi server khi lấy thống kê theo khoảng thời gian',
      error: error.message
    });
  }
};

module.exports = {
  getDashboardStats,
  getBookingStats,
  getMovieStats,
  getCinemaStats,
  getUserStats,
  getReviewStats,
  getComprehensiveReport,
  getCustomDateRangeStats
}; 