import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainitem from './Mainitem';
import Newitem from"./Newitem";
import Navbar from"./Navbar";
import Additem from"./Additem";


function productApp() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Route path="/product" exact component={Additem} />
        <Route path="/product/display/:id" exact component={Newitem} />
      </div>
    </Router>


  );
}

export default productApp;
