import React, { useState, useEffect } from "react";
import validate from "../Validations/ValidateFinancialInfo"
import { useHistory } from 'react-router-dom';
import axios from "axios";


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

    return (<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

    <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
            <h4 className="text-blueGray-700 text-xl font-bold">Salary Plan Information</h4>
        </div>
    </div>

    <div className="flex flex-wrap">
        <hr className="mt-6 border-b-1 border-blueGray-300" />
    </div>

    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={sendData}>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Role Name</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="formGroupExampleInput" placeholder="Role Name"
                            // value={values.role_name}
                            onChange={e => handleChange(e, "role_name")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setRole_name(e.target.value);
                        // }} required

                        ></input>
                        {errors.role_name && <p>{errors.role_name}</p>}
                    </div>

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Salary</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Salary" aria-label="Amount (to the nearest rupee)"
                            // value={values.salary} 
                            onChange={e => handleChange(e, "salary")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setSalary(e.target.value);
                        // }} required

                        ></input>
                        {errors.salary && <p>{errors.salary}</p>}
                    </div>

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Date</label>
                        <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         aria-label="Date"
                            // value={values.date} 
                            onChange={e => handleChange(e, "date")}
                        // onChange={handleChange}
                        // onChange={(e) => {
                        //     setDate(e.target.value);
                        // }} required                        
                        ></input>
                        {errors.date && <p>{errors.date}</p>}
                    </div>

                    
                    <div className="relative w-full mb-3">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                         type="submit">Add Salary Plan</button>
                    </div>
                    
                </form>
            </div>
        </div>   
    )
}