

import LoginANDregister from './loginANDregisterApp';





import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import SalaryPlanApp from './components/SalaryPlanApp';
import ProductApp from './components/ProductApp';
import CartApp from './components/CartApp';
import CartAdminApp from './components/CartAdminApp';
import AdminHome from './components/AdminHome';
import AddBudget from './components/AddBudget';
import AllBudget from './components/AllBudget';
import UpdateBudget from './components/UpdateBudget';
import AddSalaryPlan from './components/AddSalaryPlan';
import AllSalaryPlans from './components/AllSalaryPlans';
import UpdateSalaryPlan from './components/UpdateSalaryPlan';
import Footer from './components/Footer';
import Addinquiry from './components/Addinquiry';
import Rating from './components/Rating';
import inquriyM from './components/inquriyM';
import OrderList from "./components/OrderList";
import UpdateOrder from "./components/UpdateOrder";
import PlaceOrder from "./components/PlaceOrder";
import ConfirmOrder from "./components/ConfirmOrder";
import myProfile from "./components/myProfile";
import Editinquiry from './components/Editinquiry';
import AllAdminfeedback from './components/AllAdminfeedback';
import Addadminfeedback from './components/AddAdminfeedback';
import UpdateAdminfeedback from './components/UpdateAdminfeedback';
import Additem from"./components/Additem";
import updateitem from"./components/updateitem";
import deleteitem from"./components/deleteitem";
import itemnav from './components/itemnav';
import Mainitem from './components/Mainitem';



function App() {

  return (
    <Router>
      <div className="App">

      <LoginANDregister/>

        {/* <Route path="/salaryplan" exact component={SalaryPlanApp} /> */}
        <Route path="/cart" component={CartApp} />
        <Route path="/cartadmin" component={CartAdminApp} />
        
        <Route path="/AdminHome" component={AdminHome} />

        {/* Budget function */}
        <Route path="/budget/add" exact component={AddBudget} />
        <Route path="/budget/" exact component={AllBudget} />
        <Route path="/budget/budget" exact component={AllBudget} />
        <Route path="/budget/update/:id" exact component={UpdateBudget} />

        {/*order routes*/}  
        <Route path="/orderlist" exact component={OrderList} />
        <Route path="/updateorder/:id" component={UpdateOrder} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Route path="/confirmorder" component={ConfirmOrder} />  
              
        {/* Salary Plan function */}
        <Route path="/salaryplan/add" exact component={AddSalaryPlan} />
        <Route path="/salaryplan/" exact component={AllSalaryPlans} />
        <Route path="/salaryplan/salaryplan" exact component={AllSalaryPlans} />
        <Route path="/salaryplan/update/:id" exact component={UpdateSalaryPlan} />

        {/* AdminFeedback function */}
        <Route path="/adminfeedback/add" exact component={Addadminfeedback} />
        <Route path="/adminfeedback/" exact component={AllAdminfeedback} />
        <Route path="/adminfeedback/adminfeedback" exact component={AllAdminfeedback} />
        <Route path="/adminfeedback/update/:id" exact component={UpdateAdminfeedback} />
        {/* Item function */}
        <Route path="/product/" exact component={itemnav} />
        <Route path="/productadd" exact component={Additem} />
        <Route path="/productdelete" exact component={deleteitem} />
        <Route path="/product" exact component={Mainitem} />
        <Route path="/update/:id" exact component={updateitem} />

        {/* inquriy and feedback routes */}
        <Route path="/Addinquiry" component={Addinquiry} />
        {/* <Route  path="/Rating"   component={Rating}/> */}
        <Route path="/inquriyM" component={inquriyM} />
        <Route path="/myProfile" component={myProfile}/>
        {/* <Route path="/myProfile/Myinquriy/:id" component={Editinquiry}/>  */}
        {/* appiction footer */}
      
      </div>
    </Router>


  );


  
}

export default App;
