import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function EditProducts() {

    let history = useHistory();
    const { id } = useParams();

    const [product, editProduct] = useState({
        product_name: "",
        model_number: "",
        category: "",
        specifications: "",
        supplier: "",
        quantity: "",
        date: "",
    });

    const {
        product_name,
        model_number,
        category,
        specifications,
        supplier,
        quantity,
        date
    } = product;

    const onInputChange = (e, input_field) => {
        editProduct({ ...product, [input_field]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();

        await axios.put(`http://localhost:5000/product/update/${id}`, product)
            .then(res => {
                alert("Successfully Updated");
                history.push("/admin/stock");
            })
            .catch(err => { alert(err) });

    }

    const loadproduct = async () => {
        const res = await axios.get
            (`http://localhost:5000/product/get/${id}`)
        editProduct(res.data.product)
    };
    useEffect(() => {
        loadproduct();
    }, []);


    return (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Edit Items</h4>
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
                                htmlFor="grid-password">Item Name</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="product_name" defaultValue={product_name}
                                onChange={e => onInputChange(e, "product_name")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Model Number</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="model_number" defaultValue={model_number}
                                onChange={e => onInputChange(e, "model_number")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Category</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="category" defaultValue={category}
                                onChange={e => onInputChange(e, "category")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Specifications</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="specifications" defaultValue={specifications}
                                onChange={e => onInputChange(e, "specifications")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Supplier</label>
                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="supplier" defaultValue={supplier}
                                onChange={e => onInputChange(e, "supplier")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Quantity</label>
                            <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="quantity" defaultValue={quantity}
                                onChange={e => onInputChange(e, "quantity")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Date</label>
                            <input type="date" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                id="date" defaultValue={date}
                                onChange={e => onInputChange(e, "date")}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <button type="submit" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            >Update</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )

}




export default EditProducts;

