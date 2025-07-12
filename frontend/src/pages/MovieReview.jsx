import React, { useState } from 'react';
import './MovieReview.css';

const MovieReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  //  Thêm state cho các input
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [movieName, setMovieName] = useState('');
  const [showTime, setShowTime] = useState('');

  const handleSuggestionClick = (text) => {
    if (!suggestions.includes(text)) {
      setSuggestions([...suggestions, text]);
    } else {
      setSuggestions(suggestions.filter(item => item !== text));
    }
  };

  // Gửi dữ liệu về backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      fullName,
      email,
      phone,
      movieName,
      showTime,
      rating,
      comment,
      suggestions,
    };

    try {
      const res = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reviewData)
      });

      const data = await res.json();
      alert(data.message || 'Gửi đánh giá thành công!');
      console.log('Gửi thành công:', reviewData);
    } catch (err) {
      console.error('Lỗi gửi đánh giá:', err);
      alert('Không gửi được đánh giá. Hãy thử lại.');
    }
  };

  return (
    <div className="review-container">
      <h2>Đánh giá phim</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-grid">
          <input
            type="text"
            placeholder="Họ tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tên phim"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Suất chiếu"
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
            required
          />
        </div>

        <div className="rating">
          <label>ĐÁNH GIÁ CỦA BẠN</label>
          <div className="stars">
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;
              return (
                <span
                  key={index}
                  className={`star ${starValue <= (hover || rating) ? 'filled' : ''}`}
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>

        <label>VIẾT NHẬN XÉT</label>
        <textarea
          placeholder="Nhập nhận xét của bạn..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <label>GỢI Ý ĐÁNH GIÁ</label>
        <div className="suggestions">
          {['Hấp dẫn', 'Hơi chán', 'Diễn xuất tốt', 'Kỹ xảo đẹp', 'Nội dung tuyệt'].map((item) => (
            <button
              type="button"
              key={item}
              className={`suggestion-btn ${suggestions.includes(item) ? 'active' : ''}`}
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button type="submit" className="submit-btn">➤</button>
      </form>
    </div>
  );
};

export default MovieReview;
