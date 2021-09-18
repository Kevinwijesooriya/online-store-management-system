import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateSalaryPlan() {

    let history = useHistory();
    const { id } = useParams();

    const [salaryplan, updateSalaryplan] = useState({
        role_name: "",
        salary: "",
        date: ""
    });


    const { role_name,
        salary,
        date } = salaryplan;

    const onInputChange = (e, input_field) => { 
        updateSalaryplan({ ...salaryplan, [input_field]:  e.target.value });
    }

    // async function onSubmit(e) {
    //     e.preventDefault();  
    //     await axios.put(`http://localhost:5000/salaryplan/update/${id}`, salaryplan);
    //     history.push("/salaryplan/salaryplan");
    //     alert(" Successfully Updated salaryplan Details")
    // }
    async function onSubmit(e) {
        e.preventDefault();
        // const editSalaryplan = {
        //     role_name: e.target.role_name.value,
        //     salary: e.target.salary.value,
        //     date: e.target.date.value
        // }
        
        await axios.put(`http://localhost:5000/salaryplan/update/${id}`, salaryplan)
            .then(res => {
                alert("Successfully Updated salaryplan Details");
                history.push("/salaryplan");
            })
            .catch(err => { alert(err) });

    }

    const loadsalaryplan = async () => {
        const res = await axios.get
            (`http://localhost:5000/salaryplan/get/${id}`)
        updateSalaryplan(res.data.salaryplan)
    };
    useEffect(() => {
        loadsalaryplan();
    }, []);

    return (
        <div>
            <div className="container">
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Role Name</label>
                        <input id="role_name" type="text" className="form-control" placeholder="Role Name" defaultValue={role_name} onChange={e => onInputChange(e, "role_name")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Salary</label>
                        <input id="salary" type="text" className="form-control" placeholder="Salary" defaultValue={salary} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Date</label>
                        <input id="date" type="date" className="form-control" aria-label="Date" defaultValue={date} onChange={e => onInputChange(e, "data")}></input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Update Salary Plan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UpdateSalaryPlan;

