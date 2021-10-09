import React,{useState} from "react";
import axios from "axios";

export default function ItemIssue(){

    const [product_name, setProduct_name] = useState("");
    const [model_number, setModel_number] = useState("");
    const [issue_by, setIssue_by] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");
    
   
            
    function sendData(e){
        e.preventDefault();
        
        const newIssueItem = {
            product_name,
            model_number,
            issue_by,
            quantity,
            date,
        }


        axios.post("http://localhost:5000/issueitem/issue",newIssueItem).then(()=>{
            alert("Item successfully issued")
            
        }).catch((err)=>{
            alert(err)
        })



    }

    return(
        <div className="container">
            
            <form onSubmit={sendData}>
                <h2 align="center">Issue Items</h2>
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
                    <label for="issue_by">Issue By</label>
                    <input type="text" className="form-control" id="issue_by" 
                    onChange={(e)=>{
                        setIssue_by(e.target.value);
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

                <button type="submit" className="btn btn-primary">Issue</button>
                
                </form>
                
        </div>
    )
}







