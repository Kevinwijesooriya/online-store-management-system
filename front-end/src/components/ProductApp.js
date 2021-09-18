import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainitem from './Mainitem';
import Newitem from"./Newitem";
import Navbar from"./Navbar";


function productApp() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Route path="/cart" exact component={Mainitem} />
        <Route path="/product/display/:id" exact component={Newitem} />
      </div>
    </Router>


  );
}

export default productApp;
