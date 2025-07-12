import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import CinemaReservation from "./pages/CinemaReservation";
import PaymentPage from "./pages/PaymentPage";
import RecommendationPage from "./pages/RecommendationPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/booking" style={{ marginRight: '1rem' }}>Booking Page</Link>
          <Link to="/cinema" style={{ marginRight: '1rem' }}>Cinema Reservation</Link>
          <Link to="/payment" style={{ marginRight: '1rem' }}>Thanh toán</Link>
          <Link to="/recommend">Gợi ý phim</Link>
        </nav>

       <Routes>
  <Route path="/" element={<PaymentPage />} />
  <Route path="/booking" element={<BookingPage />} />
  <Route path="/cinema" element={<CinemaReservation />} />
  <Route path="/payment" element={<PaymentPage />} />
  <Route path="/recommend" element={<RecommendationPage />} />
  <Route path="*" element={<PaymentPage />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;
