import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import cartPage from './page/CartPage/cartPage';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
}from "react-router-dom";



import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import CategoryPage from './page/CategoryPage';
import { useEffect, useState } from 'react';




function App() {
  const [user, setUser] = useState([])
  const getApiData = async () => {
    fetch(
      "http://localhost:8080/user/all",
      {
        headers: {'Content-Type': 'application/json',  },
        method : "GET"
      }
    ).then(respose => respose.json())
    .then(json=> {
      setUser([...user, json])
    })
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      {/*<p>{user.map(e=> JSON.stringify(e)).toString()}</p>*/}
      <Routes >
        <Route exact path='/' element={HomePage()}></Route>
        <Route exact path='/cartPage' element={cartPage()}></Route>
        {/* <Route exact path='/thanhToan' element={thanhToan()}></Route> */}
        

        <Route exact path='/login' element={LoginPage()}></Route>
        <Route exact path='/signup' element={SignUpPage()}></Route>
        <Route exact path='/category' element={CategoryPage()}></Route>
      </Routes>
    </div>
  );
}

export default App;
