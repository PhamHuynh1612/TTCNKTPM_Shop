import "../styles/center.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Banner from "../components/Banner";
export default function Center() {
  return (
    <>
      <div className="trai"></div>
      <div className="phai"></div>
      <div className="giua">
        <table>
          <tr>
            <b>TIN TỨC NỔI BẬT</b>
          </tr>
          <tr>
            <td colSpan={5}>
              <Banner></Banner>
            </td>
          </tr>
          <tr>
            <b>SẢN PHẨM GIẢM GIÁ</b>
          </tr>
          <tr>
            <td className="box">
              <tr>
                <a href="/lg">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptoplg.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/lg">Laptop LG Gram 2022 16ZD90Q-G.AX72A5</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/hp">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptophp.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/hp">Laptop HP 240 G8 6L145PA</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/asus">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopasus.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/asus">Laptop Asus ExpertBook B9400CEA-KC0773T</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/msi">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopmsi.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/msi">Laptop MSI Alpha 15 B5EEK 203VN</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/dell">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopdell.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/dell">Laptop Dell Vostro 3520 5M2TT2</a>
              </tr>
            </td>
          </tr>
          <tr>
            <b>SẢN PHẨM GỢI Ý</b>
          </tr>
          <tr>
            <td className="box">
              <tr>
                <a href="/lg">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptoplg.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/lg">Laptop LG Gram 2022 16ZD90Q-G.AX72A5</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/hp">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptophp.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/hp">Laptop HP 240 G8 6L145PA</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/asus">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopasus.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/asus">Laptop Asus ExpertBook B9400CEA-KC0773T</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/msi">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopmsi.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/msi">Laptop MSI Alpha 15 B5EEK 203VN</a>
              </tr>
            </td>
            <td className="box">
              <tr>
                <a href="/dell">
                  <img
                    className="anhsp"
                    src={require("../assets/images/laptopdell.jpg")}
                    alt="anhsp"
                  />
                </a>
              </tr>
              <tr className="tensp">
                <a href="/dell">Laptop Dell Vostro 3520 5M2TT2</a>
              </tr>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
