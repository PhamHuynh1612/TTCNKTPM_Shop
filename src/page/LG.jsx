import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function LGPage() {
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
            src={require("../assets/images/laptoplg.jpg")}
            alt="anhproduct"
          />
        </div>
        <div className="giuaphai">
          <p id="msp">
            <b>Mã sản phẩm:</b> SP0001
          </p>
          <p id="tsp">
            <b>Tên sản phẩm:</b> Laptop LG Gram 2022 16ZD90Q-G.AX72A5
          </p>
          <p id="tt">
            <b>Tình trạng:</b> Còn hàng
          </p>
          <p id="gb">
            <b>Giá bán: </b>
            <span id="gb1"> 11.990.000 VNĐ</span>
          </p>
          <p id="gg">
            <b>Giảm giá:</b> 8.090.000 VNĐ
          </p>
          <p id="mt">
            <b>Mô tả:</b>
            <p>CPU: Intel Core i7-1260P (18MB, up to 4.70GHz)</p>
            <p>RAM: 16GB LPDDR5 5200MHz</p>
            <p>SSD: 256GB PCIe NVMe M.2</p>
            <p>VGA: Intel Iris Xe Graphics</p>
            <p>Display: 16.0Inch WQXGA 16:10 IPS PoL 99%DCI-P3 350nits</p>
            <p>Pin: 80WHrs</p>
            <p>Color: Obsidian Black (Đen)</p>
            <p>Weight: 1.199 kg</p>
            <p>OS: Windows 11 Home</p>
          </p>
        </div>
      </div>
    </>
  );
}
