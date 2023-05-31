import "../styles/container.css"
import "../styles/banner.css"

import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";

export default function SaleProduct() {

    const [saleProducts, setSaleProducts] = useState([])

    const fetchSaleProducts = async () => {
        const response = await fetch("http://localhost:8080/product/sale", {
            method: "GET",
        })
        const data = await response.json()
        setSaleProducts(data)
    }

    useEffect(() => {
        fetchSaleProducts()
    }, [])

    function makeSaleProductItem(name, image, id, price) {
        return <>
            <ProductItem id={id} name={name} image={image} price={price}></ProductItem>
        </>
    }

    return (<>
        <div className="set-container">
            <div className="padding-top-div">
                <p className="container-heading" style={{ backgroundColor: "#fff" }}>SẢN PHẨM GIẢM GIÁ</p>
                <div className="list-product">
                    {
                        saleProducts &&  saleProducts.map(e=> makeSaleProductItem(e.name, e.displayImage, e.id, e.price))
                    }
                </div>
            </div>
        </div>
    </>)
}