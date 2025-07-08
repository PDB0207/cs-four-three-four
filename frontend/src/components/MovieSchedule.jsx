import React, { useState } from "react";
import './MovieSchedule.css';
import logo from '../assets/img/logo.jpg';


const dates = [
  { label: "HÔM NAY", date: "1/7" },
  { label: "THỨ BA", date: "2/7" },
  { label: "THỨ TƯ", date: "3/7" },
  { label: "THỨ NĂM", date: "4/7" },
  { label: "THỨ SÁU", date: "5/7" },
  { label: "THỨ BẢY", date: "6/7" },
];

const movies = [
  {
    title: "HAI MƯƠI",
    time: "17h - 18h15",
    duration: "75 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Còn Vé",
  },
  {
    title: "ĐỊA ĐẠO",
    time: "17h - 18h30",
    duration: "90 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Còn Vé",
  },
  {
    title: "GIAM CẦM QUỶ DỮ",
    time: "17h - 18h",
    duration: "60 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Sắp hết vé",
  },
  {
    title: "CHÌA KHÓA TRĂM TỶ",
    time: "17h - 18h20",
    duration: "80 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Hết vé",
  },
  {
    title: "HAI MƯƠI",
    time: "17h - 18h15",
    duration: "75 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Còn Vé",
  },
  {
    title: "ĐỊA ĐẠO",
    time: "17h - 18h30",
    duration: "90 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Còn Vé",
  },
  {
    title: "GIAM CẦM QUỶ DỮ",
    time: "17h - 18h",
    duration: "60 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Sắp hết vé",
  },
  {
    title: "CHÌA KHÓA TRĂM TỶ",
    time: "17h - 18h20",
    duration: "80 phút",
    poster: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/thumbnail/185x260/8fed44cf50ba9642d30b9a74c2fa5e2d/4/0/406x600-tomb.jpg",
    status: "Hết vé",
  },
];

export default function MovieSchedule() {
  const [selectedDate, setSelectedDate] = useState("1/7");
  const [search, setSearch] = useState("");
  const [cinema, setCinema] = useState("");

  const getStatusClass = (status) => {
    switch (status) {
      case "Còn Vé":
        return "status-green";
      case "Sắp hết vé":
        return "status-orange";
      case "Hết vé":
        return "status-red";
      default:
        return "";
    }
  };
const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="movie-container">
      <header className="movie-header">
       <img src={logo} alt="logo" className="logo" />
        <h1 className="main-title">XEM LỊCH CHIẾU & CHỌN SUẤT CHIẾU</h1>
        <select
          value={cinema}
          onChange={(e) => setCinema(e.target.value)}
          className="cinema-select"
        >
          <option value="">chọn rạp chiếu</option>
          <option value="CGV">CGV</option>
          <option value="Galaxy">Galaxy</option>
        </select>
      </header>

      <input
        type="text"
        className="search-box"
        placeholder="Tìm kiếm..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2 className="section-title">PHIM</h2>
      <div className="date-picker">
        {dates.map((d) => (
          <button
            key={d.date}
            className={`date-button ${
              selectedDate === d.date ? "active" : ""
            }`}
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