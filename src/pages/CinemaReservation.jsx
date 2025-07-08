import React, { useState } from 'react';
import TicketAssistant from '../components/TicketAssistant';
import AuditoriumView from '../components/AuditoriumView';

export default function CinemaReservation() {
  const [chosenSeats, setChosenSeats] = useState([]);

  const handleInstruction = (message) => {
    const match = message.match(/(\d+)\s*(ghế|vé).*(hàng)\s*([A-Z])/i);
    if (!match) {
      alert("Không hiểu. Ví dụ: 'Tôi cần 2 ghế hàng C'");
      return;
    }

    const count = parseInt(match[1]);
    const row = match[4].toUpperCase();
    const seats = [];
    for (let i = 1; i <= count; i++) {
      seats.push(`${row}${i}`);
    }

    setChosenSeats(seats);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Đặt vé xem phim thông minh 🎬</h2>
      <TicketAssistant onInstruction={handleInstruction} />
      <AuditoriumView chosenSeats={chosenSeats} />
    </div>
  );
}
