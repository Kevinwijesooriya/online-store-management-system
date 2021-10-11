import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import '../styles/Sidebar.css';
import Header from "./headerSalary";
import Sidebar from "./Sidebar";
import ErrorMesssage from "./ErrorMessage";
import Loading from "./loading";
import { Component } from 'react';





export default class UpdateProfile extends Component {

  constructor(props) {
    super(props);

    this.onChangetname = this.onChangetname.bind(this);
    this.onChangetphone = this.onChangetphone.bind(this);
    this.onChangetemail = this.onChangetemail.bind(this);
    this.onChangetgender = this.onChangetgender.bind(this);
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
    axios.get('http://localhost:5000/customer/' + this.props.match.params.id)
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
      pic: this.state.pic
    }

    console.log(admin);

    axios.put('http://localhost:5000/customer/' + this.props.match.params.id, admin)
      .then(res => console.log(res.data));



    window.location = '/profile';
  }




  render() {
    return (

      <div className="bg-info"
      style={{
        height: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80)",
          backgroundsize: "cover",
          margin: "0",
          padding: "0",
          fontfamily: "sans-serif",
      
      }}>


        
      <div
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div style={{
          width: "1300px",
        }}
          class="container">
          <center>
            <h3 class="oneDetail">Edit profile</h3>

          </center>


          <img src={this.state.pic} width="200" height="300" className="rounded float-left"></img>
          <form onSubmit={this.onSubmit}>
            <div class="table table-success table-striped text-secondary">
              <label>Name: </label> 
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangetname}
              />
            </div><br/>
            <div class="table table-success table-striped text-secondary">
              <label>Phone: </label>
              <input type="text"
                pattern="[0-9]{9}"
                required
                className="form-control"
                value={this.state.phone}
                onChange={this.onChangetphone}
              />
            </div><br/>



            <label htmlFor="phone" class="table table-success table-striped text-secondary">Gender</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" required
                onChange={this.onChangetgender}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="female" required
                onChange={this.onChangetgender} />
              <label class="form-check-label" for="flexRadioDefault2">
                Female
              </label>
            </div><br/>



            <div class="table table-success table-striped text-secondary">
              <label>Login-Type</label>
              <input
                type="text"
                className="form-control"
                value={this.state.loginType}
                readOnly
              />
            </div><br/>



            <div class="table table-success table-striped text-secondary">
              <label>email: </label>
              <input type="email"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangetemail}
              />
            </div><br/>

            <div class="table table-success table-striped text-secondary">
              <label>Password: </label>
              <input type="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$"
                required
                className="form-control"
                onChange={this.onChangetpassword}
              />
            </div>

            <br/>





            <center className="form-group">
              <input type="submit" value="Edit admin" className="btn btn-primary" />
            </center>
          </form>
        </div></div></div>
    )
  }
}


