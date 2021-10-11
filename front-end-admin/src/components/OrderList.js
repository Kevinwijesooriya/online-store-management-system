import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
<div>
  <div class="container" style={{border:'1px solid', borderBlockColor:'blue' , padding: 10}}>
    <div class="row">
      <div class="col">
        Order #{props.order._id} <br/>
        Placed on {props.order.orderDate}
      </div>
      <div class="col">
      </div>
      <div class="col" style={{alignContent:'right'}}>
        <Link className = "btn btn-warning" to={"/edit/"+props.order._id}>Change Delivary Address</Link>  <a className = "btn btn-danger"  onClick={() => { props.deleteOrder(props.order._id) }}><i className="far fa-trash-alt"></i>&nbsp; Cancel Order</a>
      </div>
    </div>
  <hr/>
    <div class="row g-0">
      <div class="col-6 col-md-4">
        <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518568740560-333139a27e72%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZhbGVudGluZXxlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvalentine&tbnid=MbdDsqai50Yy4M&vet=12ahUKEwiL3K3BzffyAhUYaSsKHT-qDE4QMygAegUIARDLAQ..i&docid=SGLo61kdlZ9tCM&w=1000&h=1500&q=images&ved=2ahUKEwiL3K3BzffyAhUYaSsKHT-qDE4QMygAegUIARDLAQ' class="rounded float-start" alt="Item image"/>
      </div>
        <div class="col-sm-6 col-md-8">
        <div class="row">
          <div class="col">
            {props.order.itemName}
          </div>
          <div class="col">
            Qty: {props.order.qty}
          </div>
          <div class="col">
            Order Status :{props.order.orderStatus}
          </div>
        </div>
        <div class="row">
          <div class="col"><br/>
            Address :{props.order.address}
          </div>
          <div class="col"><br/>
            Order Amount : Rs.{props.order.amount}
          </div> 
        </div>
    </div>
  </div>
</div><br/>
</div>
)

export default class OrderList extends Component {
  constructor(props) {
    super(props);

    this.deleteOrder = this.deleteOrder.bind(this)

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

  deleteOrder(id) {
    axios.delete('http://localhost:5000/order/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      orders: this.state.orders.filter(el => el._id !== id)
    })
  }

  orderList() {
    return this.state.orders.map(currentorder => {
      return <Order order={currentorder} deleteOrder={this.deleteOrder} key={currentorder._id}/>;
    })
  }

  render() {
    return (
      <div>
          <span class="border">
          
            
          <h3>My Orders</h3>
          
              { this.orderList() }<br/>
              </span>
        </div>
    )
  }
}