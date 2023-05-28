import Header from "../components/Header";
import * as React from "react";
import NavBar from "../components/NavBar";
import "../styles/product.css";
export default function ProductPage() {
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
            <b>Tên sản phẩm:</b> Laptop Acer Aspire 3 A315-56-38B1 NX.HS5SV.00G
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
            <p>CPU Intel Core i3-1005G1 (4MB, upto 3.40GHz)</p>
            <p>RAM 8GB DDR4 2666MHz (4GB Onboard + 4GB AKC tặng)</p>
            <p>SSD 256GB PCIe NVMe</p>
            <p>VGA Intel UHD Graphics</p>
            <p>Display 15.6Inch FHD Acer ComfyView LED LCD</p>
            <p>Pin 3Cell 43WHrs</p>
            <p>Color Shale Black (Đen)</p>
            <p>Bản lề 180 độ</p>
            <p>Weight 1.70 kg</p>
            <p>OS Windows 11 Home</p>
          </p>
        </div>
      </div>
    </>
  );
}
