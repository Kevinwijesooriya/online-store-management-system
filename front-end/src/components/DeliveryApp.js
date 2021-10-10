import './../App.css';
import DeliveryHeader from './DeliveryHeader';
import AddCusDeliveryDetails from './AddCusDeliveryDetails'
import AllDeliveryDetails from './AllDeliveryDetails';
import AddCourierCompany from './AddCourierCompany';
import AllCourierDetails from './AllCourierDetails';
import {BrowserRouter as Router, Route} from "react-router-dom" 
import UpdateDeliveryDetails from './UpdateDeliveryDetails';
import UpdateCourierDetails from './UpdateCourierDetails';
import DeliveryReport from './Reports/DeliveryReport';

function DeliveryApp() {
    return (
      <Router>
          <div>
            <DeliveryHeader/>
            <Route path="/delivery" exact component={AllDeliveryDetails}/> 
            <Route path="/deli/add" exact component={AddCusDeliveryDetails}/> 
            <Route path="/courier" exact component={AllCourierDetails}/> 
            <Route path="/cou/add" exact component={AddCourierCompany}/> 
            <Route path="/delivery/update/:id" exact component={UpdateDeliveryDetails}/> 
            <Route path="/courier/update/:id" exact component={UpdateCourierDetails}/> 
            <Route path="/courier/report" exact component={DeliveryReport}/> 
            
  
          </div>
     </Router>
    );
  }
  
  export default DeliveryApp;
  