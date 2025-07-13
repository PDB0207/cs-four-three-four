const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/schedule', scheduleRoutes);

// API gợi ý vị trí đẹp
app.post('/api/chat', (req, res) => {
  console.log("Body nhận được từ frontend:", req.body); // Thêm dòng này
  const userMessage = req.body.message?.toLowerCase() || "";

  let botReply = "Xin lỗi, tôi chưa hiểu câu hỏi.";

  if (userMessage.includes("ghế đẹp") || userMessage.includes("ghế nào đẹp")) {
    botReply = "Hàng giữa, ghế trung tâm thường là vị trí đẹp.";
  } else if (userMessage.includes("gần màn hình")) {
    botReply = "Ghế hàng đầu tiên gần màn hình nhưng có thể gây mỏi cổ.";
  } else if (userMessage.includes("gần lối đi")) {
    botReply = "Ghế cạnh lối đi dễ ra vào, phù hợp nếu bạn hay đi vệ sinh.";
  }

  res.json({ reply: botReply });
});


// Khởi động server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server đang chạy tại http://localhost:${PORT}`);
});
