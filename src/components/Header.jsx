import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import CategoryPage from "../page/CategoryPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  const endDecorator = <i class="fa-sharp fa-solid fa-magnifying-glass"></i>;
  return (
    <>
      {/* <div class="container-fluid" className="container">
        <div class="row">
          <div class="col-xl-1">
            <a href="/">
              <img
                className="logo-shop"
                src={require("../assets/images/logo_shop.jpg")}
                alt="logo shop"
              />
            </a>
          </div>

          <div class="col-xl-7" className="search-input">
            <Input endDecorator={endDecorator} placeholder="Search"></Input>
          </div>
          <div class="col-xl-2" className="user-infor">
            <i class="fa-solid fa-user fa-xl"></i>
            <div className="user-login-option">
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </div>
          </div>
          <div class="col-xl-2" className="cart">
            <a
              href="/cartPage"
              style={{ color: "black", textDecoration: "none" }}
            >
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              <p>Cart</p>
            </a>
          </div>
        </div>
      </div> */}
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <a href="/">
              <img
                className="logo-shop"
                src={require("../assets/images/logo_shop.jpg")}
                alt="logo shop"
              />
            </a>
          </Col>
          <Col xs={6} className="search-input">
            <Input endDecorator={endDecorator} placeholder="Search"></Input>
          </Col>
          <Col className="user-infor">
            <i class="fa-solid fa-user fa-xl"></i>
            <div className="user-login-option">
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </div>
          </Col>
          <Col className="cart">
            <a
              href="/cartPage"
              style={{ color: "black", textDecoration: "none" }}
            >
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              <p>Cart</p>
            </a>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
