
import Header from './components/header';
import AdminMain from './components/ADminMainPage';
import UserAdminMainHtaml from './components/UsrAdminpage';
import CartApp from './components/CartApp';





import {BrowserRouter as Router , Route}  from "react-router-dom"

function MainPage() {

    return (
  
      <Router>
      <div>
    
       <Header/>
       <Route path="/AdminMain" exact component={AdminMain}/>
       <Route path="/UserAdminMainHtaml" exact component={UserAdminMainHtaml}/>
      
  
       
    
      
      
       
       
     </div>
    
    
      </Router>
    );
  
  
    
  }
  
  export default MainPage;
  