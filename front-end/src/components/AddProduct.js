import React,{useState} from "react";
import axios from "axios";


export default function AddProduct(){

    const [product_name, setProduct_name] = useState("");
    const [model_number, setModel_number] = useState("");
    const [category, setCategory] = useState("");
    const [specifications, setSpecifications] = useState("");
    const [supplier, setSupplier] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");
    
   
            
    function sendData(e){
        e.preventDefault();
        
        const newProduct = {
            product_name,
            model_number,
            category,
            specifications,
            supplier,
            quantity,
            date,
        }


        axios.post("http://localhost:5000/product/add",newProduct).then(()=>{
            alert("New Item Added")
            
        }).catch((err)=>{
            alert(err)
        })



    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
            <h2 align="center">Add New Item</h2>
                <div className="form-group">
                    <label for="product_name">Item Name</label>
                    <input type="text" className="form-control" id="product_name"
                    onChange={(e)=>{
                        setProduct_name(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="model_number">Model Number</label>
                    <input type="text" className="form-control" id="model_number"
                    onChange={(e)=>{
                        setModel_number(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="category">Category</label>
                    <input type="text" className="form-control" id="category"
                    onChange={(e)=>{
                        setCategory(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="specifications">Specifications</label>
                    <input type="text" className="form-control" id="specifications"
                    onChange={(e)=>{
                        setSpecifications(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="supplier">Supplier</label>
                    <input type="text" className="form-control" id="supplier"
                    onChange={(e)=>{
                        setSupplier(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="quantity">Quantity</label>
                    <input type="number" className="form-control" id="quantity"
                    onChange={(e)=>{
                        setQuantity(e.target.value);
                    }} required /> 
                </div>

                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" className="form-control" id="date"
                    onChange={(e)=>{
                        setDate(e.target.value);
                    }} required /> 
                </div>

                <button type="submit" className="btn btn-primary">Add New Item</button>
                
                </form>
        </div>
    )
}


