import UserAdminHeader from './components/UserAdminHeader';
import UserAdminMainHtaml from './components/UsrAdminpage';
import AdminRegisterScreen from './components/AdminRegisterscreen';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import NoteList from './components/NoteList';
import SalaryPlanApp from './components/SalaryPlanApp';


import {BrowserRouter as Router , Route}  from "react-router-dom"
import React from "react";
import AddBudget from './components/AddBudget';
import AllBudget from './components/AllBudget';
import UpdateBudget from './components/UpdateBudget';
import AddSalaryPlan from './components/AddSalaryPlan';
import AllSalaryPlans from './components/AllSalaryPlans';
import UpdateSalaryPlan from './components/UpdateSalaryPlan';

function UserAdminMainjs() {

    return (
  
      <Router>
      <div className = "container">
  
      
         <UserAdminHeader/>
         {/* <Route path="/salaryplan"  component={SalaryPlanApp}/> */}
         <Route path="/UserAdminMainHtaml" exact component={UserAdminMainHtaml}/>
         <Route path="/AdminRegister" exact component={AdminRegisterScreen}/>
         <Route path="/noteList" exact component={NoteList}/>
        <Route path="/noteEdit/:id" exact component={EditNote}/>
        <Route path="/CreateNotes" exact component={CreateNote}/>


        {/* Budget function */}
        {/* <Route path="/budget/add" exact component={AddBudget} />
        <Route path="/budget/" exact component={AllBudget} />
        <Route path="/budget/budget" exact component={AllBudget} />
        <Route path="/budget/update/:id" exact component={UpdateBudget} /> */}

        {/* Salary Plan function */}
        {/* <Route path="/salaryplan/add" exact component={AddSalaryPlan} />
        <Route path="/salaryplan/" exact component={AllSalaryPlans} />
        <Route path="/salaryplan/salaryplan" exact component={AllSalaryPlans} />
        <Route path="/salaryplan/update/:id" exact component={UpdateSalaryPlan} /> */}
      
        
     
       
       
        
    
      </div>
      </Router>
    );
  
  
    
  }
  
  export default UserAdminMainjs;
  