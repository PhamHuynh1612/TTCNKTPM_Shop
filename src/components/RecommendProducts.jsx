import "../styles/container.css"
import "../styles/banner.css"
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function RecommendProducts() {

    const [recommendProducts, setRecommendProducts] = useState([])

    const fetchRecommendProducts = async () => {
        const response = await fetch("http://localhost:8080/product/recommend", {
            method: "GET",
        })

        const data = await response.json()
        setRecommendProducts(data)
    }

    useEffect(() => {
        fetchRecommendProducts()
    }, [])

    function makeRecommendProductItem(name, image, id, price) {
        return <>
            <ProductItem id={id} name={name} image={image} price={price}></ProductItem>
        </>
    }

    return (<>
        <div className="set-container">
            <div className="padding-top-div padding-bottom-div">
                <p className="container-heading" style={{ backgroundColor: "#fff" }}>SẢN PHẨM GỢI Ý</p>
                <div className="list-product">
                    {
                        recommendProducts && recommendProducts.map(e=> makeRecommendProductItem(e.name, e.displayImage, e.id, e.price))
                    }
                </div>
            </div>
        </div>
    </>)
}