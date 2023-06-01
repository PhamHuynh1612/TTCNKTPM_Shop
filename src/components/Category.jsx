import "../styles/container.css"
import "../styles/category.css"

import * as React from "react";
import { useState, useEffect } from "react";

import CategoryItem from "./CategoryItem"
import ProductItem from "./ProductItem";

export default function Category() {

    const [categorys, setCategorys] = useState([])
    const [products, setProducts] = useState([])


    const fetchCategorys = async () => {
        const response = await fetch("http://localhost:8080/category/all", {
            method: "GET",
        })

        const data = await response.json()
        setCategorys(data)
        return true;
    }

    async function fetchProductByCategory(categoryId) {
        const response = await fetch("http://localhost:8080/product/category/" + categoryId)
        const data = await response.json()
        setProducts(data)
    }

    async function fetchDefaultProductsByFirstCategory() {
        if (categorys.length > 0) {
            console.log("GOT ");
            fetchProductByCategory(categorys[0].id)
        }
    }


    useEffect(() => {
        async function defaultFetch() {
            const categoryResponse = await fetch("http://localhost:8080/category/all", {
                method: "GET",
            })

            const categoryData = await categoryResponse.json()
            const productsResponse = await fetch("http://localhost:8080/product/category/" + categoryData[0].id)
            setCategorys(categoryData)
            const productsData = await productsResponse.json()
            setProducts(productsData)
        }
        defaultFetch()
    }, [])

    function makeCategoryItem(id, name) {
        return <>
            <CategoryItem id={id} name={name} onClick={() => fetchProductByCategory(id)}></CategoryItem>
        </>
    }

    return (
        <>
            <div className="category-page-all"  style={{ height : window.screen.height}}>
                <div className="list-category" style={{ flex: 1 }}>
                    <label className="container-heading">DANH MỤC SẢN PHẨM</label>
                    {
                        categorys && categorys.map(e => makeCategoryItem(e.id, e.name))
                    }
                </div>
                <div className="list-product-category">
                    <div className="list-product">
                        {products && products.map(e => <ProductItem id={e.id} image={e.displayImage} name={e.name} price={e.price}></ProductItem>)}
                    </div>
                </div>

            </div>
        </>
    )
}