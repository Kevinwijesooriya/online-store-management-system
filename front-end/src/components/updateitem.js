import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function Updateitem() {

    let history = useHistory();
    const { id } = useParams();

    const [item, updateItem] = useState({
        itemname: "",
        itemimage: "",
        itemcategory: "",
        itembrand: "",
        itemcolor: "",
        itemprice: "",
        itemqty: "",
        itemdescription: "",

    });


    const { itemname,
        itemimage,
        itemcategory,
        itembrand,
        itemcolor,
        itemprice,
        itemqty,
        itemdescription
         } = item;

    const onInputChange = (e, input_field) => { 
        updateItem({ ...item, [input_field]:  e.target.value });
    }

   
    async function onSubmit(e) {
        e.preventDefault();
       
        
        await axios.put(`http://localhost:5000/item/update/${id}`, item)
            .then(res => {
                alert("Successfully Updated item Details");
                history.push("/product");
            })
            .catch(err => { alert(err) });

    }

    const loaditem = async () => {
        const res = await axios.get
            (`http://localhost:5000/item/get/${id}`)
            updateItem(res.data.item)
    };
    useEffect(() => {
        loaditem();
    }, []);

    return (
        <div>
            <div className="container">
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Name</label>
                        <input id="itemname" type="text" className="form-control" placeholder="Role Name" defaultValue={itemname} onChange={e => onInputChange(e, "itemname")}></input>
                    </div>
                    <div className="it-1">
                        <label for="itemimage" className="form-label">Chooes Article Image</label>
                         <input id="itemimage" type="file" className="form-control-file" fileName="itemimage" defaultValue={itemimage} onChange= {e => onInputChange(e, "itemimage")}/>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Category</label>
                        <input id="itemcategory" type="text" className="form-control" placeholder="itemcategory" defaultValue={itemcategory} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Brand</label>
                        <input id="itembrand" type="text" className="form-control" placeholder="itembrand" defaultValue={itembrand} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    
                    
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Color</label>
                        <input id="itemcolor" type="text" className="form-control" placeholder="Role Name" defaultValue={itemcolor} onChange={e => onInputChange(e, "itemcolor")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Price</label>
                        <input id="itemprice" type="text" className="form-control" placeholder="Role Name" defaultValue={itemprice} onChange={e => onInputChange(e, "itemprice")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item qty</label>
                        <input id="itemqty" type="text" className="form-control" placeholder="Role Name" defaultValue={itemqty} onChange={e => onInputChange(e, "itemqty")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Item Description</label>
                        <input id="itemdescription" type="text" className="form-control" placeholder="Role Name" defaultValue={itemdescription} onChange={e => onInputChange(e, "itemdescription")}></input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Update item Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Updateitem;