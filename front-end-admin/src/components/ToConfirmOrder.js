import React, { Component } from 'react';
import axios from 'axios';
import "./OrderStyles.css";


export default class ToConfirmOrder extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemImage = this.onChangeItemImage.bind(this);
    this.onChangeOrderDate = this.onChangeOrderDate.bind(this);
    //this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      itemName: '',
      itemImage: '',
      orderDate: '',
      orderStatus: '',
      address: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/order/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          itemImage: response.data.itemImage,
          orderData: response.data.orderDate,
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
      orderStatus: "Confirmed"
    }

    console.log(order);

    axios.post('http://localhost:5000/order/admin/confirm/' + this.props.match.params.id, order)
      .then(res => console.log(res.data));
    alert("Order Confirmed Successfully!")
    window.location = '/admin/confirmedOrder';
  }

  render() {
    return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-10/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">


              <div className="rounded-t mb-0 px-6 py-6">
                <div class="btn-wrapper text-center">

                <div class="w-full px-4 flex-1 md:w-auto md:flex-none uppercase">
                
                  Order #{this.props.match.params.id}<br />
                  Placed on
                  <hr /><br />
                <div class="w-full px-4 flex-1 md:w-auto md:flex-none">
                <img src={`/images/${this.state.itemImage}`} class="inline-flex items-center justify-center" alt="Item image" width="150" height="150" />
                </div>
                <br />
                <div class="font-semibold text-left text-center uppercase">                
                  Item Name : {this.state.itemName}                
                  </div>

                  </div>
                  <br />
                  <br />
                <form onSubmit={this.onSubmit}>

                  <div className="form-group">
                    <input type="submit" value="Confirm Order" className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" />
                  </div>

                </form>

                </div>


              </div>



            </div>
          </div><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}
