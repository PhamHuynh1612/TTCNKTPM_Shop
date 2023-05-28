import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function HPPage() {
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
            src={require("../assets/images/laptophp.jpg")}
            alt="anhproduct"
          />
        </div>
        <div className="giuaphai">
          <p id="msp">
            <b>Mã sản phẩm:</b> SP0002
          </p>
          <p id="tsp">
            <b>Tên sản phẩm:</b> Laptop HP 240 G8 6L145PA
          </p>
          <p id="tt">
            <b>Tình trạng:</b> Còn hàng
          </p>
          <p id="gb">
            <b>Giá bán: </b>
            <span id="gb1"> 12.990.000 VNĐ</span>
          </p>
          <p id="gg">
            <b>Giảm giá:</b> 9.990.000 VNĐ
          </p>
          <p id="mt">
            <b>Mô tả:</b>
            <p>
              CPU: Intel Core i3-1115G4 Processor (6MB Cache, upto 4.10 GHz)
            </p>
            <p>RAM: 8GB DDR4 3200Mhz</p>
            <p>SSD: 256GB PCIe NVMe</p>
            <p>VGA: Intel® UHD Graphics</p>
            <p>
              Display: 14.0Inch HD,Anti-glare WLED 250nits eDP micro-edge 45%
              NTSC
            </p>
            <p>Pin: 3Cell 41Whr</p>
            <p>Color: Silver (Bạc)</p>
            <p>Weight: 1.47 kg</p>
            <p>OS: Windows 11 Home</p>
          </p>
        </div>
      </div>
    </>
  );
}
