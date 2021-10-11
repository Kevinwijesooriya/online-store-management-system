import './CartItem.css';
import {Link} from 'react-router-dom';

const OrderItem = ({item}) => {
    return <div className="cartitem">
            
            <div className="cartitem__image">
                <img width="60%" height="70%" src={`/images/${item.imageUrl}`} alt={item.name}/>
            </div>
            <p>{item.name}</p>
            <p className="cartitem__price">${item.price}</p>
            <p className="cartitem__price">Qty :{item.qty}</p>
    </div>;
};

export default OrderItem;