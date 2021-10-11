import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";

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
                history.push("/admin/budget");
                setMonth("");
                setMonthly_income("");
                setMonthly_expences("");
                setMonthly_profit("");
                setDate("");
            })
            .catch(err => { alert(err) });
    }

    function calculateProfit(e) {
        e.preventDefault();
        setMonthly_profit(monthly_income - monthly_expences);
    }

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Budget Information</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form onSubmit={sendData}>

                    <div className="flex flex-wrap">

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Month</label>

                            <select className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Month" onChange={(e) => {
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

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Monthly Income</label>

                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="formGroupExampleInput" placeholder="Monthly Income" value={monthly_income} onChange={(e) => {
                                    setMonthly_income(e.target.value);
                                }} required></input>
                        </div>


                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Monthly Expences</label>

                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="formGroupExampleInput" placeholder="Monthly Expences" value={monthly_expences} onChange={(e) => {
                                    setMonthly_expences(e.target.value);
                                }} required></input>
                        </div>


                        <div className="relative w-full mb-3">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                onClick={e => calculateProfit(e)}>
                                Calculate Profit
                            </button>
                        </div>


                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Monthly Profit</label>

                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder="Monthly Profit" value={monthly_profit} onChange={(e) => {
                                    setMonthly_profit(e.target.value);
                                }} required></input>
                        </div>


                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Date</label>

                            <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                aria-label="Date" onChange={(e) => {
                                    setDate(e.target.value);
                                }} required></input>
                        </div>


                        <div className="relative w-full mb-3">
                            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="submit">Add Budget Details</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>

    )
}