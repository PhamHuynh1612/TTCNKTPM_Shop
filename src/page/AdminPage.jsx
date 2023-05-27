import * as React from "react";
import "../styles/admin.css";
export default function AdminPage() {
  return (
    <>
      <div className="tittle">
        <p className="tt">Menu quản trị</p>
      </div>
      <div className="trai"></div>
      <div className="phai"></div>
      <div className="giua">
        <a href="/qlsp">
          <button>Sản phẩm</button>
        </a>
        <a href="/qlkh">
          <button>Kho hàng</button>
        </a>
      </div>
    </>
  );
}
