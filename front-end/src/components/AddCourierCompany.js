import React,{useState} from "react"
import axios from "axios";

export default function AddCourierCompany(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [e_mail, setEmail] = useState("");
    const [contact_no, setContactNo] = useState("");

    function sendData(e){
        e.preventDefault();
       

        const newCourier={
            name,
            address,
            e_mail,
            contact_no
        }

        axios.post("http://localhost:5000/courier/add",newCourier).then(()=>{
            alert("Courier Company Details Added")
        }).catch((err)=>{
            alert(err)
        })

    }
    

    return(

        <div className="container">
            <form onSubmit={sendData}>

            <div className="form-group">
                <label for="name">Company Name</label>
                <input type="text" className="form-control" id="name"  placeholder="Enter Company Name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}required/>
            </div>

            <div className="form-group">
                <label for="address">Company Address</label>
                <input type="text" className="form-control" id="address"  placeholder="Enter Company Address"
                     onChange={(e)=>{
                        setAddress(e.target.value);
                    }}required/>
            </div>
            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Company e-mail</label>
                <input type="email" className="form-control" id="e_mail" autocomplete="off" placeholder="name@gmail.com"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
            </div>
            

            <div className="mb-3">
                <label htmlFor="contact_no" className="form-label">Company Contact Number</label>
                <input type="text" className="form-control" id="contact_no"  placeholder="771234567" pattern="[0-9]{9}" required
                    onChange={(e)=>{
                        setContactNo(e.target.value);
                    }}/>
            </div>


            <button type="submit" className="btn btn-primary">Add company</button>
            </form>
        </div>


    )
}