import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "./header";
import Sidebar from "./Sidebar";


export default function AddSalaryPlan() {
    let history = useHistory();

    const [role_name, setRole_name] = useState("");
    const [salary, setSalary] = useState("");
    const [date, setDate] = useState("");

    function sendData(e) {
        e.preventDefault();
        const newSalaryplan = {
            role_name,
            salary,
            date
        }

        axios
            .post("http://localhost:5000/salaryplan/add", newSalaryplan)
            .then(res => {
                alert("Salary Plan Added");
                history.push("/");
                setRole_name("");
                setSalary("");
                setDate("");
            })
            .catch(err => { alert(err) });
    }

    return (<div className="App" >
        <div className="header">
            <Header />
        </div>

        <div className="content">
            <Sidebar />
            <div className="container">
                <form className="row g-3" onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Role Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Role Name" onChange={(e) => {
                            setRole_name(e.target.value);
                        }}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Salary</label>
                        <input type="text" className="form-control" placeholder="Salary" aria-label="Amount (to the nearest rupee)" onChange={(e) => {
                            setSalary(e.target.value);
                        }}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Date</label>
                        <input type="date" className="form-control" aria-label="Date" onChange={(e) => {
                            setDate(e.target.value);
                        }}></input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Add Salary Plan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    )
}