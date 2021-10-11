import React, { Component } from 'react';
import axios from 'axios';


export default class UpdateOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this);
    //this.onChangeOrderDate = this.onChangeOrderDate.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      itemName:'',
      itemImage : '',
      orderDate :'',
      address:'',
      deliveries: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          itemImage: response.data.itemImage,
          orderDate: response.data.orderDate,
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

  // onChangeOrderDate(Date) {
  //   this.setState({
  //     orderDate: this.state.orderDate
  //   })
  // }

  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
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
      // itemName: this.state.itemName,
      // itemImage: this.state.itemImage,
      // orderDate: this.state.orderDate,
      address: this.state.address
    }

    console.log(order);

    axios.post('http://localhost:5000/order/update/' + this.props.match.params.id, order)
      .then(res => console.log(res.data));
      alert("Successfully Updated!")
    window.location = '/profile/orderlist';
  }

  render() {
    return (
    <div><br/><br/>
      <center><h3>      Update Order Details</h3></center><br/>
      <div class="container" >
          <div className="oneDetail" style={{fontSize:'1.0rem'}}>
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
      </div><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    )
  }
}
