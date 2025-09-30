import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, fetchProducts } from "../rtk/slices/products-slice";
import Card from "./Card";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Marquee from "./Marquee";
import ReactPaginate from "react-paginate";

function Products() {
  const { items, total, limit } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchProducts({ limit: 10, skip: page * 10 }));
  }, [page, dispatch]);

   const pageCount = Math.ceil(total / limit);

  return (
    <>
      <Carousel images={["imge1.gif", "imge2.avif", "imge3.avif"]} />
      <Categories />
      <Marquee />
      <div className="container mt-5">
        <Card products={items} />

         {/* الباجنيشن */}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(e) => setPage(e.selected)}
        containerClassName={"pagination justify-content-center mt-4 flex-wrap w-100"}
        pageClassName={"page-item mx-2 mb-3"}
        pageLinkClassName={"page-link rounded-circle"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link rounded-circle"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link rounded-circle"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link rounded-circle"}
        activeClassName={"active"}
      />
      </div>
      <Marquee />
    </>
  );
}
export default Products;
