import "../styles/container.css"
import "../styles/category.css"

import * as React from "react";
import { useState, useEffect } from "react";

import CategoryItem from "./CategoryItem"

export default function Category() {

    const [categorys, setCategorys] = useState([])

    const fetchCategorys = async () => {
        const response = await fetch("http://localhost:8080/category/all", {
            method: "GET",
        })

        const data = await response.json()
        setCategorys(data)
    }

    useEffect(() => {
        fetchCategorys()
    }, [])

    function makeCategoryItem(id, name) {
        return <>
            <CategoryItem id={id} name={name}></CategoryItem>
        </>
    }

    return (
        <>
            <div className="set-container category-page-all">
                <div className="list-category">
                    <label className="container-heading">DANH MỤC SẢN PHẨM</label>
                    {
                        categorys && categorys.map(e => makeCategoryItem(e.id, e.name))
                    }
                </div>

                <div className="list-product-category">

                </div>
            </div>
        </>
    )
}