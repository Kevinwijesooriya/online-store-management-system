import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "./headerSalary";
import Sidebar from "./Sidebar";
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading";
import  { Component } from 'react';





    export default class UpdateAdmin extends Component {
 
        constructor(props) {
          super(props);
      
          this.onChangetname = this.onChangetname.bind(this);
          this.onChangetphone = this.onChangetphone.bind(this);
          this.onChangetemail = this.onChangetemail.bind(this);
          this.onChangetgender= this.onChangetgender.bind(this);
          this.onChangetloginType = this.onChangetloginType.bind(this);
          this.onChangetpassword = this.onChangetpassword.bind(this);
          this.onChangetpic = this.onChangetpic.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
  
      
          this.state = {
          
            name: '',
            phone: '',
            email: '',
            gender: '',
            loginType: '',
            password: '',
            pic: '',
          
          }
        }
      
        componentDidMount() {
          axios.get('http://localhost:5000/admin/'+this.props.match.params.id)
            .then(response => {
              this.setState({
                name: response.data.name,
                phone: response.data.phone,
                email: response.data.email,
                gender: response.data.gender,
                loginType: response.data.loginType,
                password: response.data.password,
                pic: response.data.pic,
              })   
            })
            .catch(function (error) {
              console.log(error);
            })
      
          
      
        }
      
      
        onChangetname(e) {
          this.setState({
            name: e.target.value
          })
        }
        onChangetphone(e) {
          this.setState({
            phone: e.target.value
          })
        }
      
        onChangetemail(e) {
          this.setState({
            email: e.target.value
          })
        }
        onChangetgender(e) {
          this.setState({
            gender: e.target.value
          })
        }
      
        onChangetloginType(e) {
          this.setState({
            loginType: e.target.value
          })
        }
        onChangetpassword(e) {
          this.setState({
            password: e.target.value
          })
        }
        onChangetpic(e) {
          this.setState({
            pic: e.target.value
          })
        }
      
      
        onSubmit(e) {
          e.preventDefault();
      
          const admin = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            gender: this.state.gender,
            loginType: this.state.loginType,
            password: this.state.password,
            pic: this .state.pic
          }
      
          console.log(admin);
      
          axios.put('http://localhost:5000/admin/' + this.props.match.params.id, admin)
            .then(res => console.log(res.data));
      
          
      
          window.location = '/AdminList';
        }
      
      
      
        render() {
          return (
          <div>
                <center>
                <h3>Edit Admin records</h3>
     
      </center>
            

            <img src= {this.state.pic}  width="200" height="300"></img>

            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>name: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangetname}
                    />
              </div>
              <div className="form-group"> 
                <label>phone: </label>
                <input  type="text"
                pattern="[0-9]{9}"
                    required
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.onChangetphone}
                    />
              </div>



              <label htmlFor="phone" className="form-label">Gender</label>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value = "male" required
onChange={this.onChangetgender}
       />
  <label class="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value = "female"required
 onChange={this.onChangetgender} />
  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>


              <div className="form-group">
                <label>email: </label>
                <input  type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangetemail}
                    />
              </div>



       
              <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="product" required 
 onChange={this.onChangetloginType}/>
  <label class="form-check-label" for="inlineRadio1">Product</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="finacial"required
 onChange={this.onChangetloginType} />
  <label class="form-check-label" for="inlineRadio2">Finacial</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="store" required
 onChange={this.onChangetloginType} />
  <label class="form-check-label" for="inlineRadio3">Store</label>
</div>


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="quary" required
 onChange={this.onChangetloginType}/>
  <label class="form-check-label" for="inlineRadio3">Quary</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="user" required
 onChange={this.onChangetloginType} />
  <label class="form-check-label" for="inlineRadio3">User</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="delivery" required
 onChange={this.onChangetloginType} />
  <label class="form-check-label" for="inlineRadio3">delivery</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="order" required
 onChange={this.onChangetloginType} />
  <label class="form-check-label" for="inlineRadio3">order</label>
</div>



              <div className="form-group">
                <input type="submit" value="Edit admin" className="btn btn-primary" />
              </div>
            </form>
          </div>
          )
        }
      }


