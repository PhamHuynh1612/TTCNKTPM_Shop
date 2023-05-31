import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NavBar from "../components/NavBar"

import "../styles/container.css"


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
                <div className="product-info padding-top-div padding-bottom-div">
                    <div className="img-product">
                        <img src={productData.displayImage}></img>
                    </div>

                    <div className="product-info">

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}