
import { Link } from "react-router-dom";

function Card({ products }) {


  return (
    <>
      <div className="row">
        {Array.isArray(products) &&
          products.map((product) => (
            <div className="col-md-6 col-lg-3 mb-5" key={product.id}>
              <Link to={`/product/${product.id}`} className="text-decoration-none">
              <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body" style={{ height: "150px" }}>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="fw-bold fs-5">
                    ${(product.price - (product.price * product.discountPercentage) / 100).toFixed(2)}
                    <span className="ms-2 fs-6 text-decoration-line-through text-secondary">
                      {product.price}
                    </span>
                    <span className="text-success fs-6"> {product.discountPercentage}%</span>
                  </p>
                </div>
              </div>
              </Link>
              
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
