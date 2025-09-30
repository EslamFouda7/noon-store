import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateCartQuantity } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = cart
    .reduce(
      (acc, product) =>
        acc +
        (product.price - (product.price * product.discountPercentage) / 100) *
          product.quantity,
      0
    )
    .toFixed(2);

  return (
    <>
      <section className="cart pb-5 pt-5">
        <div className="container">
          <h2 className="mb-4">
            Cart <span className="fs-5 fw-light">({cart.length} items)</span>
          </h2>
          <div className="row d-flex justify-content-between">
            <div className="col-lg-8">
              {cart.map((product) => (
                <div className="row bg-white border border-info-subtle rounded p-3 mb-4" key={product.id}>
                  <div className="col-md-3">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="img-fluid rounded"
                    ></img>
                  </div>
                  <div className="col-md-9  p-3">
                    <h4>{product.title}</h4>
                    <p className="fw-bold fs-4">
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}
                      <span className="ms-3 fs-6 text-decoration-line-through text-secondary">
                        {product.price}
                      </span>
                      <span className="text-success fs-6">
                        {product.discountPercentage} %
                      </span>
                    </p>
                    <div className="d-flex gap-2 mb-3">
                      <p className="fw-bold text-secondary d-flex">Qty</p>
                      <select
                        className="form-select"
                        name="quantity"
                        value={product.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateCartQuantity({
                              id: product.id,
                              quantity: Number(e.target.value),
                            })
                          )
                        }
                      >
                        {Array.from(
                          {
                            length:
                              product.stock - product.minimumOrderQuantity + 1,
                          },
                          (_, i) => i + product.minimumOrderQuantity
                        ).map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>
                    <p className="fw-bold fs-6">
                      Total: $
                      {(
                        (product.price -
                          (product.price * product.discountPercentage) / 100) *
                        product.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteFromCart(product))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="col-lg-3 border border-info-subtle rounded p-3 ">
              <h6>Order Summary</h6>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <p className="text-body-tertiary">
                  Subtotal ({cart.length} items)
                </p>
                <p className="fw-bold">{total} $</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="text-body-tertiary">Shipping Fee</p>
                <p className="fw-bold text-success">Free</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="fw-bold">Total</p>
                <p className="fw-bold text-success">{total} $</p>
              </div>
              <button className="btn btn-primary w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cart;
