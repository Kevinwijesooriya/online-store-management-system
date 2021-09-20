import React from "react";
import {Link} from 'react-router-dom';

function AdminMain(){

      


return(
    
<center>
    <div className="container">
        <h1>Weclcome to the Admin page</h1>


        <img src="data:image/jpeg;base64,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" width="300" height="200" />

<div className="d-grid gap-2" >
    <Link to ="/UserAdminMainHtaml" className = "nav-link">
<button type="button" className="btn btn-primary">User managment Section</button>
</Link>
   </div>

<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-secondary">Stock managment Section</button>
</Link>
</div>


<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-success">Product managment Section</button>
</Link>
</div>


<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-info">Order managment Section</button>
</Link>
</div>


<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-danger">Dilivery managment Section</button>
</Link>
</div>


<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-warning">Inquary managment Section</button>
</Link>
</div>

<div>
<Link to ="/#" className = "nav-link">
<button type="button" className="btn btn-light">Finacial managment Section </button>
</Link>
</div>


</div>

</center>

)

}

export default  AdminMain;