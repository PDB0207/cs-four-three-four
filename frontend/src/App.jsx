<<<<<<< Updated upstream
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookingPage from './pages/BookingPage';
import ReportPage from './pages/ReportPage';
import MovieReview from './pages/MovieReview'; 
import UserProfile from './components/UserProfile'; 
import MovieSchedule from './components/MovieSchedule';

import './App.css'; 
=======
// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import CinemaReservation from "./pages/CinemaReservation.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
const App = () => {
  const isLoggedIn = !!localStorage.getItem("token");
>>>>>>> Stashed changes

  return (
    <Router>
<<<<<<< Updated upstream
      <div className="app-container">
        <UserProfile />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/review" element={<MovieReview />} />
          <Route path="/schedule" element={<MovieSchedule />} />
        </Routes>
      </div>
=======
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/booking" /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={isLoggedIn ? <BookingPage /> : <Navigate to="/login" />} />
        <Route path="/cinema" element={isLoggedIn ? <CinemaReservation /> : <Navigate to="/login" />} />
        <Route path="/payment" element={isLoggedIn ? <PaymentPage /> : <Navigate to="/login" />} />
      </Routes>
>>>>>>> Stashed changes
    </Router>
  );
};

export default App;
