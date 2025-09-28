import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import Card from "./Card";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Marquee from "./Marquee";

function Products() {
  const { items, isSearching } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isSearching) {
      dispatch(fetchProducts());
    }
  }, [dispatch, isSearching]);

  return (
    <>
      {!isSearching && (
        <>
          <Carousel images={["imge1.gif", "imge2.avif", "imge3.avif"]} />
          <Categories />
        </>
      )}
      <Marquee />
      <div className="container mt-5">
        <Card products={items} />
      </div>
      <Marquee />
    </>
  );
}
export default Products;
