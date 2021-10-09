import UserAdminHeader from './components/UserAdminHeader';
import UserAdminMainHtaml from './components/UsrAdminpage';
import AdminRegisterScreen from './components/AdminRegisterscreen';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import NoteList from './components/NoteList';
import StockApp from './components/StockApp';

import {BrowserRouter as Router , Route}  from "react-router-dom"
import React from "react";

function UserAdminMainjs() {

    return (
  
      <Router>
      <div className = "container">
  
      
         <UserAdminHeader/>
         <Route path="/UserAdminMainHtaml" exact component={UserAdminMainHtaml}/>
         <Route path="/AdminRegister" exact component={AdminRegisterScreen}/>
         <Route path="/noteList" exact component={NoteList}/>
        <Route path="/noteEdit/:id" exact component={EditNote}/>
        <Route path="/CreateNotes" exact component={CreateNote}/>
        <Route path="/Stock" component={StockApp} />
      
        
     
       
       
        
    
      </div>
      </Router>
    );
  
  
    
  }
  
  export default UserAdminMainjs;
  