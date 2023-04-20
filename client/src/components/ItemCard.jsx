import React from "react";
import "./ItemCard.css"

function ItemCard({ item }) {
    return (
        <article className="ItemCard">
            <h1>{item.name}</h1>
            <span>Price: ${item.price}</span>
            <span>Type : {item.type}</span>
            <span>Quantity: {item.quantity}</span>
        </article>
    );
}

export default ItemCard;
