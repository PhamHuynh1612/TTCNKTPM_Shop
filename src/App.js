import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route exact path='/' element={HomePage()}></Route>
          <Route exact path='/login' element={LoginPage()}></Route>
        </Routes>
    </div>
  );
}

export default App;
