// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Tài khoản mẫu (sau này thay bằng database)
const users = [
  { id: 1, email: "admin@example.com", password: "123456" },
];

// Đăng nhập
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Email hoặc mật khẩu không đúng!" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, "my_secret_key", { expiresIn: "1h" });
  res.json({ message: "Đăng nhập thành công", token });
});

module.exports = router;
