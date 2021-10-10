import React ,{ useState , useEffect } from 'react';
import axios from "axios";

export default function AllAdmin(){

const [admins , setadmin] = useState([]);
useEffect(()=>{
  function getadmin(){
      axios.get("http://localhost:5000/admin/").then((res) =>{
          setadmin(res.data);
         

      }).catch((err)=>{
          alert(err.message);
      })
  }
getadmin();
}, [])


return (

    <div>

<h1>hAll admin </h1>

    </div>

)


}