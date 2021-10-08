import React, { useState } from "react";
import axios from "axios";


export default function Addadminfeedback() {

    const [admin_email, set_admin_email] = useState("");
    const [issue, set_issue] = useState("");
    


    function sendData(e) {
        e.preventDefault();

        const Adminfeedback = {
            admin_email,
            issue
        }

        axios.post("http://localhost:5000/adminfeedback/add", Adminfeedback).then(() => {
            alert("Feedback added succesfully")

        }).catch((err) => {
            alert(err)
        })
    }


    return (

        <div className="container">
            <h1>Add feedback</h1>
            {/* inquiry form */}
            <form onSubmit={sendData}>

                <div className="mb-3">
                    <label htmlFor="set_admin_email" className="form-label">Email</label>
                    <input type="text" className="form-control" autocomplete="off"  id="set_admin_email" placeholder="Enter your email" pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*" required 
                        onChange={(e) => {
                            set_admin_email(e.target.value);
                        }} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="set_issue" className="form-label">Issue</label>
                    <input type="text" className="form-control" id="set_issue" placeholder=" Enter Issue"
                        onChange={(e) => {
                            set_issue(e.target.value);
                        }}
                        required />
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <img src="https://pmtips.net/Portals/0/EasyDNNnews/1981/img-3-critical-items-for-your-issues-log.jpg" width="400" height="400" />
        </div>
    )
}