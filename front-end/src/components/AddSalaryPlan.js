import React, { useState, useEffect } from "react";
import validate from "../Validations/ValidateFinancialInfo"
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "./headerSalary";
import Sidebar from "./Sidebar";


export default function AddSalaryPlan() {
    let history = useHistory();

    const [values, setValues] = useState({
        role_name: '',
        salary: '',
        date: ''
    });

    const {role_name,
        salary,
        date } = values;

    const [errors, setErrors] = useState({});
    // const [isSubmitting, setIsSubmitting] = useState(false);
    

    // const [role_name, setRole_name] = useState("");
    // const [salary, setSalary] = useState("");
    // const [date, setDate] = useState("");

    function sendData(e) {
        e.preventDefault();
        setErrors(validate(values));
    }

    function callback() {
        const newSalaryplan = {
            role_name,
            salary,
            date
        }

        axios
            .post("http://localhost:5000/salaryplan/add", newSalaryplan)
            .then(res => {
                alert("Salary Plan Added");
                history.push("/salaryplan");
                // setRole_name("");
                // setSalary("");
                // setDate("");
            })
            .catch(err => { alert(err) });
    }

    const handleChange = (e, input_field) => {
        const { value } = e.target;
        setValues({
            ...values,
            [input_field]: value
        });
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0) {
                callback();
            }
        },
        [errors]
    );

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
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Role Name"
                            // value={values.role_name}
                            onChange={e => handleChange(e, "role_name")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setRole_name(e.target.value);
                        // }} required

                        ></input>
                        {errors.role_name && <p>{errors.role_name}</p>}
                    </div>

                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Salary</label>
                        <input type="text" className="form-control" placeholder="Salary" aria-label="Amount (to the nearest rupee)"
                            // value={values.salary} 
                            onChange={e => handleChange(e, "salary")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setSalary(e.target.value);
                        // }} required

                        ></input>
                        {errors.salary && <p>{errors.salary}</p>}
                    </div>

                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Date</label>
                        <input type="date" className="form-control" aria-label="Date"
                            // value={values.date} 
                            onChange={e => handleChange(e, "date")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setDate(e.target.value);
                        // }} required                        
                        ></input>
                        {errors.date && <p>{errors.date}</p>}
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