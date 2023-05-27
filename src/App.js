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
import AdminPage from "./page/AdminPage";
import BannerPage from "./components/Banner";
import LGPage from "./page/LG";
import HPPage from "./page/HP";
import AsusPage from "./page/Asus";
import MsiPage from "./page/Msi";
import DellPage from "./page/Dell";
import { useEffect, useState } from "react";
import { set } from "store";
import UserInforPage from "./page/UserInforPage";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    let user = getSession();
    setUser(user);
    console.log(user);
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
        <Route exact path="/category" element={CategoryPage()}></Route>
        <Route exact path="/product" element={ProductPage()}></Route>
        <Route exact path="/admin" element={AdminPage()}></Route>
        <Route exact path="/banner" element={BannerPage()}></Route>
        <Route exact path="/lg" element={LGPage()}></Route>
        <Route exact path="/hp" element={HPPage()}></Route>
        <Route exact path="/asus" element={AsusPage()}></Route>
        <Route exact path="/msi" element={MsiPage()}></Route>
        <Route exact path="/dell" element={DellPage()}></Route>
        <Route exact path="/userinfor" element={UserInforPage()}></Route>
      </Routes>
    </div>
  );
}

export default App;
