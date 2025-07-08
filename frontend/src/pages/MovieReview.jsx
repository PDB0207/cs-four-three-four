import React, { useState } from 'react';
import './MovieReview.css';

const MovieReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestionClick = (text) => {
    if (!suggestions.includes(text)) {
      setSuggestions([...suggestions, text]);
    } else {
      setSuggestions(suggestions.filter(item => item !== text));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Gửi đánh giá:', { rating, comment, suggestions });
    alert('Cảm ơn bạn đã đánh giá!');
  };

  return (
    <div className="review-container">
      <h2>Đánh giá phim</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-grid">
          <input type="text" placeholder="Họ tên" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Số điện thoại" />
          <input type="text" placeholder="Tên phim" />
          <input type="text" placeholder="Suất chiếu" />
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
