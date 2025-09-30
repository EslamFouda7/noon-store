import { Link } from "react-router-dom";
import BtnAddToCart from "./BtnAddToCart";

function Card({ products }) {
  return (
    <div className="row">
      {Array.isArray(products) &&
        products.map((product) => (
          <div className="col-md-6 col-lg-3 mb-5" key={product.id}>
            <div className="card h-100">
              <Link
                to={`/product/${product.id}`}
                className="text-decoration-none text-dark flex-grow-1"
              >
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="fw-bold fs-5">
                    $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                    <span className="ms-2 fs-6 text-decoration-line-through text-secondary">
                      {product.price}
                    </span>
                    <span className="text-success fs-6">
                      {product.discountPercentage}%
                    </span>
                  </p>
                </div>
              </Link>
              <div className="card-footer bg-white border-0 d-flex justify-content-end ">
                <BtnAddToCart />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
