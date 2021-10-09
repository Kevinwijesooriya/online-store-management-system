import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateCourierDetails(){

    let history = useHistory();
    const { id } = useParams();

    const [courier, updateCourierDetails] = useState({
        name:"",
        address:"",
        e_mail:"",
        contact_no:""
    });


    const { name,
        address,
        e_mail,
        contact_no} = courier;

        const onInputChange = (e, input_field) => {
        updateCourierDetails({ ...courier, [input_field]: e.target.value });

        };

    async function onSubmit (e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/courier/update/${id}`, courier)
        .then(response => {
            alert("Successfully Updated Courier Details");
            history.push("/courier");
            console.log(response);
          })      
        .catch((err) => {alert(err)});
    }

    const loadcourier = async () => {
        const res = await axios.get
            (`http://localhost:5000/courier/get/${id}`)
        updateCourierDetails(res.data.courier)
    }
    useEffect(() => {
        loadcourier();
    }, []);

    return (
        <div>
            <div className="container">
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Company Name</label>
                        <input type="text" className="form-control" placeholder="Company Name" defaultValue={name} onChange={e => onInputChange(e, "name")
                        }></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Company Address</label>
                        <input type="text" className="form-control" placeholder="Company Address" defaultValue={address} onChange={e => onInputChange(e, "address")}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Company Email</label>
                        <input type="email" className="form-control" autocomplete="off" placeholder="name@gmail.com" defaultValue={e_mail} onChange={e => onInputChange(e, "e_mail")}>
                        </input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Company Conact Number</label>
                        <input type="text" className="form-control" placeholder="771234567" pattern="[0-9]{9}" defaultValue={contact_no} onChange={e => onInputChange(e, "contact_no")}>
                        </input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Update Courier Details</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateCourierDetails;