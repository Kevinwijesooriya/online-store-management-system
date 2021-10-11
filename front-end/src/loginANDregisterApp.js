import Initial from './components/initial';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin';
import CusRegisterScreen from './components/CusRegisterscreen';
import UserAdminMainHtaml from './components/UsrAdminpage';
import   AdminMain from './components/ADminMainPage';
import NoteList from './components/NoteList';
import AdminRegisterScreen from './components/AdminRegisterscreen';
import CartApp from './components/CartApp';





import {BrowserRouter as Router , Route}  from "react-router-dom"
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
// import CustomerList from './components/customerList';
// import AdminList from './components/adminList';
// import UpdateAdmin from './components/UpdateAdmin';
import AdminReport from './components/Reports/AdminReport';
import UserAdminHeader from './components/UserAdminHeader';
import UserAdminMainjs from './UserAdminpage';

function loginANDregister() {

    return (
  
      <Router>
      <div className = "container">
      <UserAdminHeader/>
 
  
      <Route path="/AdminMain" exact component={AdminMain}/>
      <Route path="/AdminReport" exact component={AdminReport}/>
      <Route path="/Adminlogin" exact component={AdminLogin}/>
             
        <Route path="/UserAdminMainHtaml" exact component={UserAdminMainHtaml}/>
         <Route path="/AdminRegister" exact component={AdminRegisterScreen}/>
         <Route path="/noteList" exact component={NoteList}/>
        <Route path="/noteEdit/:id" exact component={EditNote}/>
        <Route path="/CreateNotes" exact component={CreateNote}/>
        {/* <Route path="/CustomerList" exact component={CustomerList}/>
        <Route path="/AdminList" exact component={AdminList}/>
        <Route path="/UpdateAdmin/:id" exact component={UpdateAdmin}/> */}
        <Route path="/AdminReport" exact component={AdminReport}/> 
      
        
   
       
        

   
       
      
       
      
        
        
      
         
        
        
        
       
       
        
    
      </div>
      </Router>
    );
  
  
    
  }
  
  export default loginANDregister;
  