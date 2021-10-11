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
      
          
      
          window.location = '/admin/profile';
        }
      
        
      
      
        render() {
            return(

                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" >
        
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h4 className="text-blueGray-700 text-xl font-bold">Update My Profile</h4>
                        </div>
                    </div>
        
                    <div className="flex flex-wrap">
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                    </div>
        
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                     <center>   <img src={this.state.pic }width="350" height="350"></img> </center>
        
                <form onSubmit={this.onSubmit}>
        
                <div className="flex flex-wrap">
        
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">Name</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itemname"value={this.state.name} onChange={this.onChangetname} required/>
                     </div>
                
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">Phone</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itemcategory"  pattern="[0-9]{9}" value={this.state.phone} onChange={
                            this.onChangetphone
                        } required/>
                    </div>
        
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">Gender</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itembrand" value={this.state.gender} onChange={this.onChangetgender} required/>
                    </div>
        
                    <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">login-Type</label>
                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itemcolor" value={this.state.loginType} onChange={this.onChangetloginType} required/>
                        </div>
   
                        <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">E-mail</label>
                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itemcolor" value={this.state.email} onChange={this.onChangetemail} required/>
                        </div>
   
        
                        <div className="relative w-full mb-3">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password">password</label>
                        <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                         id="itemcolor" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#+!%*?&])[A-Za-z\d@$#+!%*?&]{8,}$" onChange={this.onChangetpassword} required/>
                        </div>
   
        
           
                    <div className="relative w-full mb-3">
                    <button type="submit" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">Udpate</button>
                    </div>
                    </div>
        
                </form>
                </div>
                </div>
            )
        
        }
    }
        