import React from "react";

function ItemCard({ item }) {
    return (
        <article>
            <h1>{item.name}</h1>
            <span>$3</span>
        </article>
    );
}

export default ItemCard;
