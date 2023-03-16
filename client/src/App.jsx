import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Culu's Vending Machine</h1>
                <h2>Select a food choice</h2>
                <Link to="/snacks">Snacks</Link>
                <Link to="/drinks">Drinks</Link>
            </div>
        </div>
    );
}

export default App;
