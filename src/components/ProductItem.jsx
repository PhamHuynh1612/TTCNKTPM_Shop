import "../styles/container.css"

import React from "react"

export default function ProductItem(props) {
    return (
        <>
            <div className="product-item">
                <a href={"/product/" + props.id}><img src={props.image} width={160} max-height={160} alt="AnhSP"></img></a>
                <a href={"/product/" + props.id}><p className="name-item">{props.name}</p></a>
                <p className="price-item">Giá: {props.price}</p>
            </div>
        </>
    )
}