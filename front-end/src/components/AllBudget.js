import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { MdDelete } from "react-icons/md"
import '../styles/Sidebar.css';
import Sidebar from "./Sidebar";
import Header from "../components/Navigations/BudgetHeader";

function AllBudget() {

    const [budget, setBudget] = useState([]);

    useEffect(() => {
        function getBudget() {
            axios
                .get("http://localhost:5000/budget/")
                .then(res => {
                    setBudget(res.data);
                })
                .catch(err => { alert(err) });
        }
        getBudget();
    }, []);

    function Delete(id) {
        axios.delete(`http://localhost:5000/budget/delete/${id}`).then((res) => {
            alert("Budget Details Delete SuccessFully")
        }).catch(err => { alert(err) });
    }

   

    // filterData(budget,searchkey){
    //   const result = budget.filter((budget) =>
    //  budget.firstName.toLowerCase().includes(searchkey)||
    //  budget.lastName.toLowerCase().includes(searchkey)
    //   )
    //   this.setState({budget:result})
    // }

    // handleSearchArea=(e)=>{
    //   const searchkey = e.currentTarget.value;

    //   axios.get("http://localhost:5000/budget").then(res =>{
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
                <h1> Budget Information</h1>
                <table className="table table-bordered border-primary">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Month</th>
                            <th scope="col">Income</th>
                            <th scope="col">Expences</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {budget.map((budget, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{budget.month}</td>
                                <td>{budget.monthly_income}</td>
                                <td>{budget.monthly_expences}</td>
                                <td>{budget.monthly_profit}</td>
                                <td>{budget.date.substring(0, 10)}</td>
                                <td>
                                    <Link className="btn btn-success" to={"/budget/update/" + budget._id}>Edit</Link>
                                    <button className="btn btn-danger" onClick={() => Delete(budget._id)} >
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
    </div>);

}
export default AllBudget;