import React,{useState,useEffect} from "react"
import axios from "axios";


import { Link } from "react-router-dom";

function DisplayItems(){

    const [items,setItems] = useState([{
        _id:'',
        itemname: '',
        itemimage: '',
        itemcategory: '',
        itembrand: '',
        itemcolor: '',
        itemprice: '',
        itemqty: '',
        itemdescription: ''

    }]);
    
    useEffect(() => {
        function getitems(){
            axios.get("http://localhost:5000/item/").then((res) => {
                setItems(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getitems();
    }, [])

    function Delete(id) {
        axios.delete(`http://localhost:5000/item/delete/${id}`).then((res) => {
            alert("Item Delete SuccessFully")
        }).catch(err => { alert(err) });
    }

    
    return(
        <div>


            <div class="Topic"><h3>V-TECH All Product</h3></div>
            {items.map( item =>
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
                <p >Rs {item.itemprice}</p>
               
            
                <button> <Link to ="/cart" className="btn btn-danger" onClick={() => Delete(item._id)} >Delete </Link></button></th>
                           
                          
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

