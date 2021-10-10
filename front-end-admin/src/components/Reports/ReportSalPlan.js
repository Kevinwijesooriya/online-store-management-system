import React, { useState, useEffect } from "react";
import axios from 'axios';

function ReportSalPlan() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredSalaryPlans = salaryplans.filter(salary => {
    return (
      salary.role_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  })

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Salary Plan Information</h6>
            <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  onChange={e => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
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
              </tr>
            </thead>
            <tbody>
              {filteredSalaryPlans.map((salaryplan, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.role_name}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.salary}</td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{salaryplan.date.substring(0, 10)}</td>
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

export default ReportSalPlan;