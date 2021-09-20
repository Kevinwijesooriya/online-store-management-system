import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SalaryPlanApp from './components/SalaryPlanApp';
import ProductApp from './components/ProductApp';
import CartApp from './components/CartApp';
import CartAdminApp from './components/CartAdminApp';
import Footer from './components/Footer';
import Addinquiry from './components/Addinquiry';
import Rating from './components/Rating';
import inquriyM from './components/inquriyM';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/salaryplan" exact component={SalaryPlanApp} />
        <Route path="/cart" exact component={CartApp} />
        <Route path="/cartadmin" exact component={CartAdminApp} />
         <Route path="/product" exact component={ProductApp} />  
         
         
         


        {/* inquriy and feedback routes */}
         <Route  path="/Addinquiry"   component={Addinquiry}/>
         {/* <Route  path="/Rating"   component={Rating}/> */}
         <Route  path="/inquriyM"   component={inquriyM}/>


         {/* appiction footer */}
         <Route  path="/"   component={Footer}/>
      </div>
    </Router>


  );
}

export default App;
