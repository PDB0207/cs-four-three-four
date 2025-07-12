<<<<<<< Updated upstream
// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const reviewRoutes = require('./routes/reviews');
const scheduleRoutes = require('./routes/scheduleRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
=======
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
>>>>>>> Stashed changes

const app = express();
app.use(cors()); // 👈 BẮT BUỘC PHẢI CÓ
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = 5000;
<<<<<<< Updated upstream

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', reviewRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/statistics', statisticsRoutes);

=======
>>>>>>> Stashed changes
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
