import React,{useState} from "react"
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Additems = () => {

    let history = useHistory();

    const [itemname,setItemName] = useState("");
    const [itemimage,setItemImage] = useState("");
    const [itemcategory,setItemCategory] = useState("");
    const [itembrand,setItemBrand] = useState("");
    const [itemcolor,setItemColor] = useState("");
    const [itemprice,setItemPrice] = useState("");
    const [itemqty,setItemQty] = useState("");
    const [itemdescription,setItemDescription] = useState("");

    const onChangeFile = e =>{
        setItemImage(e.target.files[0]);
    }


    const changeOnClick = (e) =>{
    e.preventDefault();
        
        const formData = new FormData();

        formData.append("itemname",itemname);
        formData.append("itemimage",itemimage);
        formData.append("itemcategory",itemcategory);
        formData.append("itembrand",itembrand);
        formData.append("itemcolor",itemcolor);
        formData.append("itemprice",itemprice);
        formData.append("itemqty",itemqty);
        formData.append("itemdescription",itemdescription);
    
   

        setItemName("");
        setItemCategory("");
        setItemBrand("");
        setItemColor("");
        setItemPrice("");
        setItemQty("");
        setItemDescription("");

        
        
        axios.post("http://localhost:5000/item/add",formData).then(()=>{
            alert("Item Added");
            history.push("/admin/mainitem");
            
        }).catch((err)=>{
            alert(err)
        })
    }

    return(

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h4 className="text-blueGray-700 text-xl font-bold">Add Item</h4>
                </div>
            </div>

            <div className="flex flex-wrap">
                <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

        <form onSubmit={changeOnClick}>

        <div className="flex flex-wrap">

            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Name</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemname" onChange={(e)=>{

                    setItemName(e.target.value);

                }}/>
             </div>
        
            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Category</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemcategory" onChange={(e)=>{

                    setItemCategory(e.target.value);
                    
                }}/>
            </div>

            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Brand</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itembrand" onChange={(e)=>{

                    setItemBrand(e.target.value);

                }}/>
            </div>

            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Color</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemcolor" onChange={(e)=>{

                    setItemColor(e.target.value);

                }}/>
                </div>
                
                <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Quatity</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemqty" onChange={(e)=>{

                    setItemQty(e.target.value);

                }} />
                </div>

                <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Price</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemprice" onChange={(e)=>{

                    setItemPrice(e.target.value);

                }}/>
            </div>

            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Chooes Article Image</label>
                <input type="file" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 fileName="itemimage" onChange= {onChangeFile}/>

            </div>

            <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password">Item Description</label>
                <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 id="itemdescription" onChange={(e)=>{

                    setItemDescription(e.target.value);

                }}/>
            </div >

            <div className="relative w-full mb-3">
            <button type="submit" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">Add to the Store</button>
            </div>
            </div>

        </form>
        </div>
        </div>
    )

}

export default Additems;