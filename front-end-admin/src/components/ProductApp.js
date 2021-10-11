import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainitem from './Mainitem';
import Newitem from"./Newitem";
import Navbar from"./Navbar";
import Additem from"./Additem";
import updateitem from"./updateitem";
import deleteitem from"./deleteitem";
import itemnav from './itemnav';

function productApp() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
    
       
      </div>
    </Router>


  );
}

export default productApp;
