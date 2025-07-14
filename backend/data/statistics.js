// Dữ liệu thống kê mẫu
const bookingStatistics = {
  daily: [
    { date: '2024-01-01', bookings: 45, revenue: 2250000 },
    { date: '2024-01-02', bookings: 52, revenue: 2600000 },
    { date: '2024-01-03', bookings: 38, revenue: 1900000 },
    { date: '2024-01-04', bookings: 61, revenue: 3050000 },
    { date: '2024-01-05', bookings: 73, revenue: 3650000 },
    { date: '2024-01-06', bookings: 89, revenue: 4450000 },
    { date: '2024-01-07', bookings: 95, revenue: 4750000 }
  ],
  weekly: [
    { week: 'Tuần 1', bookings: 320, revenue: 16000000 },
    { week: 'Tuần 2', bookings: 345, revenue: 17250000 },
    { week: 'Tuần 3', bookings: 298, revenue: 14900000 },
    { week: 'Tuần 4', bookings: 412, revenue: 20600000 }
  ],
  monthly: [
    { month: 'Tháng 1', bookings: 1200, revenue: 60000000 },
    { month: 'Tháng 2', bookings: 1350, revenue: 67500000 },
    { month: 'Tháng 3', bookings: 1420, revenue: 71000000 },
    { month: 'Tháng 4', bookings: 1280, revenue: 64000000 }
  ]
};

const movieStatistics = [
  {
    title: 'HAI MƯƠI',
    totalBookings: 156,
    totalRevenue: 7800000,
    averageRating: 4.2,
    screenings: 24
  },
  {
    title: 'ĐỊA ĐẠO',
    totalBookings: 203,
    totalRevenue: 10150000,
    averageRating: 4.5,
    screenings: 28
  },
  {
    title: 'GIAM CẦM QUỶ DỮ',
    totalBookings: 89,
    totalRevenue: 4450000,
    averageRating: 3.8,
    screenings: 16
  },
  {
    title: 'CHÌA KHÓA TRĂM TỶ',
    totalBookings: 267,
    totalRevenue: 13350000,
    averageRating: 4.7,
    screenings: 32
  },
  {
    title: 'NGƯỜI NHỆN',
    totalBookings: 445,
    totalRevenue: 22250000,
    averageRating: 4.6,
    screenings: 40
  },
  {
    title: 'BATMAN',
    totalBookings: 378,
    totalRevenue: 18900000,
    averageRating: 4.4,
    screenings: 36
  },
  {
    title: 'AVENGERS',
    totalBookings: 523,
    totalRevenue: 26150000,
    averageRating: 4.8,
    screenings: 44
  },
  {
    title: 'NGƯỜI KIẾN',
    totalBookings: 234,
    totalRevenue: 11700000,
    averageRating: 4.1,
    screenings: 20
  },
  {
    title: 'FAST & FURIOUS',
    totalBookings: 312,
    totalRevenue: 15600000,
    averageRating: 4.3,
    screenings: 28
  },
  {
    title: 'HARRY POTTER',
    totalBookings: 189,
    totalRevenue: 9450000,
    averageRating: 4.0,
    screenings: 24
  }
];

const cinemaStatistics = [
  {
    name: 'CGV',
    totalBookings: 1245,
    totalRevenue: 62250000,
    averageOccupancy: 78,
    totalScreens: 8
  },
  {
    name: 'Galaxy',
    totalBookings: 987,
    totalRevenue: 49350000,
    averageOccupancy: 72,
    totalScreens: 6
  }
];

const userStatistics = {
  totalUsers: 2847,
  activeUsers: 1893,
  newUsersThisMonth: 234,
  premiumUsers: 456,
  userGrowth: [
    { month: 'Tháng 1', newUsers: 180 },
    { month: 'Tháng 2', newUsers: 195 },
    { month: 'Tháng 3', newUsers: 234 },
    { month: 'Tháng 4', newUsers: 267 }
  ]
};

const reviewStatistics = {
  totalReviews: 1247,
  averageRating: 4.3,
  ratingDistribution: {
    '5 sao': 456,
    '4 sao': 523,
    '3 sao': 189,
    '2 sao': 56,
    '1 sao': 23
  },
  topReviewedMovies: [
    { title: 'AVENGERS', reviews: 89, averageRating: 4.8 },
    { title: 'CHÌA KHÓA TRĂM TỶ', reviews: 76, averageRating: 4.7 },
    { title: 'NGƯỜI NHỆN', reviews: 67, averageRating: 4.6 },
    { title: 'ĐỊA ĐẠO', reviews: 54, averageRating: 4.5 },
    { title: 'BATMAN', reviews: 45, averageRating: 4.4 }
  ]
};

module.exports = {
  bookingStatistics,
  movieStatistics,
  cinemaStatistics,
  userStatistics,
  reviewStatistics
}; 