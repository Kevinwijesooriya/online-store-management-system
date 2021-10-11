import '../App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
//import PaymentScreen from '../screens/PaymentScreen';

//components
import Navbar from './Navbar';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
//import ProductApp from './ProductApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebars/UserSidebar';
import AllDeliveryDetails from '../components/AllDeliveryDetails';
import CartApp from './CartApp';
import Myrating from './Myrating';
import OrderList from './OrderList';
import Footer from './Footer';
import Myinquriy from './Myinquriy';
import Editrateing from './Editrateing';
import Editinquiry from './Editinquiry';


function MyProfileApp() {

    const [sideToggle, setSideToggle] = useState(false);

    return (
        
        <Router>            
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <div className="content">            
            <Sidebar/>
            <main>
                <Switch>                
                <Route path="/profile" exact component={AllDeliveryDetails} />
                <Route path="/profile/Myinquriy" exact component={Myinquriy} />
                <Route path="/profile/delivery" exact component={AllDeliveryDetails} />
                <Route path="/profile/comment" exact component={Myrating} />
                <Route path="/profile/orderlist" exact component={OrderList} />
                <Route path="/Profile/Myrating/:id" component={Editrateing}/> 
                <Route path="/Profile/EdtI/:id" component={Editinquiry}/> 
            {/* <Route path="/admin/Adminlogin" exact component={AdminLogin} />
            <Route path="/admin/AdminMain" exact component={AdminMain} /> */}
                </Switch>                
            </main>
            </div>
            <Footer/>
        </Router>

    );
}

export default MyProfileApp;