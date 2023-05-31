import "../styles/category.css"

import React from "react"

export default function CategoryItem(props) {
    return (
        <>
            <div className="category-item">
                <button><p>{props.name}</p></button>
            </div>
        </>
    )
}