// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviews');
const scheduleRoutes = require('./routes/scheduleRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');

const app = express();
const PORT = 5000;

// ✅ cấu hình CORS cụ thể cho frontend Vite
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  credentials: true
};

app.use(cors(corsOptions));        // ⚠️ CHỈ dùng 1 lần duy nhất
app.use(bodyParser.json());        // hoặc thay bằng: app.use(express.json())

// ✅ Đăng ký các routes
app.use("/api/auth", authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/statistics', statisticsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
