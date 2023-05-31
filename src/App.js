import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import cartPage from "./page/CartPage/cartPage";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { getSession } from "./authentication/Login";

import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import CategoryPage from "./page/CategoryPage";
import ProductPage from "./page/ProductPage";
import { useEffect, useState } from "react";
import { set } from "store";
import UserInforPage from "./page/UserInforPage";
import ContactPage from "./page/ContactPage";
import ProductInfo from "./page/ProductInfoPage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    let user = getSession();
    setUser(user);
  }, []);

  return (
    <div className="App">
      {/*<p>{user.map(e=> JSON.stringify(e)).toString()}</p>*/}
      <Routes>
        <Route exact path="/" element={HomePage()}></Route>
        <Route exact path="/cartPage" element={cartPage()}></Route>
        {/* <Route exact path='/thanhToan' element={thanhToan()}></Route> */}

        <Route exact path="/login" element={LoginPage()}></Route>
        <Route exact path="/signup" element={SignUpPage()}></Route>
        <Route exact path="/product" element={ProductPage()}></Route>
        <Route exact path="/category" element={CategoryPage()}></Route>
        <Route exact path="/contact" element={ContactPage()}></Route>
        <Route path="/product/:productId" element={<ProductInfo/>}></Route>
        <Route exact path="/userinfor" element={UserInforPage()}></Route> 
      </Routes>
    </div>
  );
}

export default App;
