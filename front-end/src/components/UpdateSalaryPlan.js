import React,{useState,useEffect} from "react"
import {useHistory, useParams} from 'react-router-dom';
import axios from "axios";
 
const UpdateSalaryPlan = ()=>{
 
     let history = useHistory();
     const {id} =useParams();
 
    const [salaryplan,updateSalaryplan] = useState({
        role_name,
        salary,
        date
    });
 const {role_name,
    salary,
    date}=salaryplan;
 const onInputChange = e=>{
     updateSalaryplan({...salaryplan,[e.target.name]: e.target.value});
 };
 
 const onSubmit=async e =>{
     e.preventDefault();
     await axios.put(`http://localhost:5000/salaryplan/update/${id}`,salaryplan);
     history.push("/salaryplan/salaryplan");
     alert(" Successfully Updated salaryplan Details")
 }


 
 const loadsalaryplan = async()=>{
    const res = await axios.get
        (`http://localhost:5000/salaryplan/get/${id}`)
        updateSalaryplan(res.data.salaryplan)
      }
      useEffect(()=>{
        loadsalaryplan();
    },[]);
    return (
        <div>
            <div className="container">
            <form className="row g-3" onSubmit={e=>onSubmit(e)}>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Role Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Role Name" value={role_name} onChange={(e) => {
                        setRole_name(e.target.value);
                    }}></input>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Salary</label>
                    <input type="text" className="form-control" placeholder="Salary" aria-label="Amount (to the nearest rupee)" value={salary} onChange={e=>onInputChange(e)}></input>
                </div>
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Date</label>
                    <input type="date" className="form-control" aria-label="Date" value={date} onChange={(e) => {
                        setDate(e.target.value);
                    }}></input>
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

