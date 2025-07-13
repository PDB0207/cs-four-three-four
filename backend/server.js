// // server.js
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const reviewRoutes = require('./routes/reviews');
// const scheduleRoutes = require('./routes/scheduleRoutes');

// const app = express();
// const PORT = 5000;

// // app.use(cors());

// const corsOptions = {
//   origin: 'http://localhost:5173', // frontend React Vite chạy tại đây
//   methods: 'GET,POST',
//   credentials: true
// };

// app.use(cors(corsOptions));

// app.use(bodyParser.json());

// app.use('/api/reviews', reviewRoutes);
// app.use('/api/schedule', scheduleRoutes);

// app.listen(PORT, () => {
//   console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
// });


// server.js
const express = require('express');
const cors = require('cors'); // ✅ chỉ khai báo 1 lần ở đây
const bodyParser = require('body-parser');

const reviewRoutes = require('./routes/reviews');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
const PORT = 5000;

// ✅ cấu hình CORS cụ thể
const corsOptions = {
  origin: 'http://localhost:5173', // frontend React Vite chạy tại đây
  methods: 'GET,POST',
  credentials: true
};

app.use(cors(corsOptions)); // ✅ dùng 1 lần duy nhất

app.use(bodyParser.json());

app.use('/api/reviews', reviewRoutes);
app.use('/api/schedule', scheduleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
