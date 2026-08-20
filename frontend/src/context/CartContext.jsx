import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <Link to="/" className="navbar-logo">
                    DealDunia
                </Link>

                {/* Navigation Links */}
                <nav className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/deals">Deals</Link>
                </nav>

                {/* Search */}
                <div className="navbar-search">
                    <Search size={18} />

                    <input
                        type="text"
                        placeholder="Search products..."
                    />
                </div>

                {/* Actions */}
                <div className="navbar-actions">

                    <Link to="/cart" className="navbar-action">
                        <ShoppingCart size={21} />
                        <span>Cart</span>
                    </Link>

                    <Link to="/login" className="navbar-action">
                        <User size={21} />
                        <span>Login</span>
                    </Link>

                </div>

            </div>
        </header>
    );
}

export default Navbar;