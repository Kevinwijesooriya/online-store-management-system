
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../actions/Cusations";


const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
//////////////////////////////////////////////////////


  const history = useHistory();

  const dispatch = useDispatch()
  const cusLogin= useSelector((state) => state.cusLogin);
  const { userInfo } = cusLogin;

  const logoutHandler = () => {
   dispatch(logout());
   history.push("/");    

  };

  return (
    <nav className="navbar">
      <div className="navbar__logo h2">
        <h2>V-Tech</h2>
      </div>

      <ul className="navbar__links">

      <li>
          <Link><a onClick = {logoutHandler}>Log out</a></Link>
        </li>

        <li>
          <Link to="/cart/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/cart">Shop</Link>
        </li>
        
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;