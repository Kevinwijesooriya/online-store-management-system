import '../App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
//import PaymentScreen from '../screens/PaymentScreen';

//components
import Navbar from './Navbar';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
import AllCart from './AllCart';
//import ProductApp from './ProductApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartReport from './Reports/CartReport';
import PlaceOrder from './PlaceOrder';
import MyProfileApp from './MyProfileApp';
import Footer from './Footer';


function CartApp() {

    const [sideToggle, setSideToggle] = useState(false);

    return (
        <Router>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            
            <main>
                <Switch>
                    <Route path="/profile" component={MyProfileApp} /> 
                    <Route exact path="/cart" component={HomeScreen} />
                    <Route exact path="/cart/product/:id" component={ProductScreen} />
                    <Route exact path="/cart/cart" component={CartScreen} />
                    <Route exact path="/cart/allcart" component={AllCart} />
                    <Route exact path="/cart/cartreport" component={CartReport} />
                    <Route exact path="/cart/placeorder" component={PlaceOrder} />
                    {/* <Route exact path="/cart/" component={ProductApp} /> */}
                    <Route exact path="/product/:id" component={ProductScreen} />
                    {/* <Route exact path="/paymant/pay/:id" component={PaymentScreen} /> */}
                </Switch>

            </main>
            
            
            <Footer/>
            
        </Router>

    );
}

export default CartApp;