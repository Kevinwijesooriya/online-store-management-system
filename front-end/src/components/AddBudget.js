import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "../components/Navigations/BudgetHeader";
import Sidebar from "./Sidebar";


export default function AddBudget() {
    let history = useHistory();

    const [month, setMonth] = useState("");
    const [monthly_income, setMonthly_income] = useState(0);
    const [monthly_expences, setMonthly_expences] = useState(0);
    const [monthly_profit, setMonthly_profit] = useState(monthly_income - monthly_expences);
    const [date, setDate] = useState("");

    //   const [income, setIncome] = useState(0);
    //   const [expences, setExpences] = useState(0);
    //   const [profit, setProfit] = useState(monthly_income - monthly_expences);

    function sendData(e) {
        e.preventDefault();
        const newBudget = {
            month,
            monthly_income,
            monthly_expences,
            monthly_profit,
            date
        }

        axios
            .post("http://localhost:5000/budget/add", newBudget)
            .then(res => {
                alert("Salary Plan Added");
                history.push("/budget");
                setMonth("");
                setMonthly_income("");
                setMonthly_expences("");
                setMonthly_profit("");
                setDate("");
            })
            .catch(err => { alert(err) });
    }

    function calculateProfit() {
        setMonthly_profit(monthly_income - monthly_expences);
    }

    return (<div className="App" >
        <div className="header">
            <Header />
        </div>

        <div className="content">
            <Sidebar />
            <div className="container">
                <h4>Budget details</h4>
                <form className="row g-3" onSubmit={sendData}>
                    {/* <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Month</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Month" onChange={(e) => {
                            setMonth(e.target.value);
                        }}></input>
                    </div> */}
                    <br/>
                    

                    <div className="mb-3">
                    <select class="form-select" placeholder="Month" onChange={(e) => {
                            setMonth(e.target.value);
                        }}>
                        <option selected>Select Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                        
                    </select>
                    </div>

                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Monthly Income</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Monthly Income" value={monthly_income} onChange={(e) => {
                            setMonthly_income(e.target.value);
                        }}  required></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Monthly Expences</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Monthly Expences" value={monthly_expences} onChange={(e) => {
                            setMonthly_expences(e.target.value);
                        }} required></input>
                    </div>
                    <button onClick={() => calculateProfit()}>
                        Calculate Profit
                    </button>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Monthly Profit</label>
                        <input type="text" className="form-control" placeholder="Monthly Profit" value={monthly_profit} onChange={(e) => {
                            setMonthly_profit(e.target.value);
                        }} required></input>
                    </div>
                    <div className="mb-3">
                        <label for="formGroupExampleInput" className="form-label">Date</label>
                        <input type="date" className="form-control" aria-label="Date" onChange={(e) => {
                            setDate(e.target.value);
                        }} required></input>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Add Budget Details</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    )
}