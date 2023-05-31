import { useNavigate, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SaleProduct from "../components/SaleProducts";
import RecommendProducts from "../components/RecommendProducts";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <>
      <div>
        <Header></Header>
        <NavBar></NavBar>
        <Banner></Banner>
        <SaleProduct></SaleProduct>
        <RecommendProducts></RecommendProducts>
        <Footer></Footer>
      </div>
    </>
  );
}
