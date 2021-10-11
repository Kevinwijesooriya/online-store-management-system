import React, { useState } from "react"
import axios from "axios";

export default function AddCourierCompany() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [e_mail, setEmail] = useState("");
    const [contact_no, setContactNo] = useState("");

    function sendData(e) {
        e.preventDefault();


        const newCourier = {
            name,
            address,
            e_mail,
            contact_no
        }

        axios.post("http://localhost:5000/courier/add", newCourier).then(() => {
            alert("Courier Company Details Added")
        }).catch((err) => {
            alert(err)
        })

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

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Company Name</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="name" placeholder="Enter Company Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                    </div>

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Company Address</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="address" placeholder="Enter Company Address"
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }} required />
                    </div>

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Company e-mail</label>
                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="e_mail" autocomplete="off" placeholder="name@gmail.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>


                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password">Company Contact Number</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            id="contact_no" placeholder="771234567" pattern="[0-9]{9}" required
                            onChange={(e) => {
                                setContactNo(e.target.value);
                            }} />
                    </div>

                    <div className="relative w-full mb-3">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit">Add company</button>
                    </div>

                </form>
            </div>
        </div>


    )
}