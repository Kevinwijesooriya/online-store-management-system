import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateDeliveryDetails(){

    let history = useHistory();
    const { id } = useParams();

    const [delivery, updateDeliveryDetails] = useState({
        name:"",
        address:"",
        street:"",
        city:"",
        postal_code:""
    });


    const { name,
        address,
        street,
        city,
        postal_code} = delivery;

        const onInputChange = (e, input_field) => {
        updateDeliveryDetails({ ...delivery, [input_field]: e.target.value });
        
    };

    async function onSubmit (e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/delivery/update/${id}`, delivery)
        .then(response => {
            alert("Successfully Updated Delivery Details");
            history.push("/delivery");
            console.log(response);
          })      
        .catch((err) => {alert(err)});
    }

    const loaddelivery = async () => {
        const res = await axios.get
            (`http://localhost:5000/delivery/get/${id}`)
        updateDeliveryDetails(res.data.delivery)
    }
    useEffect(() => {
        loaddelivery();
    }, []);

    return (
        <div>
            <div className="container">
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Customer Name</label>
                        <input type="text" className="form-control" placeholder="Customer Name" defaultValue={name} onChange={e => onInputChange(e, "name")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Customer Address</label>
                        <input type="text" className="form-control" placeholder="Customer Address" defaultValue={address} onChange={e => onInputChange(e, "address")}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Customer Street</label>
                        <input type="text" className="form-control" placeholder="Customer Street" defaultValue={street} onChange={e => onInputChange(e, "street")}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Customer City</label>
                        <input type="text" className="form-control" placeholder="Customer city" defaultValue={city} onChange={e => onInputChange(e, "city")}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Customer Postal Code</label>
                        <input type="number" className="form-control" placeholder="Customer Postal Code" defaultValue={postal_code} onChange={e => onInputChange(e, "postal_code")}>
                        </input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Update Delivery Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateDeliveryDetails;