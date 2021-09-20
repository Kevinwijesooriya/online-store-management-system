import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class PlaceOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeBankName = this.onChangeBankName.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeOrderDate = this.onChangeOrderDate.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeQty = this.onChangeQty.bind(this);
    this.onChangeItemPrice = this.onChangeItemPrice.bind(this);
    this.onChangeCourierService = this.onChangeCourierService.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      amount: '',
      orderDate: new Date(),
      itemName: '',
      qty : '',
      itemPrice:'',
      courierService:'',
      address:'',
      orderStatus:'Not Confirmed',
      users: [],
      deliveries:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:5000/delivery/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            deliveries: response.data.map(delivery => delivery.address),
            address: response.data[0].address
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeBankName(e) {
    this.setState({
      bankName: e.target.value
    })
  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  onChangeOrderDate(date) {
    this.setState({
      orderDate: date
    })
  }
  
  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  onChangeQty(e) {
    this.setState({
      qty: e.target.value
    })
  }

  onChangeItemPrice(e) {
    this.setState({
      itemPrice: e.target.value
    })
  }

  onChangeCourierService(e) {
    this.setState({
      courierService: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangeOrderStatus(e) {
    this.setState({
      orderStatus: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
      username: this.state.username,
      bankName: this.state.bankName,
      amount: this.state.amount,
      orderDate: this.state.orderDate,
      itemName: this.state.itemName,
      qty: this.state.qty,
      itemPrice: this.state.itemPrice,
      courierService: this.state.courierService,
      address: this.state.address,
      orderStatus: this.state.orderStatus,
    }

    console.log(order);

    axios.post('http://localhost:5000/order/add', order)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Place Order</h3>
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
          <label>Bank Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.bankName}
              onChange={this.onChangeBankName}
              />
        </div>
        <div className="form-group">
          <label>Amount: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
              />
        </div>
        <div className="form-group">
          <label>Order Date: </label>
          <div>
            <DatePicker
              selected={this.state.orderDate}
              onChange={this.onChangeOrderDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Item Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChangeItemName}
              />
        </div>
        <div className="form-group">
          <label>Qty: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.qty}
              onChange={this.onChangeQty}
              />
        </div>
        <div className="form-group">
          <label>Item Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.itemPrice}
              onChange={this.onChangeItemPrice}
              />
        </div>
        <div className="form-group">
          <label>Courier Service: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.courierService}
              onChange={this.onChangeCourierService}
              />
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <select ref="addressInput"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}>
              {
                this.state.deliveries.map(function(delivery) {
                  return <option 
                    key={delivery}
                    value={delivery}>{delivery}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <input type="submit" value="Place Order" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}