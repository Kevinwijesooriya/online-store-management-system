import React,{useState,useEffect} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";
import Product from "../components/itemnav";

import { Link } from "react-router-dom";

function DisplayItems(){

    const [searchTerm, setSearchTerm] = useState('');
    const [items,setItems] = useState([{
        _id:'',
        itemname: '',
        itemimage: '',
        itemcategory: '',
        itembrand: '',
        itemcolor: '',
        itemprice: '',
        itemqty: '',
        itemdescription: '',
        date_ob: ''

    }]);
    const location = useLocation();
    
    useEffect(() => {
        console.log("redirected to home");
        function getitems(){
            axios.get("http://localhost:5000/item/").then((res) => {
                setItems(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getitems();
    }, [])

    const filteredCountrise = items.filter(std=>{
        return (std.itemname.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
        std.itemimage.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                
     })

    
    return(
        <div>

        <div><Product/></div>

        <div class="container-fluid">
    
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
             onChange={e => setSearchTerm(e.target.value)}
            />
   
  
            </div>

            <div class="Topic"><h3>V-TECH </h3></div>
            {filteredCountrise.map( item =>
            <div>
              
                

              <div class="container">
                 
                <div class="row">
                <div class="col-12">

                <table class="table table-image">
                <thead>
                <td>
                <th scope="col" width="450"><img  src={`/images/${item.itemimage}`}  alt="" width="350" height="250" /></th>
                <th scope="col" width="600"><h2>{item.itemname}</h2>
                <p>{item.itemcategory}</p>
                <p >{item.itembrand}</p>
                <p >$ {item.itemprice}</p>
               
                
                <button><Link className="btn btn-success" to={"/update/" + item._id}>Item Update</Link></button></th>
                </td>
                
                </thead>
                </table>  
                </div>
                </div>
                </div>
                </div>
           

                )}

                
        </div>
        
    )

}

export default DisplayItems