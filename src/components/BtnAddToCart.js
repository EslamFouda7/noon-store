import { useDispatch, useSelector } from "react-redux";
import { Slide, toast, ToastContainer } from "react-toastify";
import { addToCart } from "../rtk/slices/cart-slice";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

function BtnAddToCart({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

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

  return (
    <>
      <button
        className="btn btn-primary fs-5 d-flex justify-content-center"
        onClick={handelBtn}
      >
        <FaCartArrowDown />
      </button>
      <ToastContainer />
    </>
  );
}

export default BtnAddToCart;
