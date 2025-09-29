import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, fetchProducts } from "../rtk/slices/products-slice";
import Card from "./Card";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Marquee from "./Marquee";

function Products() {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel images={["imge1.gif", "imge2.avif", "imge3.avif"]} />
      <Categories />
      <Marquee />
      <div className="container mt-5">
        <Card products={items} />
      </div>
      <Marquee />
    </>
  );
}
export default Products;
