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

    
    return(
        <div>
            {items.map( item =>
            <div>

                <img  src={`/images/${item.itemimage}`}  alt="" />
                <p >{item.itemname}</p>
                <p>{item.itemcategory}</p>
                <p>{item.itembrand}</p>
                <p>{item.itemprice}</p>
                
               
                <Link className="btn btn-success" to={"/product/display/" + item._id}>Item Details</Link>
                
                  
            </div>

                )}

                
        </div>
        
    )

}

export default DisplayItems