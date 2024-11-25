import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Cart } from "./cart"; 
import { Shop } from "./shop";
import { ShopcontextProvider } from "./shopcontext";
import Checkout from './Checkout';

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <ShopcontextProvider> 
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Shop />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </Router>
                </ShopcontextProvider>
            </div>
        </div>
    );
}
