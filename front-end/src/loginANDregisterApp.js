import Initial from './components/initial';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin';
import CusRegisterScreen from './components/CusRegisterscreen';
import UserAdminMainHtaml from './UserAdminpage';
import   AdminMain from './mainPage';
import NoteList from './UserAdminpage';
import AdminRegisterScreen from './components/AdminRegisterscreen';




import {BrowserRouter as Router , Route}  from "react-router-dom"

function loginANDregister() {

    return (
  
      <Router>
      <div className = "container">
 
  
        <Route path="/" exact component={Initial}/>
        <Route path="/Adminlogin" exact component={AdminLogin}/>
        <Route path="/Cuslogin" exact component={CustomerLogin}/>
        <Route path="/CusRegister" exact component={CusRegisterScreen}/>
        <Route path="/AdminMain" exact component={AdminMain}/>
        <Route path="/UserAdminMainHtaml" exact component={UserAdminMainHtaml}/>
        <Route path="/NoteList" exact component={NoteList}/>
       
      
        
        
      
         
        
        
        
       
       
        
    
      </div>
      </Router>
    );
  
  
    
  }
  
  export default loginANDregister;
  