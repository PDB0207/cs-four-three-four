import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookingPage from './pages/BookingPage';
import ReportPage from './pages/ReportPage';
import MovieReview from './pages/MovieReview'; 
import UserProfile from './components/UserProfile'; 
import MovieSchedule from './pages/MovieSchedule';

import './App.css'; 

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import BookingPage from './pages/BookingPage';
// import ReportPage from './pages/ReportPage';
// import MovieReview from './pages/MovieReview'; 
// import UserProfile from './components/UserProfile'; 
// import MovieSchedule from './pages/MovieSchedule';

// import './App.css'; 

// function AppContent() {
//   const location = useLocation();
//   const hideUserProfileRoutes = ['/schedule', '/login', '/register'];
//   const shouldShowUserProfile = !hideUserProfileRoutes.includes(location.pathname);

//   return (
//     <div className="app-container">
//       {shouldShowUserProfile && <UserProfile />}
      
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/booking" element={<BookingPage />} />
//         <Route path="/report" element={<ReportPage />} />
//         <Route path="/review" element={<MovieReview />} />
//         <Route path="/schedule" element={<MovieSchedule />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
