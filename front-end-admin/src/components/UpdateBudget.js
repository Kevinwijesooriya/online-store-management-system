import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

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
        updateBudget({
            ...budget, [input_field]: e.target.value,
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        await axios.put(`http://localhost:5000/budget/update/${id}`, budget)
            .then(res => {
                alert("Successfully Updated budget Details");
                history.push("/admin/budget");
            })
            .catch(err => { alert(err) });
    }



    const calculateProfit = (e) => {
        e.preventDefault();
        const monthly_profit = budget.monthly_income - budget.monthly_expences
        updateBudget({
            ...budget, monthly_profit: monthly_profit,
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
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Update Budget Information</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={onSubmit}>

                    <div className="flex flex-wrap">

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Month</label>

                            <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Month" onChange={e => onInputChange(e, "month")}>
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

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Monthly Income</label>

                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="formGroupExampleInput" placeholder="Monthly Income" defaultValue={monthly_income} onChange={e => onInputChange(e, "monthly_income")}></input>
                        </div>
                        <div className="relative w-full mb-3">
                            <label htmlFor="grid-password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >Monthly Expences</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="formGroupExampleInput" placeholder="Monthly Expences" defaultValue={monthly_expences} onChange={e => onInputChange(e, "monthly_expences")}></input>
                        </div>
                        <div className="relative w-full mb-3">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                onClick={e => calculateProfit(e)}>
                                Re-Calculate Profit
                            </button>
                        </div>
                        <div className="relative w-full mb-3">
                            <label htmlFor="grid-password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >Monthly Profit</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Monthly Profit"
                                value={monthly_profit}
                                onChange={e => onInputChange(e, "monthly_profit")
                                }></input>
                        </div>
                        <div className="relative w-full mb-3">
                            <label htmlFor="grid-password" className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            >Date</label>
                            <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                aria-label="Date" defaultValue={date} onChange={e => onInputChange(e, "data")}></input>
                        </div>
                        <div className="relative w-full mb-3">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit">Update Budget Details</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>


    )
}
export default UpdateBudget;

