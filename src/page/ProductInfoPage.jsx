import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

import "../styles/container.css"
import "../styles/productInfo.css"


export default function ProductInfo() {

    const [productData, setProductData] = useState([])

    const { productId } = useParams()

    const fetchProductData = async () => {
        console.log(productId);

        const response = await fetch("http://localhost:8080/product/" + productId)
        let data = await response.json()
        setProductData(data);
    }

    useEffect(() => {
        fetchProductData()
    }, [])


    return (
        <>
            <Header></Header>
            <NavBar></NavBar>

            <div className="set-container">
                <div className="padding-top-div padding-bottom-div">
                    <div className="product-info">
                            <div className="img-product">
                                <img src={productData.displayImage}></img>
                            </div>

                            <div className="info">
                                <p className="product-name">{productData.name}</p>
                                <p className="price-item">Giá bán: {productData.price}đ</p>
                                <p>Số lượng: {productData.quantity}</p>
                                <p className="product-description">Mô tả: {productData.description}</p>
                            </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}