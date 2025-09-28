
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CategoryProducts from "./components/CategoryProducts";
import ProductDetails from "./components/ProductDetails";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Footer from "./components/Footer";

function App() {
  const { loading } = useSelector((state) => state.products);
 
  return (
    <>
    {loading && (
      <Loading/>
    )}
    <div className="App ">

            <Navbar />
            
      
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    
    <Footer/>

    </>
  );
}

export default App;
