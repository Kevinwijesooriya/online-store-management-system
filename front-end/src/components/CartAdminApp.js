import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Navigations/CartAdminHeader';
import AllCart from './AllCart';
import Sidebar from './Navigations/CartAdminSidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { SidebarData } from '../Helpers/SidebarData';

function CartAdminApp() {
    return (
        <Router>

            <div className="App" >
                <div className="header">
                    <Header />
                </div>
                <Sidebar />
                <Route path="/cartadmin/issuedcarts" exact component={AllCart} />

            </div>
        </Router>

    );
}

export default CartAdminApp


