import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../noon-logo-en.svg";
import { useState } from "react";
import { fetchProducts, productsSearch } from "../rtk/slices/products-slice";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
  e.preventDefault();
  const searchQuery = e.target.search.value.trim();
  if (searchQuery !== "") {
    navigate(`/search/${searchQuery}`);
   
  }
  else{
    navigate("/")
  }
};
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-custom-yellow">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" className="w-50"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fw-bold"
            id="navbarSupportedContent"
          >
            <form className="d-flex flex-grow-1" role="search" onSubmit={handleSearch}>
              <input
                className="form-control m-3"
                name="search"
                type="search"
                placeholder="What are you looking for?"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-secondary"
                  aria-current="page"
                  to="/"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link position-relative text-secondary"
                  to="/cart"
                >
                  Cart <FaCartArrowDown />
                  <span className=" position-absolute top-0 start-90 text-white bg-primary rounded-circle px-2">
                    {cart.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
