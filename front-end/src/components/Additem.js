import React,{useState} from "react"
import axios from "axios";

const Additems = () => {

    const [itemname,setItemName] = useState("");
    const [itemimage,setItemImage] = useState("");
    const [itemcategory,setItemCategory] = useState("");
    const [itembrand,setItemBrand] = useState("");
    const [itemcolor,setItemColor] = useState("");
    const [itemprice,setItemPrice] = useState("");
    const [itemqty,setItemQty] = useState("");
    const [itemdescription,setItemDescription] = useState("");

    const onChangeFile = e =>{
        setItemImage(e.target.files[0]);
    }


    const changeOnClick = (e) =>{
    e.preventDefault();
        
        const formData = new FormData();

        formData.append("itemname",itemname);
        formData.append("itemimage",itemimage);
        formData.append("itemcategory",itemcategory);
        formData.append("itembrand",itembrand);
        formData.append("itemcolor",itemcolor);
        formData.append("itemprice",itemprice);
        formData.append("itemqty",itemqty);
        formData.append("itemdescription",itemdescription);
    
   

        setItemName("");
        setItemCategory("");
        setItemBrand("");
        setItemColor("");
        setItemPrice("");
        setItemQty("");
        setItemDescription("");

        
        
        axios.post("http://localhost:5000/item/add",formData).then(()=>{
            alert("Item Added")
        }).catch((err)=>{
            alert(err)
        })
    }

    return(

        <form onSubmit={changeOnClick}>

            <div className="it-1">
                <label for="itemname">Item Name</label>
                <input type="text" className="form-control" id="itemname" onChange={(e)=>{

                    setItemName(e.target.value);

                }}
                required/>
             </div>
        
            <div className="it-1">
                <label for="itemcategory">Item Category</label>
                <input type="text" className="form-control" id="itemcategory" onChange={(e)=>{

                    setItemCategory(e.target.value);
                    
                }}
                required/>
            </div>

            <div className="it-1">
                <label for="itembrand">Item Brand</label>
                <input type="text" className="form-control" id="itembrand" onChange={(e)=>{

                    setItemBrand(e.target.value);

                }}
                required/>
            </div>

            <div className="it-1">
                <label for="itemColorQtyPrice">Color/qty/Price</label>
                <input type="text" className="form-control" id="itemcolor" onChange={(e)=>{

                    setItemColor(e.target.value);

                }}
                required/>
                <input type="number"  className="form-control" id="itemqty"  min="10" max="25" onChange={(e)=>{

                    setItemQty(e.target.value);

                }} 
                required/>
                <input type="number" className="form-control" id="itemprice" min="100" onChange={(e)=>{

                    setItemPrice(e.target.value);

                }}
                required/>
            </div>

            <div className="it-1">
                <label htmlfor="itemimage">Chooes Article Image</label>
                <input type="file" className="form-control-file" fileName="itemimage" onChange= {onChangeFile} required/>

            </div>

            <div className="it-1">
                <label for="itemdescription">Item Description</label>
                <input type="text" className="form-control" id="itemdescription" onChange={(e)=>{

                    setItemDescription(e.target.value);

                }}required/>
            </div>

            <button type="submit" className="btn btn-primary">Add to the Store</button>

        </form>
    )

}

export default Additems;