import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "./headerSalary";
import Sidebar from "./Sidebar";
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading";
import  { Component } from 'react';





    export default class UpdateProfile extends Component {
 
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
          axios.get('http://localhost:5000/customer/'+this.props.match.params.id)
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
      
          axios.put('http://localhost:5000/customer/' + this.props.match.params.id, admin)
            .then(res => console.log(res.data));
      
          
      
          window.location = '/profile';
        }
      
        
      
      
        render() {
          return (
          <div className='container'>
                <center>
                <h3>Edit my Profile</h3>
     
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
                <label>Login-Type</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.loginType}
                  readOnly
                    />
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

              <div className="form-group">
                <label>Password: </label>
                <input  type="password"
                 pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$"
                    required
                    className="form-control"
                    onChange={this.onChangetpassword}
                    />
              </div>

<br></br>

 



              <center className="form-group">
                <input type="submit" value="Update" className="btn btn-primary" />
              </center>
            </form>
          </div>
          )
        }
      }


