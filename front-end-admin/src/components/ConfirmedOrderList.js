import React, {useStae,useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OrderStyles.css";
import { useSelector, useDispatch } from "react-redux";


export default  function ConfirmedOrderList()  {
  const[order,setorder]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const orderstatus = "Confirmed";

  
  useEffect(()=>{                
  function getorder(){            
    axios.get(`http://localhost:5000/order/admin/${orderstatus}`).then((res)=>{                 
      console.log(res);                 
      setorder(res.data);            
    }).catch((err)=>{                
      alert(err.massage);            
    })        
  }        
  getorder();    
},[]);
console.log(order);



  function deleteOrder(id) {
    axios.delete('http://localhost:5000/order/'+id)
      .then(response => { 
        alert("Order Canceled Successfully");
        window.location.reload(false);
        console.log(response.data)
      });
    }
  
     const filteredCountrise = order.filter(std=>{

       return (std.itemName.toLowerCase().includes(searchTerm.toLocaleLowerCase())||
       std.orderDate.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
    })


    return (
      <div><br/><nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-teal-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="/admin/order">
              All Orders
              </a>
              <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div className="lg:flex flex-grow items-center">
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                      Confirmed Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/admin/unconfirmedOrder">
                      Unconfiremed Orders
                    </a>
                  </li>
              </ul>
              <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                <div className="flex">
                  <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-teal-600 rounded-full text-sm bg-teal-100 items-center rounded-r-none pl-2 py-1 text-teal-800 border-r-0 placeholder-teal-300">
                    {/* <i className="fas fa-search"></i> */}
                  </span>
                </div>
                <input type="text" className="px-2 py-1 h-8 border border-solid  border-teal-600 rounded-full text-sm leading-snug text-teal-700 bg-teal-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-teal-300" 
                placeholder="Search Orders"
                name="searchQuery"
                onChange={e => setSearchTerm(e.target.value)} />
              </div>
            </div>
          </div>
        </nav>                
      <div><br/><br/>
        {filteredCountrise.map((orders) =>(
            <div>
            <div className="container px-4 mx-auto">

            <div className="oneDetail">
              <div class="flex flex-wrap">
                <div class="w-4/12 px-4">
                  Order #{orders._id} <br/>
                  Placed on {orders.orderDate.substring(0,10)}
                </div>
                 <div class="w-full px-4 flex-1">
                </div> 
                <div class="w-8/12 px-4" style={{alignContent:'right'}}>
                  {/* <Link className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to={"/order/update/"+orders._id}>Change Delivary Address</Link> */} <a className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  onClick={() => {deleteOrder(orders._id) }}><i className="far fa-trash-alt"></i>&nbsp; Cancel Order</a> 
                </div>
              </div><br/>
            <hr/><br/>
              <div class="flex flex-wrap">
                <div class="w-4/12 px-4">
                  <img src={`/images/${orders.itemImage}`} class="rounded float-start" alt="Item image" width="150" height="150"/>
                </div>
                  <div class="w-8/12 px-4">
                  <div class="flex flex-wrap">
                    <div class="w-full px-4 flex-1">
                      <p>Item Name : {orders.itemName}</p>
                    </div>
                    <div class="w-full px-4 flex-1">
                      Qty: {orders.qty}
                    </div>
                    <div class="w-full px-4 flex-1">
                      Order Status : {orders.orderStatus}
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="w-full px-4 flex-1"><br/>
                      Address : {orders.address}
                    </div>
                    <div class="w-full px-4 flex-1"><br/>
                      Total Price : $ {orders.amount}
                    </div> 
                  </div>
              </div>
            </div>
            </div><br/>
            </div>
                          
        </div>
        ))}  
      </div></div>
    )
  
        }
