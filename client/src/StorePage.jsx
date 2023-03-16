import React from "react";
import { Link } from "react-router-dom";

const StorePage = ({ item }) => {
    return (
        <div>
            <header>
                <Link to="/">Return</Link>
                <h1>{item}</h1>
            </header>
        </div>
    );
};

export default StorePage;
