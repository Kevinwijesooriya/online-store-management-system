import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { MdDelete } from "react-icons/md"
 

function AllAdminfeedback() {

    const [Adminfeedback, setAdminfeedback] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        function getAdminfeedback() {
            axios
                .get("http://localhost:5000/adminfeedback/")
                .then(res => {
                    setAdminfeedback(res.data);
                })
                .catch(err => { alert(err) });
        }
        getAdminfeedback();
    }, []);

    function onDelete(id) {
        axios.delete(`http://localhost:5000/adminfeedback/delete/${id}`).then((res) => {
            alert("Feedback Deleted SuccessFully")
        }).catch(err => { alert(err) });
    }

    const filteredCountrise = Adminfeedback.filter(af => {
        return (af.admin_email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            af.issue.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })

    return (
        <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">Admin feedback</h6>
                            <Link className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                to={"/admin/adminfeedback/add"}>
                                ADD
                            </Link>
                        </div>
                    </div>

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div class="text-center flex justify-between">
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                    <i className="fas fa-search"></i>
                                </span>
                                <input onChange={e => setSearchTerm(e.target.value)}
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
                     scope="col">Email</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Issue</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Date</th>
                    <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                     scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredCountrise.map((adminfeedback, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{adminfeedback.admin_email}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{adminfeedback.issue}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{adminfeedback.date_ob.substring(0, 10)}</td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <Link className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
                            to={"/admin/adminfeedback/update/" + adminfeedback._id}>Edit</Link>
                            <button className="bg-red-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                             onClick={() => onDelete(adminfeedback._id)} >
                              Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        <br /><br /><br />
        </div>
    </div>
    </>
    );
}
export default AllAdminfeedback;