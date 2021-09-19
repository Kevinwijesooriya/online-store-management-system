import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ itemimage, itemdescription, itemprice, itemname, productId }) => {
  return (
    <div className="product">
      <img src={`/images/${itemimage}`} alt={itemname} />

      <div className="product__info">
        <p className="info__name">{itemname}</p>

        <p className="info__description">{itemdescription.substring(0, 100)}...</p>

        <p className="info__price">${itemprice}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;