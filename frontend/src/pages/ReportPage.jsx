import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ReportPage = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [movie, setMovie] = useState('all');
  const [cinema, setCinema] = useState('all');

  // Dữ liệu giả định cho biểu đồ và bảng
  const dummyReportData = [
    { date: '01/06', movie: 'Phim 1', cinema: 'Rạp A', ticketsSold: 120, revenue: 12000000 },
    { date: '02/06', movie: 'Phim 2', cinema: 'Rạp B', ticketsSold: 90, revenue: 9000000 },
    { date: '03/06', movie: 'Phim 1', cinema: 'Rạp B', ticketsSold: 75, revenue: 7500000 },
    { date: '04/06', movie: 'Phim 2', cinema: 'Rạp A', ticketsSold: 110, revenue: 11000000 },
    // Thêm các dòng dữ liệu khác để minh họa
    { date: '05/06', movie: 'Phim 3', cinema: 'Rạp C', ticketsSold: 80, revenue: 8000000 },
    { date: '06/06', movie: 'Phim 1', cinema: 'Rạp A', ticketsSold: 100, revenue: 10000000 },
    { date: '07/06', movie: 'Phim 4', cinema: 'Rạp D', ticketsSold: 60, revenue: 6000000 },
  ];

  // Chuẩn bị dữ liệu cho biểu đồ (Bar chart cho Doanh thu, Line chart cho Vé bán)
  const chartLabels = dummyReportData.map(data => data.date);
  const revenueData = dummyReportData.map(data => data.revenue / 1000000); // Doanh thu (triệu)
  const ticketsSoldData = dummyReportData.map(data => data.ticketsSold);

  const barChartData = {
    labels: chartLabels,
    datasets: [
      {
        type: 'bar',
        label: 'Doanh thu (triệu)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: revenueData,
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'Vé bán',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        data: ticketsSoldData,
        yAxisID: 'y1',
        tension: 0.4, // Đường cong mượt mà hơn
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thống kê Doanh thu & Vé bán',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Doanh thu (triệu)',
        },
        grid: {
          drawOnChartArea: false, // Chỉ vẽ grid cho trục chính
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Vé bán',
        },
        grid: {
          drawOnChartArea: false, // Không vẽ grid cho trục phụ
        },
        // Đảm bảo trục y1 bắt đầu từ 0 và có khoảng cách hợp lý
        min: 0,
        max: Math.max(...ticketsSoldData) + 20, // Tăng thêm 20 để có khoảng trống phía trên
      },
    },
  };


  const handleExportReport = () => {
    console.log('Xuất báo cáo với các tiêu chí:', { startDate, endDate, movie, cinema });
    // TODO: Triển khai logic xuất báo cáo thực tế (gọi API)
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#242424', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#646cff' }}>Báo cáo - Thống kê Doanh thu & Vé bán</h1>

      {/* Input Filters */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '30px',
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '8px',
        alignItems: 'flex-end'
      }}>
        <div>
          <label htmlFor="startDate" style={{ display: 'block', marginBottom: '5px' }}>Từ ngày:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#2e2e2e', color: 'white' }}
          />
        </div>
        <div>
          <label htmlFor="endDate" style={{ display: 'block', marginBottom: '5px' }}>Đến ngày:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#2e2e2e', color: 'white' }}
          />
        </div>
        <div>
          <label htmlFor="movie" style={{ display: 'block', marginBottom: '5px' }}>Phim:</label>
          <select
            id="movie"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#2e2e2e', color: 'white' }}
          >
            <option value="all">Tất cả</option>
            <option value="Phim 1">Phim 1</option>
            <option value="Phim 2">Phim 2</option>
            <option value="Phim 3">Phim 3</option>
            <option value="Phim 4">Phim 4</option>
          </select>
        </div>
        <div>
          <label htmlFor="cinema" style={{ display: 'block', marginBottom: '5px' }}>Rạp:</label>
          <select
            id="cinema"
            value={cinema}
            onChange={(e) => setCinema(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#2e2e2e', color: 'white' }}
          >
            <option value="all">Tất cả</option>
            <option value="Rạp A">Rạp A</option>
            <option value="Rạp B">Rạp B</option>
            <option value="Rạp C">Rạp C</option>
            <option value="Rạp D">Rạp D</option>
          </select>
        </div>
        <div>
          <button
            onClick={handleExportReport}
            style={{
              backgroundColor: '#646cff',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1em',
              fontWeight: 'bold',
              width: '100%',
              marginTop: 'auto' // Đẩy nút xuống dưới cùng trong grid item
            }}
          >
            Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div style={{
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        height: '400px' // Đặt chiều cao cố định cho biểu đồ
      }}>
        <Bar data={barChartData} options={chartOptions} />
      </div>

      {/* Table Section */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '15px', color: '#646cff' }}>Chi tiết báo cáo</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2e2e2e' }}>
              <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Ngày</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Phim</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Rạp</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Số vé bán</th>
              <th style={{ padding: '10px', borderBottom: '1px solid #333' }}>Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {dummyReportData.map((data, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '10px' }}>{data.date}</td>
                <td style={{ padding: '10px' }}>{data.movie}</td>
                <td style={{ padding: '10px' }}>{data.cinema}</td>
                <td style={{ padding: '10px' }}>{data.ticketsSold}</td>
                <td style={{ padding: '10px' }}>{data.revenue.toLocaleString('vi-VN')} VNĐ</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportPage;