import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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
            alert("Budget Details Delete SuccessFully");
            window.location.reload(false);
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

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
                <div className="rounded-t mb-0 px-4 py-3 border-0">

                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">Budget Information</h6>
                            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                                <div className="relative flex w-full flex-wrap items-stretch">
                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                                    />
                                </div>
                            </form>
                            <Link className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                to={"/admin/budget/add"}>
                                ADD
                            </Link>
                        </div>
                    </div>

                    {/* <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-lg text-blueGray-700">
                            Budget Information
                        </h3>
                    </div>
                </div> */}

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">

                            <thead className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                                <tr>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col"></th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Month</th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Income</th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Expences</th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Profit</th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Date</th>
                                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                        scope="col">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {budget.map((budget, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" >{budget.month}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{budget.monthly_income}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{budget.monthly_expences}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{budget.monthly_profit}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{budget.date.substring(0, 10)}</td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <Link className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                                to={"/admin/budget/update/" + budget._id}>Edit</Link>
                                            <button className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                                onClick={() => Delete(budget._id)} >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllBudget;