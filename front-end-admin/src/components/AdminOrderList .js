import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { applyMiddleware } from 'redux';
import "./OrderStyles.css";



export default class AdminOrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }



  componentDidMount() {
    this.retrieveOrders();
  }

  retrieveOrders() {
    axios.get("http://localhost:5000/order/").then(res => {
      if (res.data.success) {
        this.setState({
          orders: res.data.existingOrders
        });
        console.log(this.state.orders);
      }
    });
  }

  deleteOrder(id) {
    axios.delete('http://localhost:5000/order/' + id)
      .then(response => {
        alert("Order Canceled Successfully");
        console.log(response.data)
      });

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }


  filterData(orders, searchKey) {
    const result = orders.filter((order) =>
      order.itemName.toLowerCase().includes(searchKey) ||
      order.orderDate.toLowerCase().includes(searchKey)
    )
    this.setState({ orders: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get('http://localhost:5000/order/')
      .then(response => {
        if (response.data.success) {
          this.filterData(response.data.existingOrders, searchKey)
        }
      });
  }



  render() {
    return (
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-teal-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
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
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/admin/confirmedOrder">
                      Confirmed Orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="/admin/unconfirmedOrder">
                      Unconfiremed Orders
                    </a>
                  </li>
                </ul>
                {/* <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                <div className="flex">
                  <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-teal-600 rounded-full text-sm bg-teal-100 items-center rounded-r-none pl-2 py-1 text-teal-800 border-r-0 placeholder-teal-300">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input type="text" className="px-2 py-1 h-8 border border-solid  border-teal-600 rounded-full text-sm leading-snug text-teal-700 bg-teal-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-teal-300" 
                placeholder="Search Orders"
                name="searchQuery"
                onChange={this.handleSearchArea} />
              </div> */}
                <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      onChange={this.handleSearchArea}
                      type="text"
                      placeholder="Search Orders"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                  </div>
                </form>
              </div>
            </div>
          </nav>
          <div><br /><br />
            {this.state.orders.map(orders => (
              <div>
                <div className="container px-4 mx-auto">

                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div class="flex flex-wrap">
                        <div class="w-4/12 px-4 font-semibold text-left text-xs uppercase">
                          Order #{orders._id} <br />
                          Placed on {orders.orderDate.substring(0, 10)}
                        </div>
                        <div class="w-full px-4 flex-1">
                        </div>
                        <div class="w-8/12 px-4" style={{ alignContent: 'right' }}>
                          {/* <Link className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-6 py-3 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" to={"/order/update/"+orders._id}>Change Delivary Address</Link> */} <a className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => { this.deleteOrder(orders._id) }}><i className="far fa-trash-alt"></i>&nbsp; Cancel Order</a>
                        </div>
                      </div>
                      <br />
                      <hr className="bg-lightBlue-500" /><br />
                      <div class="flex flex-wrap">
                        <div class="w-4/12 px-4">
                          <img src={`/images/${orders.itemImage}`} class="rounded float-start" alt="Item image" width="150" height="150" />
                        </div>
                        <div class="w-8/12 px-4">
                          <div class="flex flex-wrap">
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs">
                              <p class="font-semibold text-left text-s">Item Name : {orders.itemName}</p>
                            </div>
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs">
                              Qty: {orders.qty}
                            </div>
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs">
                              Customer Name : {orders.userName}
                            </div>
                          </div>
                          <div class="flex flex-wrap">
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs"><br />
                              Address : {orders.address}
                            </div>
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs"><br />
                              Total Price : $ {orders.amount}
                            </div>
                            <div class="w-1/2 px-4 md:w-4/12 font-semibold text-left text-xs"><br/>
                              Order Status : {orders.orderStatus}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div><br />
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

