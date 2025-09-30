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
import SearchRes from "./components/SearchRes";
import NotFound from "./components/NotFound";


function App() {
  const { loading } = useSelector((state) => state.products);
 
  return (
    <>
    {loading && (
      <Loading/>
    )}
    <div className="App ">

            <Navbar />
            
      <main>
        <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search/:query" element={<SearchRes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>
      
    </div>
    
    <Footer/>

    </>
  );
}

export default App;
