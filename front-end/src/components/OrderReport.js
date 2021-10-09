import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

const Order = props => (
<div className="container">

<div className="oneDetail">
  <div class="row">
    <div class="col">
      Order #{props.order._id} <br/>
      Placed on {props.order.orderDate.substring(0,10)}
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
          Item Name : {props.order.itemName}
        </div>
        <div class="col">
          Qty: {props.order.qty}
        </div>
        <div class="col">
          Order Status : {props.order.orderStatus}
        </div>
      </div>
      <div class="row">
        <div class="col"><br/>
          Address : {props.order.address}
        </div>
        <div class="col"><br/>
          Total Price : $ {props.order.amount}
        </div> 
      </div>
  </div>
</div>
</div><br/>
</div>
)

export default class OrderReport extends Component {
  constructor(props) {
    super(props);
    this.state = {orders: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/')
      .then(response => {
        this.setState({ orders: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  

  orderList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder}  />;
    })
  }

 
    


  render() {
    return (
      <div>
        <ReactToPrint
        trigger={() => <button className="btn btn-secondary btn-sm"  style={{margintop:'400px'}}>
        <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;Get a Print of the Report</button >}
        content={() => this.componentRef}
        /><br/>
         <span className="xyz">
          Date & Time : {`${new Date().toLocaleString()}`}
          </span>

          <div ref={(el) => (this.componentRef = el)}>

        <div>
            <span class="border">
            
              
            <center><h3>Order Report</h3></center><br/><br/>
           
                { this.orderList() }<br/>
                </span>
        </div>
</div>
      </div>

    )
  }
}