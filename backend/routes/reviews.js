// routes/reviews.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const reviewData = req.body;
  console.log('🎬 Nhận đánh giá:', reviewData);

  res.status(201).json({ message: 'Gửi đánh giá thành công!' });
});

module.exports = router;
