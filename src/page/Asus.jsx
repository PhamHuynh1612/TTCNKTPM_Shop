import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function AsusPage() {
  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <div className="trai"></div>
      <div className="phai"></div>
      <div className="giua">
        <div className="giuatrai">
          <img
            className="anhproduct"
            src={require("../assets/images/laptopasus.jpg")}
            alt="anhproduct"
          />
        </div>
        <div className="giuaphai">
          <p id="msp">
            <b>Mã sản phẩm:</b> SP0003
          </p>
          <p id="tsp">
            <b>Tên sản phẩm:</b> Laptop Asus ExpertBook B9400CEA-KC0773T
          </p>
          <p id="tt">
            <b>Tình trạng:</b> Còn hàng
          </p>
          <p id="gb">
            <b>Giá bán: </b>
            <span id="gb1"> 29.990.000 VNĐ</span>
          </p>
          <p id="gg">
            <b>Giảm giá:</b> 20.690.000 VNĐ
          </p>
          <p id="mt">
            <b>Mô tả:</b>
            <p>CPU: Intel Core i5-1135G7 (8MB, up to 4.20GHz)</p>
            <p>RAM: 8GB LPDDR4x 4267MHz onboard</p>
            <p>SSD: 512GB M.2 2280 PCIe</p>
            <p>VGA: Intel Iris Xe Graphics</p>
            <p>Display: 14.0Inch FHD Anti-Glare LED Backlit</p>
            <p>Pin: 4Cell 66WHrs</p>
            <p>Keyboard: Led White, Backlit, English</p>
            <p>Tính năng: Finger Print/ TPM</p>
            <p>Color: Black (Đen)</p>
            <p>Weight: 1.01kg</p>
            <p>OS: Windows 10 Home SL</p>
          </p>
        </div>
      </div>
    </>
  );
}
