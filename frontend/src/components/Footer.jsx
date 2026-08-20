import { Link } from "react-router-dom";
import {Mail, Phone, Globe, MessageCircle} from "lucide-react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        DealDunia
                    </Link>

                    <p>
                        Discover amazing products, compare prices,
                        and find the best deals all in one place.
                    </p>

                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook">
                            <Facebook size={19} />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <Instagram size={19} />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <Twitter size={19} />
                        </a>

                        <a href="#" aria-label="YouTube">
                            <Youtube size={19} />
                        </a>
                    </div>
                </div>

                {/* Shop */}
                <div className="footer-column">
                    <h3>Shop</h3>

                    <Link to="/products">All Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/deals">Today's Deals</Link>
                    <Link to="/products?sort=popular">
                        Trending
                    </Link>
                </div>

                {/* Customer Service */}
                <div className="footer-column">
                    <h3>Customer Service</h3>

                    <Link to="/contact">Contact Us</Link>
                    <Link to="/faq">FAQs</Link>
                    <Link to="/shipping">Shipping Information</Link>
                    <Link to="/returns">Returns & Refunds</Link>
                </div>

                {/* Account */}
                <div className="footer-column">
                    <h3>My Account</h3>

                    <Link to="/login">Login</Link>
                    <Link to="/register">Create Account</Link>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/cart">Shopping Cart</Link>
                </div>

                {/* Contact */}
                <div className="footer-column">
                    <h3>Get In Touch</h3>

                    <div className="footer-contact">
                        <Mail size={17} />
                        <span>support@dealdunia.com</span>
                    </div>

                    <div className="footer-contact">
                        <Phone size={17} />
                        <span>+91 00000 00000</span>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">

                <p>
                    © 2026 DealDunia. All rights reserved.
                </p>

                <div className="footer-bottom-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

            </div>

        </footer>
    );
}

export default Footer;