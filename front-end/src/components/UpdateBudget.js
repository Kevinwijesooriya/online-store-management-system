import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function UpdateBudget() {

    let history = useHistory();
    const { id } = useParams();

    const [budget, updateBudget] = useState({
        role_name: "",
        salary: "",
        date: ""
    });

    const { role_name,
        salary,
        date } = budget;

    const onInputChange = (e, input_field) => {
        updateBudget({ ...budget, [input_field]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/budget/update/${id}`, budget)
            .then(res => {
                alert("Successfully Updated budget Details");
                history.push("/budget");
            })
            .catch(err => { alert(err) });
    }

    const loadbudget = async () => {
        const res = await axios.get
            (`http://localhost:5000/budget/get/${id}`)
        updateBudget(res.data.budget)
    };
    useEffect(() => {
        loadbudget();
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
export default UpdateBudget;

