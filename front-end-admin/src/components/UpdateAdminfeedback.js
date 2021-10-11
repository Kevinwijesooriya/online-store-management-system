import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';

function UpdateAdminfeedback() {

    let history = useHistory();
    const { id } = useParams();

    const [adminfeedback, updateAdminfeedback] = useState({
        admin_email: "",
        issue: ""
    });

    const { admin_email,
        issue } = adminfeedback;

    const onInputChange = (e, input_field) => {
        updateAdminfeedback({ ...adminfeedback, [input_field]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios.put(`http://localhost:5000/adminfeedback/update/${id}`, adminfeedback)
            .then(res => {
                alert("Successfully Updated adminfeedback Details");
                history.push("/admin/adminfeedback");
            })
            .catch(err => { alert(err) });
    }

    const loadadminfeedback = async () => {
        const res = await axios.get
            (`http://localhost:5000/adminfeedback/get/${id}`)
        updateAdminfeedback(res.data.adminfeedback)
    };
    useEffect(() => {
        loadadminfeedback();
    }, []);

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Add feedback</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form onSubmit={onSubmit}>
                        <div className="relative w-full mb-3">
                            <label for="formGroupExampleInput" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                            <input id="admin_email" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" defaultValue={admin_email} onChange={e => onInputChange(e, "admin_email")}></input>
                        </div>
                        <div className="relative w-full mb-3">
                            <label for="formGroupExampleInput" className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Issue</label>
                            <input id="issue" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="issue" defaultValue={issue} onChange={e => onInputChange(e, "issue")}></input>
                        </div>
                        <div className="col-12">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">Update Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default UpdateAdminfeedback;

