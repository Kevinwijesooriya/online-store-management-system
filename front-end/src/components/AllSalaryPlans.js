import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdDelete } from "react-icons/md"
import '../styles/Sidebar.css';
import Header from "./header";
import Sidebar from "./Sidebar";

function AllSalaryPlans() {

    const [salaryplans, setSalaryplans] = useState([]);

    useEffect(() => {
        function getSalaryplans() {
            axios
                .get("http://localhost:5000/salaryplan/")
                .then(res => {
                    setSalaryplans(res.data);
                })
                .catch(err => { alert(err) });
        }
        getSalaryplans();
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/salaryplan/delete/${id}`).then((res) => {
            alert("Salary plan Details Delete SuccessFully")
        }).catch(err => { alert(err) });
    }

    // filterData(salaryplan,searchkey){
    //   const result = salaryplan.filter((salaryplan) =>
    //  salaryplan.firstName.toLowerCase().includes(searchkey)||
    //  salaryplan.lastName.toLowerCase().includes(searchkey)
    //   )
    //   this.setState({salaryplan:result})
    // }

    // handleSearchArea=(e)=>{
    //   const searchkey = e.currentTarget.value;

    //   axios.get("http://localhost:5000/salaryplan").then(res =>{
    //     if(res.data.success){
    //       this.filterData(res.data.existingsalaryplan,searchkey)
    //     }
    //   });
    // }

    return (<div className="App" >
        <div className="header">
            <Header />
        </div>

        <div className="content">
            <Sidebar />
            <div className="container" >

                <table className="table table-bordered border-primary" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Role Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {salaryplans.map((salaryplan, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{salaryplan.role_name}</td>
                                <td>{salaryplan.salary}</td>
                                <td>{salaryplan.date.substring(0, 10)}</td>
                                <td>
                                    <Link className="btn btn-success" to={"/salaryplan/update/" + salaryplan._id}>Edit</Link>
                                    <button className="btn btn-danger" onClick={() => Delete(salaryplan._id)} >
                                        <MdDelete />Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br /><br />
            </div>
        </div>
    </div>
    );

}
export default AllSalaryPlans;