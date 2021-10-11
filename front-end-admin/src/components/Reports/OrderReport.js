import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactToPrint from 'react-to-print';


export default class OrderReport extends Component {
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
      <div>
        {/*<div className="container">
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h3>My Orders</h3>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search Orders"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
            </div>
          </div>
        </div>
    <br/><br/>*/}
          <div ref={(el) => (this.componentRef = el)}>
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" >
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                      <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1"><br/>
                          <h3
                            className="text-blueGray-700 text-xl font-bold">
                            Order Report
                          </h3><br/>
                        </div>
                      </div>
                      <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100">
                            <tr>
                              {/*<th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col"></th>*/}
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Order ID</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Order Date</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Item Name</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Qty</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Total Price</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Address</th>
                              <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100 "
                                scope="col">Order Status</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                          {this.state.orders.map(orders  =>(
                              <tr >
                                {/*<th scope="row">{index +1 }</th>*/}
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> {orders._id}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> {orders.orderDate.substring(0,10)}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{orders.itemName}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> {orders.qty}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"> $ {orders.amount}</td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{orders.address}</td> 
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{orders.orderStatus}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <br /><br /><br />
                      </div>
                    </div>
            </div>
         </div>
         <ReactToPrint
            trigger={() => <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"  style={{margintop:'400px'}}>
              <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;Get a Print of the Report</button >}
              content={() => this.componentRef}
              />
        </div>
    );
  }
}
