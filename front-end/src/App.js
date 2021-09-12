import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SalaryPlanApp from './components/SalaryPlanApp';
import CartApp from './components/CartApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/salaryplan" exact component={SalaryPlanApp} />
        <Route path="/cart" exact component={CartApp} />
      </div>
    </Router>


  );
}

export default App;
