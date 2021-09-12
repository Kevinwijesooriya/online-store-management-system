import './App.css';
import { useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SalaryPlanApp from './components/SalaryPlanApp';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
      <Router>
        <div className = "App">
      <SalaryPlanApp />     
    
    

        <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
         </Switch> 

      </main>
      </div>
    </Router> 

  );
}

export default App;
