// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const reviewRoutes = require('./routes/reviews');
const scheduleRoutes = require('./routes/scheduleRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', reviewRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/statistics', statisticsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
