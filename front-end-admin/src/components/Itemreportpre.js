import React,{useState,useEffect} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";
import Product from "../components/itemnav";


import { Link } from "react-router-dom";

function DisplayItems(){

   
    const [searchTerm, setSearchTerm] = useState('');
    const [items,setItems] = useState([{
        _id:'',
        itemname: '',
        itemimage: '',
        itemcategory: '',
        itembrand: '',
        itemcolor: '',
        itemprice: '',
        itemqty: '',
        itemdescription: '',
        date_ob: ''

    }]);
    const location = useLocation();
    
    useEffect(() => {
        console.log("redirected to home");
        function getitems(){
            axios.get("http://localhost:5000/item/").then((res) => {
                setItems(res.data);
            }).catch((err) =>{
                alert(err.message);
            })
        }
        getitems();
    }, [])

    const filteredCountrise = items.filter(std=>{
        return (std.itemname.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
        std.date_ob.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                
     })

    
    return(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
        <div className="rounded-t mb-0 px-4 py-3 border-0">

            <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">Item Report</h6>
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                
                            </span>
                            <input
                                onChange={e => setSearchTerm(e.target.value)}
                                type="text"
                                placeholder="Enter the date"
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
                <th  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">
                    Item Image</th>
                <th className="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">
                    Item Name</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                    >Item Category</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">
                     Item Brand</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">
                    Item Price</th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 ">
                    Date</th>               
                </tr>
                </thead>


            {filteredCountrise.map( item =>
           
    
                <tbody>
                <tr>
                <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <img  src={`/images/${item.itemimage}`}  alt="" width="100" height="100" /></td>
                <td  className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <p >{item.itemname}</p></td>
                <td className="border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <p>{item.itemcategory}</p></td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     <p >{item.itembrand}</p></td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <p >$ {item.itemprice}</p></td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <p > {item.date_ob}</p></td>           
                </tr>          
                </tbody>
        
                )}

                </table>   
        </div>
        </div>
        </div>
    )
   
}

export default DisplayItems