import React, { useState } from "react";
import axios from "axios";


export default function Addadminfeedback() {

    const [admin_email, set_admin_email] = useState("");
    const [issue, set_issue] = useState("");
    


    function sendData(e) {
        e.preventDefault();

        const Adminfeedback = {
            admin_email,
            issue
        }

        axios.post("http://localhost:5000/adminfeedback/add", Adminfeedback).then(() => {
            alert("Feedback added succesfully");

        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Add feedback</h4>
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
                     htmlFor="grid-password">Email</label>

                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     autocomplete="off"  id="set_admin_email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required 
                        onChange={(e) => {
                            set_admin_email(e.target.value);
                        }} required ></input>
                </div>

                <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                     htmlFor="grid-password">Issue</label>

                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="set_issue" placeholder=" Enter Issue"
                        onChange={(e) => {
                            set_issue(e.target.value);
                        }}
                        required></input>
                </div>


                <div className="relative w-full mb-3">
                <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                 type="submit">Submit</button>
                </div>
                </div>
            </form>
            {/* <img src="https://pmtips.net/Portals/0/EasyDNNnews/1981/img-3-critical-items-for-your-issues-log.jpg" width="400" height="400" /> */}
        </div>
    </div>
    )
}