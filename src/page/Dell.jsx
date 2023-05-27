import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function DellPage() {
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
            src={require("../assets/images/laptopdell.jpg")}
            alt="anhproduct"
          />
        </div>
        <div className="giuaphai">
          <p id="msp">
            <b>Mã sản phẩm:</b> SP0005
          </p>
          <p id="tsp">
            <b>Tên sản phẩm:</b> Laptop Dell Vostro 3520 5M2TT2
          </p>
          <p id="tt">
            <b>Tình trạng:</b> Còn hàng
          </p>
          <p id="gb">
            <b>Giá bán: </b>
            <span id="gb1"> 18.990.000 VNĐ</span>
          </p>
          <p id="gg">
            <b>Giảm giá:</b> 16.390.000 VNĐ
          </p>
          <p id="mt">
            <b>Mô tả:</b>
            <p>CPU: Intel Core i5-1235U (12MB, Up to 4.40GHz)</p>
            <p>RAM: 8GB DDR4 2666MHz (1x8GB)</p>
            <p>SSD: 512GB M.2 PCIe NVMe</p>
            <p>VGA: Intel Iris Xe Graphics</p>
            <p>Display: 15.6Inch FHD 120Hz WVA Anti-Glare</p>
            <p>Pin: 3Cell 41Whrs</p>
            <p>Color: Titan Grey (Xám)</p>
            <p>Weight: 1.66 kg</p>
            <p>OS: Windows 11 SL + Office HS 2021</p>
          </p>
        </div>
      </div>
    </>
  );
}
