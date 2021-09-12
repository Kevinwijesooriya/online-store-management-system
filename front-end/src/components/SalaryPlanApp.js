import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import AddSalaryPlan from './AddSalaryPlan';
import AllSalaryPlans from './AllSalaryPlans';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import { SidebarData } from '../Helpers/SidebarData';

function SalaryPlanApp() {
  return (
    <Router>

      <div className="App" >
        <div className="header">
          <Header />
        </div>
        <Sidebar />
        <Route path="/salaryplan/add" exact component={AddSalaryPlan} />
        <Route path="/salaryplan/" exact component={AllSalaryPlans} />
        <Route path="/salaryplan/salaryplan" exact component={AllSalaryPlans} />

      </div>
    </Router>

  );
}

export default SalaryPlanApp
