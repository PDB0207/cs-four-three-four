import React from "react";
import SeatSelector from "../components/SeatSelector";
import ChatBox from "../components/ChatBox";

const BookingPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 3 }}>
        <h1>Đặt vé xem phim</h1>
        <SeatSelector />
      </div>
      <div style={{ flex: 1 }}>
        <ChatBox />
      </div>
    </div>
  );
};

export default BookingPage;
