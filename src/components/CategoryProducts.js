import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../rtk/slices/products-slice";
import Card from "./Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Carousel from "./Carousel";
import { CategoriesData } from "../data/categoriesImg";
import Loading from "./Loading";

function CategoryProducts() {
  const { category } = useParams();
  const { items, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [category, dispatch]);
  const currentCategory = CategoriesData.find((cat) => cat.slug === category);
  return (
    <>
      {currentCategory?.images && (
        <Carousel images={currentCategory.images.slice(1)} />
      )}
      <div className="container">
        <h2 className="mb-4">Category / {category}</h2>
        <Card products={items} />
      </div>
    </>
  );
}
export default CategoryProducts;
