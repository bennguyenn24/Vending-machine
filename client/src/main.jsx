import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StorePage from "./StorePage"
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<App />} path="/"/>
                <Route element={<StorePage item={"snacks"}/>} path="/snacks"/>
                <Route element={<StorePage item={"drinks"}/>} path="/drinks"/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
