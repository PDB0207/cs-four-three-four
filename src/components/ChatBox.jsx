import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Xin chào! Tôi có thể giúp gì cho bạn về chỗ ngồi?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { from: "user", text: input }]);
      if (input.toLowerCase().includes("ghế đẹp")) {
        setMessages((prev) => [
          ...prev,
          { from: "user", text: input },
          { from: "bot", text: "Hàng giữa, ghế trung tâm thường là vị trí đẹp." },
        ]);
      }
      setInput("");
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "8px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Hỗ trợ đặt chỗ</h3>
      <div style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.from === "bot" ? "left" : "right",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                backgroundColor: msg.from === "bot" ? "#f0f0f0" : "#d1ffd1",
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1 }}
          placeholder="Nhập câu hỏi..."
        />
        <button onClick={handleSend}>Gửi</button>
      </div>
    </div>
  );
};

export default ChatBox;
