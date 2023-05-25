import { useNavigate, Navigate, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div>
        <Header></Header>

        <NavBar></NavBar>
      </div>
    </>
  );
}
