import { useState } from "react";

function AddItemForm() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(3);
    const [type, setType] = useState("food");
    const [quantity, setQuantity] = useState(1);

    return (
        <form>
            <label htmlFor="">Name: </label>
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
            />

            <label htmlFor="">Price (USD): </label>
            <input
                onChange={(e) => setPrice(Number(e.target.value))}
                type="number"
                value={price}
                min={0}
                max={10}
            />

            <label htmlFor="">Type: </label>
            <select
                onChange={(e) => setType(e.target.value)}
                name=""
                id=""
                value={type}
            >
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>

            <label htmlFor="">Quantity: </label>
            <input
                onChange={(e) => setName(Number(e.target.value))}
                type="number"
                min={1}
                max={5}
                value={quantity}
            />

            <button>Add New Item</button>
        </form>
    );
}

export default AddItemForm;
