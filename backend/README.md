# Backend API - Hệ Thống Rạp Chiếu Phim

## Tổng Quan
Backend API cho hệ thống rạp chiếu phim với các chức năng chính:
- Quản lý lịch chiếu phim
- Đánh giá phim
- Thống kê và báo cáo
- Chat hỗ trợ

## Cài Đặt

### Yêu Cầu Hệ Thống
- Node.js (version 14 trở lên)
- npm hoặc yarn

### Cài Đặt Dependencies
```bash
cd backend
npm install
```

### Chạy Server
```bash
# Chạy production
npm start

# Chạy development với nodemon
npm run dev
```

Server sẽ chạy tại: `http://localhost:5000`

## Cấu Trúc Project

```
backend/
├── controllers/
│   ├── chatController.js
│   └── statisticsController.js
├── data/
│   ├── messages.json
│   ├── schedule.js
│   └── statistics.js
├── routes/
│   ├── chatRoute.js
│   ├── reviews.js
│   ├── scheduleRoutes.js
│   └── statisticsRoutes.js
├── server.js
├── test-statistics.js
├── STATISTICS_API.md
└── README.md
```

## API Endpoints

### 1. Lịch Chiếu Phim
- **GET** `/api/schedule` - Lấy danh sách lịch chiếu
- **POST** `/api/schedule` - Tạo lịch chiếu mới

### 2. Đánh Giá Phim
- **POST** `/api/reviews` - Gửi đánh giá phim

### 3. Chat Hỗ Trợ
- **POST** `/api/chat` - Gửi tin nhắn chat

### 4. Thống Kê (Mới)
- **GET** `/api/statistics/dashboard` - Dashboard tổng quan
- **GET** `/api/statistics/bookings` - Thống kê đặt vé
- **GET** `/api/statistics/movies` - Thống kê phim
- **GET** `/api/statistics/cinemas` - Thống kê rạp chiếu
- **GET** `/api/statistics/users` - Thống kê người dùng
- **GET** `/api/statistics/reviews` - Thống kê đánh giá
- **GET** `/api/statistics/comprehensive` - Báo cáo tổng hợp
- **GET** `/api/statistics/custom-range` - Thống kê theo thời gian tùy chỉnh
- **GET** `/api/statistics/export` - Xuất dữ liệu
- **GET** `/api/statistics/health` - Health check

## Testing

### Test API Thống Kê
```bash
# Cài đặt node-fetch (nếu chưa có)
npm install node-fetch@2

# Chạy test
npm test
```

### Test Thủ Công
```bash
# Health check
curl http://localhost:5000/api/statistics/health

# Dashboard
curl http://localhost:5000/api/statistics/dashboard

# Thống kê phim
curl http://localhost:5000/api/statistics/movies?sortBy=totalRevenue&limit=5
```

## Tính Năng Thống Kê

### 1. Dashboard Tổng Quan
- Tổng doanh thu
- Tổng số đặt vé
- Đánh giá trung bình
- Số lượng phim, người dùng, đánh giá
- Top phim doanh thu cao
- Dữ liệu đặt vé gần đây

### 2. Thống Kê Đặt Vé
- Theo ngày, tuần, tháng
- Số lượng đặt vé và doanh thu
- Xu hướng theo thời gian

### 3. Thống Kê Phim
- Sắp xếp theo: doanh thu, số đặt vé, đánh giá, số suất chiếu
- Giới hạn số lượng kết quả
- Thông tin chi tiết từng phim

### 4. Thống Kê Rạp Chiếu
- Hiệu suất từng rạp
- Tỷ lệ lấp đầy trung bình
- Số lượng màn hình

### 5. Thống Kê Người Dùng
- Tổng số người dùng
- Người dùng hoạt động
- Tăng trưởng người dùng
- Người dùng premium

### 6. Thống Kê Đánh Giá
- Phân bố đánh giá (1-5 sao)
- Đánh giá trung bình
- Phim được đánh giá nhiều nhất

### 7. Báo Cáo Tổng Hợp
- Tóm tắt toàn bộ hệ thống
- Top phim và rạp chiếu hiệu suất cao
- Xu hướng đặt vé và tăng trưởng người dùng
- Phân bố đánh giá

### 8. Thống Kê Theo Thời Gian Tùy Chỉnh
- Chọn khoảng thời gian cụ thể
- Thống kê chi tiết theo ngày
- Trung bình đặt vé và doanh thu

## Dữ Liệu Mẫu

Hệ thống sử dụng dữ liệu mẫu trong file `data/statistics.js`:
- 10 phim với thông tin chi tiết
- 2 rạp chiếu (CGV, Galaxy)
- Dữ liệu đặt vé 7 ngày gần nhất
- Thống kê người dùng và đánh giá

## Lưu Ý

1. **Dữ liệu mẫu**: Hiện tại sử dụng dữ liệu mẫu, trong thực tế sẽ kết nối database
2. **CORS**: Đã cấu hình CORS để frontend có thể gọi API
3. **Error Handling**: Tất cả API đều có xử lý lỗi
4. **Logging**: API thống kê có logging để theo dõi

## Mở Rộng

### Thêm Database
1. Cài đặt MongoDB/MySQL
2. Tạo models cho dữ liệu
3. Cập nhật controllers để sử dụng database

### Thêm Authentication
1. Cài đặt JWT
2. Tạo middleware auth
3. Bảo vệ các API nhạy cảm

### Thêm Export PDF/Excel
1. Cài đặt thư viện PDF/Excel
2. Cập nhật endpoint export
3. Tạo templates báo cáo

## Liên Hệ

Nếu có vấn đề hoặc cần hỗ trợ, vui lòng tạo issue hoặc liên hệ team phát triển. 