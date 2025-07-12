import React, { useState } from "react";
console.log("✅ Đã vào PaymentPage");

const PaymentPage = () => {
  const [amount, setAmount] = useState(100); // giả lập số tiền
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    fetch("http://localhost/schedule_ticket.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setSuccess(true);
        } else {
          alert("Thanh toán thất bại");
        }
      })
      .catch(() => alert("Không thể kết nối đến server"));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Thanh toán</h2>
      <p>Số tiền: {amount}k</p>
      <button onClick={handlePayment}>Thanh toán</button>
      {success && <p style={{ color: "green" }}>Thanh toán thành công!</p>}
    </div>
  );
};

export default PaymentPage;
