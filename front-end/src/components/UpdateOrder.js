
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      itemName:'',
      address:'',
      deliveries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
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
      address: this.state.address
    }

    console.log(order);

    axios.post('http://localhost:5000/order/update/' + this.props.match.params.id, order)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <div class="container" style={{border:'1px solid', borderBlockColor:'blue' , padding: 10}}>
        Order #{this.props.match.params.id}<br/>
        Placed on <div></div>
      <hr/>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <img src='bfdsfbg' class="rounded float-start" alt="Item image"/>
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
              </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Update Delivery Address" className="btn btn-primary" />
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
