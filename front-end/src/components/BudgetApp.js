import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/scss/argon-design-system-react.scss";
import Header from './BudgetHeader';
import AddBudget from './AddBudget';
import AllBudget from './AllBudget';
import UpdateBudget from './UpdateBudget';
import Sidebar from './BudgetSidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { SidebarData } from '../Helpers/SidebarData';

function BudgetApp() {
  return (
    <Router>

      <div className="App" >
        <div className="header">
          <Header />
        </div>
        <Sidebar />
        <Route path="/budget/add" exact component={AddBudget} />
        <Route path="/budget/" exact component={AllBudget} />
        <Route path="/budget/budget" exact component={AllBudget} />
        <Route path="/budget/update/:id" exact component={UpdateBudget} />

      </div>
    </Router>

  );
}

export default BudgetApp
