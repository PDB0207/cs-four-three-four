import React, { useEffect, useState } from "react";

const fakeMovies = [
  { id: 1, title: "Avengers: Endgame", genre: "Action" },
  { id: 2, title: "Interstellar", genre: "Sci-fi" },
  { id: 3, title: "La La Land", genre: "Romance" },
  { id: 4, title: "Parasite", genre: "Thriller" },
  { id: 5, title: "Inception", genre: "Sci-fi" },
];

const RecommendationPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const random = fakeMovies.sort(() => 0.5 - Math.random()).slice(0, 3);
    setRecommendations(random);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Gợi ý phim cho bạn</h2>
      <ul>
        {recommendations.map((movie) => (
          <li key={movie.id}>
            {movie.title} - <i>{movie.genre}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationPage;
