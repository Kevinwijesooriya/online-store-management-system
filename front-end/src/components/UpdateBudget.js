import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "../components/Navigations/BudgetHeader";
import Sidebar from "./Sidebar";

function UpdateBudget() {

    let history = useHistory();
    const { id } = useParams();

    const [budget, updateBudget] = useState({
        month: "",
        monthly_income: "",
        monthly_expences: "",
        monthly_profit: "",
        date: ""
    });

    const { month,
        monthly_income,
        monthly_expences,
        monthly_profit,
        date } = budget;

    const onInputChange = (e, input_field) => {
        updateBudget({ ...budget, [input_field]: e.target.value,
        });
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

    

    const  calculateProfit = (e)=> {
        e.preventDefault();
        const monthly_profit = budget.monthly_income - budget.monthly_expences
        updateBudget({ ...budget, monthly_profit: monthly_profit,
        });
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
    <div className="App" >
    <div className="header">
        <Header />
    </div>

    <div className="content">
        <Sidebar />
        <div className="container">
            <h4>Budget details</h4>
            <form className="row g-3" onSubmit={onSubmit}>
                {/* <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Month</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Month" onChange={(e) => {
                        setMonth(e.target.value);
                    }}></input>
                </div> */}
                <br/>
                

                <div className="mb-3">
                <select className="form-select" placeholder="Month" onChange={e => onInputChange(e, "month")}>
                    <option defaultValue={month}>{month}</option>
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
                    <label htmlFor="formGroupExampleInput" className="form-label">Monthly Income</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Monthly Income" defaultValue={monthly_income} onChange={e => onInputChange(e, "monthly_income")}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Monthly Expences</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Monthly Expences" defaultValue={monthly_expences} onChange={e => onInputChange(e, "monthly_expences")}></input>
                </div>
                <button onClick={e => calculateProfit(e)}>
                    Calculate Profit
                </button>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Monthly Profit</label>
                    <input type="text" className="form-control" placeholder="Monthly Profit" 
                        value={monthly_profit}  
                        onChange={e => onInputChange(e, "monthly_profit")
                        }></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Date</label>
                    <input type="date" className="form-control" aria-label="Date" defaultValue={date} onChange={e => onInputChange(e, "data")}></input>
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
export default UpdateBudget;

