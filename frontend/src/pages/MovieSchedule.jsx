import React, { useState, useEffect } from "react";
import './MovieSchedule.css'; // ✅ đúng path

export default function MovieSchedule() {
  const [dates, setDates] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedDate, setSelectedDate] = useState("1/7");
  const [search, setSearch] = useState("");
  const [cinema, setCinema] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/schedule/dates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);

  useEffect(() => {
  let url = "http://localhost:5000/api/schedule/movies";
  if (cinema) {
    url += `?cinema=${cinema}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("📦 Movies nhận được:", data);  // 👈 THÊM DÒNG NÀY
      setMovies(data);
    });
}, [cinema]);


  useEffect(() => {
    let url = "http://localhost:5000/api/schedule/movies";
    if (cinema) {
      url += `?cinema=${cinema}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [cinema]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Còn Vé": return "status-green";
      case "Sắp hết vé": return "status-orange";
      case "Hết vé": return "status-red";
      default: return "";
    }
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movie-container">
      <header className="movie-header">
        <h1 className="main-title">🎬 LỊCH CHIẾU PHIM</h1>
        <select
          value={cinema}
          onChange={(e) => setCinema(e.target.value)}
          className="cinema-select"
        >
          <option value="">Chọn rạp</option>
          <option value="CGV">CGV</option>
          <option value="Galaxy">Galaxy</option>
        </select>
      </header>

      <input
        type="text"
        className="search-box"
        placeholder="Tìm phim..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="date-picker">
        {dates.map((d) => (
          <button
            key={d.date}
            className={`date-button ${selectedDate === d.date ? "active" : ""}`}
            onClick={() => setSelectedDate(d.date)}
          >
            {d.label}
            <div>{d.date}</div>
          </button>
        ))}
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="poster" />
            <div className="movie-title">{movie.title}</div>
            <div className={`movie-status ${getStatusClass(movie.status)}`}>
              {movie.status}
            </div>
            <div className="movie-time">{movie.time}</div>
            <div className="movie-duration">{movie.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
