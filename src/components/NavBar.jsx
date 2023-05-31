import "../styles/navbar.css";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="nav-item">
          <a href="/">Trang chủ</a>
        </div>
        <div className="nav-item">
          <a href="/product">Sản phẩm</a>
        </div>
        <div className="nav-item">
          <a href="/category">Danh mục</a>
        </div>
        <div className="nav-item">
          <a href="/contact">Liên hệ</a>
        </div>
        <div className="nav-item">
          <a href="/news">Tin tức</a>
        </div>
      </div>
    </>
  );
}
