# API Thống Kê - Hướng Dẫn Sử Dụng

## Tổng Quan
API thống kê cung cấp các endpoint để lấy dữ liệu báo cáo và thống kê cho hệ thống rạp chiếu phim.

## Base URL
```
http://localhost:5000/api/statistics
```

## Các Endpoint

### 1. Dashboard - Tổng Quan Thống Kê
**GET** `/dashboard`

Lấy dữ liệu tổng quan cho dashboard.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalRevenue": 262500000,
    "totalBookings": 5250,
    "averageRating": 4.3,
    "totalMovies": 10,
    "totalUsers": 2847,
    "totalReviews": 1247,
    "topMovies": [...],
    "recentBookings": [...]
  },
  "message": "Lấy dữ liệu dashboard thành công"
}
```

### 2. Thống Kê Đặt Vé
**GET** `/bookings?period=daily|weekly|monthly`

Lấy thống kê đặt vé theo thời gian.

**Parameters:**
- `period` (optional): `daily`, `weekly`, `monthly` (default: `daily`)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "date": "2024-01-01",
      "bookings": 45,
      "revenue": 2250000
    }
  ],
  "message": "Lấy thống kê đặt vé theo daily thành công"
}
```

### 3. Thống Kê Phim
**GET** `/movies?sortBy=totalRevenue&limit=10`

Lấy thống kê phim với các tùy chọn sắp xếp.

**Parameters:**
- `sortBy` (optional): `totalRevenue`, `totalBookings`, `averageRating`, `screenings` (default: `totalRevenue`)
- `limit` (optional): Số lượng phim trả về (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "title": "AVENGERS",
      "totalBookings": 523,
      "totalRevenue": 26150000,
      "averageRating": 4.8,
      "screenings": 44
    }
  ],
  "message": "Lấy thống kê phim thành công"
}
```

### 4. Thống Kê Rạp Chiếu
**GET** `/cinemas`

Lấy thống kê các rạp chiếu.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "CGV",
      "totalBookings": 1245,
      "totalRevenue": 62250000,
      "averageOccupancy": 78,
      "totalScreens": 8
    }
  ],
  "message": "Lấy thống kê rạp chiếu thành công"
}
```

### 5. Thống Kê Người Dùng
**GET** `/users`

Lấy thống kê người dùng.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalUsers": 2847,
    "activeUsers": 1893,
    "newUsersThisMonth": 234,
    "premiumUsers": 456,
    "userGrowth": [...]
  },
  "message": "Lấy thống kê người dùng thành công"
}
```

### 6. Thống Kê Đánh Giá
**GET** `/reviews`

Lấy thống kê đánh giá.

**Response:**
```json
{
  "success": true,
  "data": {
    "totalReviews": 1247,
    "averageRating": 4.3,
    "ratingDistribution": {
      "5 sao": 456,
      "4 sao": 523,
      "3 sao": 189,
      "2 sao": 56,
      "1 sao": 23
    },
    "topReviewedMovies": [...]
  },
  "message": "Lấy thống kê đánh giá thành công"
}
```

### 7. Báo Cáo Tổng Hợp
**GET** `/comprehensive?startDate=2024-01-01&endDate=2024-01-31`

Lấy báo cáo tổng hợp với đầy đủ thông tin.

**Parameters:**
- `startDate` (optional): Ngày bắt đầu (YYYY-MM-DD)
- `endDate` (optional): Ngày kết thúc (YYYY-MM-DD)

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalRevenue": 262500000,
      "totalBookings": 5250,
      "averageRevenuePerBooking": 50000,
      "totalUsers": 2847,
      "totalMovies": 10,
      "averageRating": 4.3
    },
    "topPerformingMovies": [...],
    "topPerformingCinemas": [...],
    "bookingTrends": [...],
    "userGrowth": [...],
    "ratingDistribution": {...},
    "generatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Lấy báo cáo tổng hợp thành công"
}
```

### 8. Thống Kê Theo Khoảng Thời Gian Tùy Chỉnh
**GET** `/custom-range?startDate=2024-01-01&endDate=2024-01-31`

Lấy thống kê theo khoảng thời gian tùy chỉnh.

**Parameters:**
- `startDate` (required): Ngày bắt đầu (YYYY-MM-DD)
- `endDate` (required): Ngày kết thúc (YYYY-MM-DD)

**Response:**
```json
{
  "success": true,
  "data": {
    "period": {
      "startDate": "2024-01-01",
      "endDate": "2024-01-31"
    },
    "totalBookings": 453,
    "totalRevenue": 22650000,
    "averageBookingsPerDay": 15,
    "averageRevenuePerDay": 750000,
    "dailyBreakdown": [...]
  },
  "message": "Lấy thống kê theo khoảng thời gian thành công"
}
```

### 9. Export Dữ Liệu
**GET** `/export?format=json&type=comprehensive`

Chuẩn bị xuất dữ liệu thống kê.

**Parameters:**
- `format` (optional): `json`, `pdf`, `excel` (default: `json`)
- `type` (optional): `comprehensive`, `bookings`, `movies`, `users` (default: `comprehensive`)

**Response:**
```json
{
  "success": true,
  "data": {
    "format": "json",
    "type": "comprehensive",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "message": "Dữ liệu comprehensive đã được chuẩn bị để xuất với định dạng json",
    "downloadUrl": "/api/statistics/download/comprehensive_1705312200000.json"
  },
  "message": "Chuẩn bị xuất dữ liệu thành công"
}
```

### 10. Health Check
**GET** `/health`

Kiểm tra trạng thái hoạt động của API.

**Response:**
```json
{
  "success": true,
  "message": "Statistics API đang hoạt động bình thường",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0"
}
```

## Lỗi Thường Gặp

### 400 Bad Request
```json
{
  "success": false,
  "message": "Vui lòng cung cấp startDate và endDate"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Lỗi server khi lấy dữ liệu dashboard",
  "error": "Error message details"
}
```

## Ví Dụ Sử Dụng

### JavaScript (Fetch API)
```javascript
// Lấy dashboard stats
fetch('http://localhost:5000/api/statistics/dashboard')
  .then(response => response.json())
  .then(data => {
    console.log('Dashboard data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Lấy thống kê phim sắp xếp theo doanh thu
fetch('http://localhost:5000/api/statistics/movies?sortBy=totalRevenue&limit=5')
  .then(response => response.json())
  .then(data => {
    console.log('Top movies:', data);
  });
```

### cURL
```bash
# Lấy dashboard
curl http://localhost:5000/api/statistics/dashboard

# Lấy thống kê đặt vé theo tuần
curl http://localhost:5000/api/statistics/bookings?period=weekly

# Lấy báo cáo tổng hợp
curl "http://localhost:5000/api/statistics/comprehensive?startDate=2024-01-01&endDate=2024-01-31"
```

## Ghi Chú
- Tất cả các endpoint đều trả về JSON
- Timestamp được trả về theo định dạng ISO 8601
- Số tiền được tính bằng VND
- Dữ liệu hiện tại là dữ liệu mẫu, trong thực tế sẽ được lấy từ database 