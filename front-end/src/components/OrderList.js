import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./OrderStyles.css";



export default class OrderList extends Component {
  constructor(props){
    super(props);

    this.state={
      orders:[]
    };
  }



  componentDidMount(){
    this.retrieveOrders();
  }

  retrieveOrders(){
    axios.get("http://localhost:5000/order/").then(res =>{
      if(res.data.success){
        this.setState({
          orders:res.data.existingOrders
        });
        console.log(this.state.orders);
      }
    });
  }

  deleteOrder(id) {
    axios.delete('http://localhost:5000/order/'+id)
      .then(response => { 
        alert("Order Canceled Successfully");
        console.log(response.data)
      });

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }


  filterData(orders , searchKey){
    const result = orders.filter((order) =>
    order.itemName.toLowerCase().includes(searchKey)||
    order.orderDate.toLowerCase().includes(searchKey)
    )
    this.setState({orders:result})
  }

  handleSearchArea = (e)=>{
    const searchKey = e.currentTarget.value ;

    axios.get('http://localhost:5000/order/')
    .then(response => {
      if(response.data.success){
        this.filterData(response.data.existingOrders,searchKey)
      }
    }); 
  }



  render(){
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
              onChange={this.handleSearchArea}>
              </input></form></div>
            </div>
          </div>
        </div>
        <br/><br/>
        {this.state.orders.map(orders =>(
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
                      <Link className = "btn btn-warning" to={"/order/update/"+orders._id}>Change Delivary Address</Link>  <a className = "btn btn-danger"  onClick={() => { this.deleteOrder(orders._id) }}><i className="far fa-trash-alt"></i>&nbsp; Cancel Order</a>
                    </div>
                  </div>
                <hr/>
                  <div class="row g-0">
                    <div class="col-6 col-md-4">
                      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded float-start" alt="Item image" width="150" height="150"/>
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
                          Total Price : Rs.{orders.amount}
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
}

