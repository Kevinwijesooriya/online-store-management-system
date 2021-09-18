import './Product.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom';

const Product = ({itemname,itemimage,itemcategory,itembrand,itemcolor,itemprice,itemqty,itemdescription,_id}) => {
    return (
        <div className="product">
            <img src={itemimage} alt={ itemimage}/>

            <div className="product__info">
                <p className="info__name">{itemname}</p>
                <p className="info__description">
                 {itemdescription.substring(0,100)}...
                 </p>
                 <p className="info__price">${itemprice}</p>
                   <Link to={`/product/${_id}`} className="info__button">View</Link>
            </div>
            <a href="#">Product</a>
        </div>
    )
}

export default Product