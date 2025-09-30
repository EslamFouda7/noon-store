import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSearch, fetchProducts } from "../rtk/slices/products-slice";
import Card from "./Card";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Marquee from "./Marquee";
import ReactPaginate from "react-paginate";

function Products() {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // باجنشن
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  // هات كل المنتجات مرة واحدة
  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchProducts({ limit: 0, skip: 0 })); 
  }, [dispatch]);

  // المنتجات اللي هتتعرض في الصفحة الحالية
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // عدد الصفحات بالظبط
  const pageCount = Math.ceil(items.length / itemsPerPage);

  return (
    <>
      <Carousel images={["imge1.gif", "imge2.avif", "imge3.avif"]} />
      <Categories />
      <Marquee />
      <div className="container mt-5">
        <Card products={currentItems} />

        {/* الباجنيشن */}
        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={(e) => setPage(e.selected)}
            containerClassName={
              "pagination justify-content-center mt-4 flex-wrap w-100"
            }
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
        )}
      </div>

      <Marquee />
      <Carousel images={["noon.avif", "CIB.gif", "valu.avif"]} />
    </>
  );
}

export default Products;
