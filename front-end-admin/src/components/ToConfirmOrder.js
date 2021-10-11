import React, { Component } from 'react';
import axios from 'axios';
import "./OrderStyles.css";


export default class ToConfirmOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this);
    //this.onChangeOrderDate = this.onChangeOrderDate.bind(this);
    //this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      itemName:'',
      itemImage : '',
      orderDate :'',
      orderStatus : '', 
      address:'',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          itemImage: response.data.itemImage,
          orderDate: response.data.orderDate,
          orderStatus: response.data.orderStatus,
          address: response.data.address
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeOrderDate(e) {
    this.setState({
      orderDate: e.target.value
    })
  }

  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  onChangeItemImage(e) {
    this.setState({
      itemImage: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
      //itemName: this.state.itemName,
      //itemImage: this.state.itemImage,
      //orderDate: this.state.orderDate,
      //address: this.state.address,
      orderStatus : "Confirmed"
    }

    console.log(order);

    axios.post('http://localhost:5000/order/admin/confirm/'+ this.props.match.params.id, order)
      .then(res => console.log(res.data));
      alert("Order Confirmed Successfully!")
    window.location = '/admin/confirmedOrder';
  }

  render() {
    return (
    <div>
      <h3>Confirm Order</h3><br/>
      <div class="container" >
          <div className="oneDetail">
                Order #{this.props.match.params.id}<br/>
                Placed on {this.state.orderDate.substring(0,10)}
              <hr/><br/>
              <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <img src={`/images/${this.state.itemImage}`} class="rounded float-start" alt="Item image" width="150" height="150"/>
                    </div>
                    <div class="col">
                    Item Name : {this.state.itemName}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <center><input type="submit" value="Confirm Order" className="btn btn-primary" /></center>
                  </div>
                  </form>
                </div>
            </div>
          </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
  }
}
