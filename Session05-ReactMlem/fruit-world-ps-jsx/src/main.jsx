import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'

// const welcome = <h1>Chào mừng đến với vũ trụ trái cây xứ F</h1>; //JSX element

const welcome = (
  <div
    style={{
      backgroundColor: "#f06292", // hồng cánh sen
      margin: "20px",
      padding: "20px",
      borderRadius: "20px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.8)",
    }}
  >
    <h1>Chào mừng đến với vũ trụ trái cây xứ F</h1>
    <h2>Nhà văn hóa sinh viên | Làng đại học Thủ Đức</h2>
    <h3>&#169; 2026 luuviet | Fruit Universal</h3>
  </div>
);

// hàm render(chỉ nhận vào duy nhất 1 tham số)
// hàm render(tham số là 1 React element, JSX element)
createRoot(document.getElementById("ngoctrinh")).render(welcome);
