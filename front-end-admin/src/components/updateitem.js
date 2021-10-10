import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

function Updateitem() {

    let history = useHistory();
    const { id } = useParams();

    const [item, updateItem] = useState({
        itemname: "",
        itemimage: "",
        itemcategory: "",
        itembrand: "",
        itemcolor: "",
        itemprice: "",
        itemqty: "",
        itemdescription: "",

    });


    const { itemname,
        itemimage,
        itemcategory,
        itembrand,
        itemcolor,
        itemprice,
        itemqty,
        itemdescription
         } = item;

    const onInputChange = (e, input_field) => { 
        updateItem({ ...item, [input_field]:  e.target.value });
    }

   
    async function onSubmit(e) {
        e.preventDefault();
       
        
        await axios.put(`http://localhost:5000/item/update/${id}`, item)
            .then(res => {
                alert("Successfully Updated item Details");
                history.push("/admin/mainitem");
            })
            .catch(err => { alert(err) });

    }

    const loaditem = async () => {
        const res = await axios.get
            (`http://localhost:5000/item/get/${id}`)
            updateItem(res.data.item)
    };
    useEffect(() => {
        loaditem();
    }, []);

    return (


        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Item Update</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form  onSubmit={onSubmit}>

                <div className="flex flex-wrap">

                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Name</label>
                        <input id="itemname" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Role Name" defaultValue={itemname} onChange={e => onInputChange(e, "itemname")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Chooes Article Image</label>
                         <input id="itemimage" type="file" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         fileName="itemimage" defaultValue={itemimage} onChange= {e => onInputChange(e, "itemimage")}/>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Category</label>
                        <input id="itemcategory" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="itemcategory" defaultValue={itemcategory} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Brand</label>
                        <input id="itembrand" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="itembrand" defaultValue={itembrand} onChange={e => onInputChange(e, "salary")}></input>
                    </div>
                    
                    
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Color</label>
                        <input id="itemcolor" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Role Name" defaultValue={itemcolor} onChange={e => onInputChange(e, "itemcolor")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Price</label>
                        <input id="itemprice" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Role Name" defaultValue={itemprice} onChange={e => onInputChange(e, "itemprice")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item qty</label>
                        <input id="itemqty" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Role Name" defaultValue={itemqty} onChange={e => onInputChange(e, "itemqty")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Description</label>
                        <input id="itemdescription" type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         placeholder="Role Name" defaultValue={itemdescription} onChange={e => onInputChange(e, "itemdescription")}></input>
                    </div>
                    <div className="relative w-full mb-3">
                        <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                         type="submit">Update item Details</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Updateitem;