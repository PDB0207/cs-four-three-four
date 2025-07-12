const fs = require("fs");
const path = require("path");

// Xử lý phản hồi chat từ người dùng
const handleChat = (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || "";

  let botReply = "Xin lỗi, tôi chưa hiểu câu hỏi.";
  if (userMessage.includes("ghế đẹp")) {
    botReply = "Hàng giữa, ghế trung tâm thường là vị trí đẹp.";
  } else if (userMessage.includes("gần lối đi")) {
    botReply = "Các ghế gần lối đi thường là A1, A10, B1, B10,...";
  }

  // Ghi lại vào messages.json
  const log = {
    user: req.body.message,
    bot: botReply,
    time: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "..", "data", "messages.json");
  let messages = [];

  if (fs.existsSync(filePath)) {
    messages = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }

  messages.push(log);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  // Gửi phản hồi về frontend
  res.json({ reply: botReply });
};

module.exports = {
  handleChat,
};
