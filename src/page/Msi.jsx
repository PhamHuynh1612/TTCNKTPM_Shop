import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function LenovoPage() {
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
            src={require("../assets/images/laptopmsi.jpg")}
            alt="anhproduct"
          />
        </div>
        <div className="giuaphai">
          <p id="msp">
            <b>Mã sản phẩm:</b> SP0004
          </p>
          <p id="tsp">
            <b>Tên sản phẩm:</b> Laptop MSI Alpha 15 B5EEK 203VN
          </p>
          <p id="tt">
            <b>Tình trạng:</b> Còn hàng
          </p>
          <p id="gb">
            <b>Giá bán: </b>
            <span id="gb1"> 26.990.000 VNĐ</span>
          </p>
          <p id="gg">
            <b>Giảm giá:</b> 17.990.000 VNĐ
          </p>
          <p id="mt">
            <b>Mô tả:</b>
            <p>CPU: AMD Ryzen R5-5600H (16MB, up to 4.20GHz)</p>
            <p>RAM: 8GB DDR4 3200MHz (1x8GB)</p>
            <p>SSD: 512GB NVMe PCIe Gen3x4</p>
            <p>VGA: AMD Radeon RX 6600M 8GB GDDR6</p>
            <p>Display: 15.6Inch FHD IPS 144Hz 45%NTSC, close to 100%sRGB</p>
            <p>Pin: 4Cell 90WHrs</p>
            <p>Color: Black (Đen)</p>
            <p>RGB Gaming Keyboard, bản lề 180 độ</p>
            <p>Weight: 2.35 kg</p>
            <p>OS: Windows 11 Home</p>
          </p>
        </div>
      </div>
    </>
  );
}
