import { Swiper, SwiperSlide } from "swiper/react";
import { CategoriesData } from "../data/categoriesImg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { FreeMode, Keyboard, Pagination } from "swiper/modules";
import { useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../rtk/slices/products-slice";
import { useNavigate } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    dispatch(fetchProductsByCategory(category));
    navigate(`/category/${category}`);
  };
  return (
    <>
<Swiper
  slidesPerView={6}
  freeMode={true}
  keyboard={true}
  pagination={{ clickable: true }}
  modules={[FreeMode, Pagination, Keyboard]}
  className="mySwiper container pb-5 mt-5"
>
  {CategoriesData.map((cat) => (
    <SwiperSlide
      key={cat.slug}
      onClick={() => handleCategoryClick(cat.slug)}
      className="d-flex justify-content-center"
    >
      <img
        src={cat.images[0]}
        alt={cat.slug}
        className="img-fluid"
        style={{
          width: "100%",      // يخلي الصورة تملأ السلايد
          height: "auto",     // يحافظ على الأبعاد
          objectFit: "contain",
          maxHeight: "150px", // ⬅️ تحدد أقصى ارتفاع عشان ما تبقاش ضخمة
        }}
      />
    </SwiperSlide>
  ))}
</Swiper>


    </>
  );
}
export default Categories;
