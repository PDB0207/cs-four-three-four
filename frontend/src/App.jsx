import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MovieSchedule from './components/MovieSchedule';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/schedule" />} />
      <Route path="/schedule" element={<MovieSchedule />} />
    </Routes>
  );
}

export default App;
