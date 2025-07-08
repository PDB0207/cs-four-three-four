import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookingPage from "./Pages/BookingPage";
import CinemaReservation from "./pages/CinemaReservation"; // dùng đúng thư mục bạn có (không phải screens)

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation (tuỳ chọn) */}
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/booking" style={{ marginRight: '1rem' }}>Booking Page</Link>
          <Link to="/cinema">Cinema Reservation</Link>
        </nav>

        <Routes>
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/cinema" element={<CinemaReservation />} />
          {/* Default route */}
          <Route path="*" element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
