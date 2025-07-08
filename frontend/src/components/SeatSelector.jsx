import React, { useState } from "react";
// import "./SeatSelector.css";

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <h2>Chọn chỗ ngồi</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 50px)", gap: "5px" }}>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSelect(seat)}
            style={{
              backgroundColor: selectedSeats.includes(seat) ? "green" : "lightgray",
              padding: "10px",
            }}
          >
            {seat}
          </button>
        ))}
      </div>
      <p>Ghế đã chọn: {selectedSeats.join(", ") || "chưa có"}</p>
    </div>
  );
};

export default SeatSelector;
