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
                history.push("/adminfeedback");
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
        <div className="App" >

            <div className="content">
                <div className="container">
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Email</label>
                            <input id="admin_email" type="text" className="form-control" placeholder="Email" defaultValue={admin_email} onChange={e => onInputChange(e, "admin_email")}></input>
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput" className="form-label">Issue</label>
                            <input id="issue" type="text" className="form-control" placeholder="issue" defaultValue={issue} onChange={e => onInputChange(e, "issue")}></input>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Update Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UpdateAdminfeedback;

