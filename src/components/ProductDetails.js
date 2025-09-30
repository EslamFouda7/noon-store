import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productById } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaAward, FaRegClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Slide, toast, ToastContainer } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(productById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (product) {
      setQuantity(product.minimumOrderQuantity || 1);
    }
  }, [product]);

  const handelBtn = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success("Added to cart !", {
      position: "top-center",
      autoClose: 4000,
      theme: "dark",
      transition: Slide,
      style: { maxWidth: "90%" },
    });
  };
  if (!product) return <h2>No product found</h2>;
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-4 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-5">
            {product.brand ? (
              <p>
                <img src="/Verified.png" alt="e" width={20} /> {product.brand}
              </p>
            ) : (
              ""
            )}
            <h2 className="mb-3">{product.title}</h2>
            <p>{product.description}</p>
            <p className="fw-bold fs-4">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
              <span className="ms-2 fs-6 text-decoration-line-through text-secondary">
                {product.price}
              </span>
              <span className="text-success fs-6 ms-2">
                {product.discountPercentage}%
              </span>
            </p>
            <Swiper
              className="mySwiper pb-5"
              modules={[Autoplay, Pagination]} 
              pagination={{ dynamicBullets: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {product.images &&
                product.images.map((img) => (
                  <>
                    <SwiperSlide key={img}>
                      <img src={img} alt="" className="w-100 h-100" />
                    </SwiperSlide>
                  </>
                ))}
            </Swiper>
          </div>
          <div className="col-lg-3 pb-5">
            <hr />
            <div class="row mt-4 text-muted">
              <p>
                <FaAward /> {product.warrantyInformation}
              </p>
              <p>
                <FaRegClock /> {product.shippingInformation}
              </p>
              <p>
                <FaClockRotateLeft /> {product.returnPolicy}
              </p>
              <p class="fw-bold text-success">{product.availabilityStatus}</p>
              <p>weight: {product.weight}</p>
              <p>stock quantity: {product.stock}</p>
            </div>
            <hr />
            <div className="row px-3">
              <button className="btn btn-primary" onClick={handelBtn}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
export default ProductDetails;
