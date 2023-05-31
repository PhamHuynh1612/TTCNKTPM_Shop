import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import * as React from "react";
import { useState, useEffect } from "react";

import "../styles/container.css";

import ProductItem from "../components/ProductItem";



export default function ProductPage() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/product/all", {
      method: "GET",
    })

    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  function makeProductItem(name, image, id, price) {
    return <>
      <ProductItem id={id} name={name} image={image} price={price}></ProductItem>
    </>
  }

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>

      <div className="set-container">
        <div className="padding-top-div padding-bottom-div">
          <div className="list-product">
            {
              products && products.map(e => makeProductItem(e.name, e.displayImage, e.id, e.price))
            }
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
