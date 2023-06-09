import { useEffect, useState } from "react";
import "./App.css";
import ItemCard from "./components/ItemCard";
import AddItemForm from "./components/AddItemForm";

const SERVER_URL = "http://localhost:3000/api";

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getVendingMachineItems = async () => {
            const res = await fetch(`${SERVER_URL}/items`);
            const { data } = await res.json();

            setItems(data);
        };

        getVendingMachineItems();
    }, []);

    return (
        <div className="App">
            <div>
                <h1>Culu's Vending Machine</h1>
                <AddItemForm />
                <h2>Select a food choice</h2>
                {/* <Link to="/snacks">Snacks</Link>
                <Link to="/drinks">Drinks</Link> */}

                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default App;
