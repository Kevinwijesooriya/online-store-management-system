import React, { useStae, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Allinquiry() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inquiry, setinquiry] = useState([]);

    useEffect(() => {

        function getinquiry() {
            axios.get(`http://localhost:5000/inquiry/`).then((res) => {
                console.log(res);
                setinquiry(res.data);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getinquiry();
    }, []);

    //    function Delete(id) {
    //       axios.delete(`http://localhost:8050/inquiry/delete/${id}`).then((res) => {
    //           alert("Salary plan Details Delete SuccessFully")
    //       }).catch(err => { alert(err) });
    //   } 

    const filteredCountrise = inquiry.filter(std => {
        return (std.custom_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            // std.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
            std.item_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.itemcode.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.billnumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            std.inquriy_description.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })



    return (

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
            <div className="rounded-t mb-0 px-4 py-3 border-0">

                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">All inquiris</h6>
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
                                    scope="col">#</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">Name</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">Contact number</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">email</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">Item name</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">Item code</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">bill number</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">inquriy type</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">inquriy Description</th>
                                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                    scope="col">Date</th>
                                {/* <th scope="col">Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCountrise.map((std, index) => (

                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.custom_name}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.custom_contact_number}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <a href={`https://mail.google.com/mail/u/1/?ogbl#inbox`}>{std.custom_mail}</a>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.item_name}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.itemcode}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.billnumber}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.type_of_inquiry}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.inquriy_description}</td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {std.date_ob}</td>
                                    {/* <td>
             <a className="btn btn-warning" href={`#`} style={{textDecoration:'none',color:'white'}}>edit</a> &nbsp;
             <a className="btn btn-danger" href="/Iall" onClick={() => Delete(std._id)}>delete</a>  
            </td>       */}
                                </tr>



                            ))}
                        </tbody>
                        <tbody>
                            {/* <tr>
      <th scope="row">1</th>
      <td>{std._id}</td>
      <td>{std.name}</td>
      <td>{std.age}</td>
      <td>{std.gender}</td>
      <td>{std.date_ob}</td>
    </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


    )
}