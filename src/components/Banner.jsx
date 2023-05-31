import * as React from "react";
/*npm install react-icons*/
import { } from "react-icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "../styles/banner.css";
import "../styles/container.css";

export default function Banner() {
  return (
    <>
      <div className="set-container">
        <div className="padding-top-div">
          <div className="slider">
            <p className="container-heading">TIN TỨC NỔI BẬT</p>
            <div className="slider-img">
              <img
                src={require("../assets/images/news.jpg")}
                alt="item"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
