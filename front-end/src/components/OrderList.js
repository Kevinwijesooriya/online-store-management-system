import React, {useStae,useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OrderStyles.css";
import { useSelector, useDispatch } from "react-redux";


export default  function OrderList()  {
  const[order,setorder]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const user = useSelector((state) => state.cusLogin.userInfo.name);;

  
  useEffect(()=>{                
  function getorder(){            
    axios.get(`http://localhost:5000/order/user/${user}`).then((res)=>{                 
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
      <div><br/><br/>
        <div className="container">
          <div className="row">
            <div className="oneDetail">
           <center> <h3>My Orders</h3> </center>
            <div className="col-lg-3 mt-2 mb-2"> <form class="d-flex">
              <input
              className="form-control"
              type="search"
              placeholder="Search Orders"
              name="searchQuery"
              onChange={e => setSearchTerm(e.target.value)}
              >
              </input></form></div>
            </div>
          </div> 
        </div> 
        <br/><br/>
        {filteredCountrise.map((orders) =>(
            <div>
                <div className="container">

                <div className="oneDetail">
                  <div class="row">
                    <div class="col">
                      Order #{orders._id} <br/>
                      Placed on {orders.orderDate.substring(0,10)}
                    </div>
                    <div class="col">
                    </div>
                    <div class="col" style={{alignContent:'right'}}>
                      <Link className = "btn btn-warning" to={"/order/update/"+orders._id}>Change Delivary Address</Link>  <a className = "btn btn-danger"  onClick={() => {deleteOrder(orders._id) }}><i className="far fa-trash-alt"></i>&nbsp; Cancel Order</a>
                    </div>
                  </div>
                <hr/>
                  <div class="row g-0">
                    <div class="col-6 col-md-4">
                      <img src={`/images/${orders.itemImage}`} class="rounded float-start" alt="Item image" width="150" height="150"/>
                    </div>
                      <div class="col-sm-6 col-md-8">
                      <div class="row">
                        <div class="col">
                          <p>Item Name : {orders.itemName}</p>
                        </div>
                        <div class="col">
                          Qty: {orders.qty}
                        </div>
                        <div class="col">
                          Order Status : {orders.orderStatus}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col"><br/>
                          Address : {orders.address}
                        </div>
                        <div class="col"><br/>
                          Total Price : $ {orders.amount}
                        </div> 
                      </div>
                  </div>
                </div>
                </div><br/>
                </div>
                              
            </div>
        ))}  
      </div>
    )
  
        }
