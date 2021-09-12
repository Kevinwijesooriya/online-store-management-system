import './ProductScreen.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from '../redux/actions/cartActions';
import Product from '../components/Product';


const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

const addToCartHandler = () => {
    dispatch(addToCart(Product._id, qty));
    history.push("/cart");
};
    return (
    <div className="productscreen">
        <div className="productscreen__left">
          <div className="left__image">
              <img src="https://www.asus.com/media/odin/websites/global/News/6lp6uepkp4p10fxd/ROGphone5series.png"
               alt="product name"/>
              </div>  

              <div className="left__info">
                  <p className="left__name">Product 1</p>
                  <p>Price: $499.99</p>
                  <p>Description: welcome to the shop</p>
              </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
               Price: <span>$499.99</span> 
            </p>
            <p>
                Status: <span>{Product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</span>
            </p>
            <p>
                Qty
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </p>
            <p>
                <button type="button" onClick={addToCartHandler}>Add to Cart</button>
            </p>
          </div>  
        </div>
    </div>
    )
}

export default ProductScreen