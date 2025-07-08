<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Lên lịch vé</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-5">
    <h2>Lên lịch đặt vé xem phim</h2>
    <form method="POST" action="schedule_ticket.php">
        <div class="mb-3">
            <label>Phim:</label>
            <select name="movie_id" class="form-select">
                <?php
                $result = $conn->query("SELECT movie_id, title FROM Movies");
                while ($row = $result->fetch_assoc()) {
                    echo "<option value='{$row['movie_id']}'>{$row['title']}</option>";
                }
                ?>
            </select>
        </div>

        <div class="mb-3">
            <label>Ngày chiếu:</label>
            <input type="date" name="show_date" class="form-control" required>
        </div>

        <div class="mb-3">
            <label>Giờ chiếu:</label>
            <input type="time" name="show_time" class="form-control" required>
        </div>

        <div class="mb-3">
            <label>Phòng chiếu:</label>
            <select name="room_id" class="form-select">
                <?php
                $result = $conn->query("SELECT room_id, room_name FROM Rooms");
                while ($row = $result->fetch_assoc()) {
                    echo "<option value='{$row['room_id']}'>{$row['room_name']}</option>";
                }
                ?>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Lên lịch & giữ vé</button>
    </form>
</body>
</html>
