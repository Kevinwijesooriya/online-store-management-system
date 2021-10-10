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
      <div><br/><br/>
        <div className="container">
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
        <br/><br/>
        <ReactToPrint

            trigger={() => <button className="btn btn-dark"  style={{margintop:'400px'}}>

                <i class="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp;Get a Print of the Report</button >}

            content={() => this.componentRef}

          />



          <div ref={(el) => (this.componentRef = el)}>
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
                <br/><br/>            
            </div>
          
        ))}
      </div>
      </div>
    )
  }
}


{/*
const Order = props => (
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
              <div className="container">
                <div className="oneDetail">
                  <center><h3>Order Report</h3></center><br/><br/>
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
            </span>
        </div>
      </div>
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
        ))}<br/>
                  </span>
          </div>
        </div>
      </div>

    )
  }
}

*/}