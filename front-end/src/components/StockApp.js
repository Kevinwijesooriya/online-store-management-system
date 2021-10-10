import '../App.css';
import StockHeader from './StockHeader';
import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import EditProducts from './EditProducts';
import ItemIssue from './ItemIssue';
import IssueDetails from './IssueDetails';
import EditItemIssue from './EditItemIssue';
import AvailableStock from './AvailableStock';
import StockReport from './Reports/StockReport'
import {BrowserRouter as Router, Route} from "react-router-dom"

function StockApp() {
  return (
    <Router>
      <div>
        
        <StockHeader/>
        <Route path="/Stock" exact component={AvailableStock}/>
        <Route path="/Stock/add" exact component={AddProduct}/>&nbsp; &nbsp;
        <Route path="/Stock/viewItems" exact component={AllProducts}/>
        <Route path="/Stock/issue" exact component={ItemIssue}/>&nbsp; &nbsp;
        <Route path="/Stock/issueDetails" exact component={IssueDetails}/>
        <Route path="/product/update/:id" exact component={EditProducts}/>
        <Route path="/issueitem/update/:id" exact component={EditItemIssue}/>
        <Route path="/Stock/reports" exact component={StockReport}/>
        

    </div>
    </Router>
    
  );
}

export default StockApp;

