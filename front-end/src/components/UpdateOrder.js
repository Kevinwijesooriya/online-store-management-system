
import React, { Component } from 'react';
import axios from 'axios';


export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeOrderDate = this.onChangeOrderDate.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      itemName:'',
      orderDate :new Date(),
      address:'',
      deliveries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          orderData: new Date(response.data.orderDate),
          address: response.data.address
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/delivery/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            deliveries: response.data.map(delivery=> delivery.address),
          })
        }
      })
      .catch((error) => {
        console.log(error);
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

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const order = {
      itemName: this.state.itemName,
      orderDate: this.state.orderDate,
      address: this.state.address
    }

    console.log(order);

    axios.post('http://localhost:5000/order/update/' + this.props.match.params.id, order)
      .then(res => console.log(res.data));
      alert("Successfully Updated!")
    window.location = '/order/';
  }

  render() {
    return (
    <div>
      <h3>Update Order Details</h3>
      <div class="container" >
          <div className="oneDetail">
                Order #{this.props.match.params.id}<br/>
                Placed on
              <hr/>
              <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="rounded float-start" alt="Item image" width="150" height="150"/>
                    </div>
                    <div class="col">
                    {this.state.itemName}
                    </div>
                  </div>
                </div>
                <div class="col">
                  <form onSubmit={this.onSubmit}>
                  <div className="form-group"> 
                      <label>Delivery Address: </label>
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
                      </select><br/>
                  </div>
                  <div className="form-group">
                    <center><input type="submit" value="Update Delivery Address" className="btn btn-primary" /></center>
                  </div>
                  </form>
                </div>
            </div>
          </div>
      </div>
    </div>
    )
  }
}
