import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;