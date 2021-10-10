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
        updateSalaryplan({ ...salaryplan, [input_field]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/salaryplan/update/${id}`, salaryplan)
            .then(res => {
                alert("Successfully Updated salaryplan Details");
                history.push("/admin/salaryplan");
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
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Update Salary Plan Information</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Role Name</label>
                        <input id="role_name" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Role Name" defaultValue={role_name} onChange={e => onInputChange(e, "role_name")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Salary</label>
                        <input id="salary" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Salary" defaultValue={salary} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Date</label>
                        <input id="date" type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            aria-label="Date" defaultValue={date} onChange={e => onInputChange(e, "data")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit">Update Salary Plan</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default UpdateSalaryPlan;

