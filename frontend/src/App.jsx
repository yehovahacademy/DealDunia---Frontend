import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;