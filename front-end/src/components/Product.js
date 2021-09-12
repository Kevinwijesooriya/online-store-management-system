import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <img src="https://www.asus.com/media/odin/websites/global/News/6lp6uepkp4p10fxd/ROGphone5series.png" alt="product name"/>

            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                 lorem ipsum dolor sit nkdjnskjnan
                 </p>
                 <p className="info__price">$499.99</p>
                   <Link to={'/product/${1111}'} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product