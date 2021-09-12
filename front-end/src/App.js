import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom'
import SalaryPlanApp from './components/SalaryPlanApp';

function App() {
  return (
    <Router>
    <div className = "App">
      <SalaryPlanApp />     
    
    </div>
    </Router>

  );
}

export default App;
