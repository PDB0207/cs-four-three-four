const express = require('express');
const router = express.Router();
const { dates, movies } = require('../data/schedule');

router.get('/dates', (req, res) => {
  res.json(dates);
});

router.get('/movies', (req, res) => {
  const { cinema } = req.query;
  const filtered = cinema ? movies.filter(m => m.cinema === cinema) : movies;
  console.log("Trả về danh sách phim:", filtered); // ✅ Log ra để test
  res.json(filtered);
});

module.exports = router;
