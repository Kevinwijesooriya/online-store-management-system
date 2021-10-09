import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
  
    <div class="container" style={{border:'1px solid', borderBlockColor:'blue' , padding: 10}}>
      <div class="row">
        <div class="col">
          Order #{props.order._id} <br/>
          Placed on {props.order.orderDate.substring(0,10)}
        </div>
      </div>
    <hr/>
      <div class="row">
        <div class="col">
          <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518568740560-333139a27e72%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZhbGVudGluZXxlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvalentine&tbnid=MbdDsqai50Yy4M&vet=12ahUKEwiL3K3BzffyAhUYaSsKHT-qDE4QMygAegUIARDLAQ..i&docid=SGLo61kdlZ9tCM&w=1000&h=1500&q=images&ved=2ahUKEwiL3K3BzffyAhUYaSsKHT-qDE4QMygAegUIARDLAQ' class="rounded float-start" alt="Item image"/>
        </div>
        <div class="col">
          {props.order.itemName}
        </div>
        <div class="col">
          Qty: {props.order.qty}
        </div>
        <div class="col">
            <a className = "btn btn-warning"  onClick={() => { props.confirmOrder(props.order._id) }}><i className="far fa-trash-alt"></i>&nbsp; Confirm Order</a>
        </div>
      </div>
    </div>
  
  
)
      
  export default class ConfirmOrder extends Component {
    constructor(props) {
      super(props);
      this.state = {orders: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:8035/order/confirmOrder')
        .then(response => {
          this.setState({ orders: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
     
    orderList() {
      return this.state.orders.map(currentorder => {
        return <Order order={currentorder} key={currentorder._id}/>;
      })
    }
  
    render() {
      return (
        <div>
          <h3>Orders</h3>
              { this.orderList() }
        </div>
      )
    }
  }
/*
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class ConfirmOrder extends Component {
  constructor(props) {
    super(props);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      orderStatus:'Not Confirmed',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8035/order/update'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      duration: this.state.duration,
      
    }

    console.log(exercise);

    axios.post('http://localhost:8035/order/update/' + this.props.match.params.id, exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>My Orders</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}

*/