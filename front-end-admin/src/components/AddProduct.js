import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function AddProduct() {
    let history = useHistory();

    const [product_name, setProduct_name] = useState("");
    const [model_number, setModel_number] = useState("");
    const [category, setCategory] = useState("");
    const [specifications, setSpecifications] = useState("");
    const [supplier, setSupplier] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");



    function sendData(e) {
        e.preventDefault();

        const newProduct = {
            product_name,
            model_number,
            category,
            specifications,
            supplier,
            quantity,
            date,
        }


        axios.post("http://localhost:5000/product/add", newProduct).then(() => {
            alert("New Item Added")
            history.push("/admin/stock");
        }).catch((err) => {
            alert(err)
        })



    }

    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Add New Item</h4>
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
                                htmlFor="grid-password">Item Name</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="product_name"
                                onChange={(e) => {
                                    setProduct_name(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Model Number</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="model_number"
                                onChange={(e) => {
                                    setModel_number(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Category</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="category"
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Specifications</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="specifications"
                                onChange={(e) => {
                                    setSpecifications(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Supplier</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="supplier"
                                onChange={(e) => {
                                    setSupplier(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Quantity</label>
                            <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="quantity"
                                onChange={(e) => {
                                    setQuantity(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Date</label>
                            <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="date"
                                onChange={(e) => {
                                    setDate(e.target.value);
                                }} required />
                        </div>

                        <div className="relative w-full mb-3">
                            <button type="submit" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            >Add New Item</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}


