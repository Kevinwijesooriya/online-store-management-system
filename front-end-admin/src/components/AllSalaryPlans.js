import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

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
      window.location.reload(false);
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

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className="font-semibold text-lg text-blueGray-700 ">
              Salary Plan Information
            </h3>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
              <tr>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                  scope="col"></th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                  scope="col">Role Name</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                  scope="col">Salary</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                  scope="col">Date</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                  scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {salaryplans.map((salaryplan, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.role_name}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.salary}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.date.substring(0, 10)}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <Link className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      to={"/salaryplan/update/" + salaryplan._id}>Edit</Link>
                    <button className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      onClick={() => Delete(salaryplan._id)} >
                      Delete
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