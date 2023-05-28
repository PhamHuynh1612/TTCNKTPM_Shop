import "../styles/center.css";
import * as React from "react";
/*npm install react-icons*/
import {} from "react-icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
function Banner() {
  return (
    <div id="container">
      <div id="slider">
        <div>
          <img
            className="item"
            src={require("../assets/images/news.jpg")}
            alt="item"
          />
        </div>
        <div id="left">
          <FiChevronLeft></FiChevronLeft>
        </div>
        <div id="right">
          <FiChevronRight></FiChevronRight>
        </div>
      </div>
    </div>
  );
}
export default Banner;
