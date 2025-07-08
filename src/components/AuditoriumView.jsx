import React from 'react';
import './AuditoriumView.css';

const rows = ['A', 'B', 'C', 'D'];
const cols = 8;

export default function AuditoriumView({ chosenSeats }) {
  return (
    <div className="auditorium">
      {rows.map(row => (
        <div key={row} className="row">
          {[...Array(cols)].map((_, i) => {
            const seatId = `${row}${i + 1}`;
            const isChosen = chosenSeats.includes(seatId);
            return (
              <button
                key={seatId}
                className={`seat ${isChosen ? 'chosen' : ''}`}
                disabled={isChosen}
              >
                {seatId}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
