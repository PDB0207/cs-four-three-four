const cgvPoster = "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg";
const galaxyPoster = "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg";

const dates = [
  { label: "HÔM NAY", date: "1/7" },
  { label: "THỨ BA", date: "2/7" },
  { label: "THỨ TƯ", date: "3/7" },
  { label: "THỨ NĂM", date: "4/7" },
  { label: "THỨ SÁU", date: "5/7" },
  { label: "THỨ BẢY", date: "6/7" }
];

const movies = [
  { title: "HAI MƯƠI", time: "17h - 18h15", duration: "75 phút", poster: cgvPoster, status: "Còn Vé", cinema: "CGV" },
  { title: "ĐỊA ĐẠO", time: "17h - 18h30", duration: "90 phút", poster: galaxyPoster, status: "Còn Vé", cinema: "Galaxy" },
  { title: "GIAM CẦM QUỶ DỮ", time: "17h - 18h", duration: "60 phút", poster: cgvPoster, status: "Sắp hết vé", cinema: "CGV" },
  { title: "CHÌA KHÓA TRĂM TỶ", time: "17h - 18h20", duration: "80 phút", poster: galaxyPoster, status: "Hết vé", cinema: "Galaxy" },
  { title: "NGƯỜI NHỆN", time: "18h - 20h", duration: "120 phút", poster: cgvPoster, status: "Còn Vé", cinema: "CGV" },
  { title: "BATMAN", time: "19h - 21h30", duration: "150 phút", poster: galaxyPoster, status: "Sắp hết vé", cinema: "Galaxy" },
  { title: "AVENGERS", time: "20h - 23h", duration: "180 phút", poster: cgvPoster, status: "Còn Vé", cinema: "CGV" },
  { title: "NGƯỜI KIẾN", time: "16h - 17h30", duration: "90 phút", poster: galaxyPoster, status: "Hết vé", cinema: "Galaxy" },
  { title: "FAST & FURIOUS", time: "21h - 23h", duration: "120 phút", poster: cgvPoster, status: "Còn Vé", cinema: "CGV" },
  { title: "HARRY POTTER", time: "14h - 16h30", duration: "150 phút", poster: galaxyPoster, status: "Sắp hết vé", cinema: "Galaxy" }
];

module.exports = { dates, movies };