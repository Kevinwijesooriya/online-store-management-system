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

            <div class="container">
                 
    
                <table class="table table-image">
                <thead>
                <tr>
                <th  width="450">Item Image</th>
                <th  >Item Name</th>
                <th>Item Category</th>
                <th> Item Brand</th>
                <th>Item Price</th>
                <th>Date</th>               
                </tr>
                </thead>


            {filteredCountrise.map( item =>
           
    
                <tbody>
                <tr>
                <td  width="450"><img  src={`/images/${item.itemimage}`}  alt="" width="350" height="250" /></td>
                <td width="550" ><p>{item.itemname}</p></td>
                <td width="200"><p>{item.itemcategory}</p></td>
                <td width="200"> <p >{item.itembrand}</p></td>
                <td width="200"><p >$ {item.itemprice}</p></td>
                <td width="310"><p > {item.date_ob}</p></td>           
                </tr>          
                </tbody>
        
                )}

                </table>   
        </div>
        </div>
    )
   
}

export default DisplayItems