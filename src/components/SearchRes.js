// src/components/SearchResults.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsSearch } from "../rtk/slices/products-slice";
import Card from "./Card";

function SearchRes() {
  const { query } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    if (query) {
      dispatch(productsSearch(query));
    }
  }, [query, dispatch]);

  return (
    <div className="container mt-4">
      {products.length > 0 ?(
        <>
          <h2 className="mb-5">Search About: {query}</h2>
          <Card products={products} />
        </>
      ) : (
        <p className="fs-2 text-center">product not found</p>
      )}
    </div>
  );
}
export default SearchRes;
