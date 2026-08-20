import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo">
                    Deal<span>Dunia</span>
                </Link>

                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/deals">Deals</Link>
                </nav>

                <div className="navbar-search">
                    <Search size={16} />
                    <input type="text" placeholder="Search products..." />
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="navbar-action">
                        <ShoppingCart size={20} />
                        <span>Cart</span>
                    </Link>
                    <Link to="/login" className="navbar-action navbar-action--primary">
                        <User size={20} />
                        <span>Login</span>
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Navbar;