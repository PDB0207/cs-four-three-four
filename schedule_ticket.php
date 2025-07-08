<?php
include 'db_connect.php';

$user_id = 1; // giả lập người dùng

$movie_id = $_POST['movie_id'];
$room_id = $_POST['room_id'];
$show_date = $_POST['show_date'];
$show_time = $_POST['show_time'];

// Kiểm tra suất chiếu
$check = $conn->query("SELECT showtime_id FROM Showtimes 
                       WHERE movie_id=$movie_id AND room_id=$room_id 
                       AND show_date='$show_date' AND show_time='$show_time'");
if ($check->num_rows > 0) {
    $row = $check->fetch_assoc();
    $showtime_id = $row['showtime_id'];
} else {
    $conn->query("INSERT INTO Showtimes (movie_id, room_id, show_date, show_time)
                  VALUES ($movie_id, $room_id, '$show_date', '$show_time')");
    $showtime_id = $conn->insert_id;
}

// Giữ ghế đầu tiên
$seat_q = $conn->query("SELECT seat_id FROM Seats WHERE room_id = $room_id LIMIT 1");
$seat = $seat_q->fetch_assoc();
$seat_id = $seat['seat_id'];

$conn->query("INSERT INTO Tickets (user_id, showtime_id, seat_id, status)
              VALUES ($user_id, $showtime_id, $seat_id, 'booked')");

echo "<h2>✅ Đặt vé thành công!</h2>";
?>
