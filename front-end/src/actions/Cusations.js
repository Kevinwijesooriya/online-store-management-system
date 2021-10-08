import {
    CUS_LOGIN_REQUEST, 
    CUS_LOGIN_SUCCESS,
    CUS_LOGIN_FAIL,
    CUS_LOGOUT,
    CUS_REGISTER_REQUEST,
    CUS_REGISTER_SUCCESS,
    CUS_REGISTER_FAIL,
  } from "../constants/CusConstants";
import axios from "axios";



export const login = (email , password) => async (dispatch) => {


try {
  dispatch ({type: CUS_LOGIN_REQUEST});

    const config = {
      headers:{
        "Content-type":"application/json",
 
      },
    };
  
 
 const { data } = await axios.post("http://localhost:5000/customer/login",{
 
   email,password,
 
 },config);
 
 

 dispatch({ type :CUS_LOGIN_SUCCESS, payload: data });
 localStorage.setItem("userInfo",JSON.stringify(data));
 
 
  } catch (error) {
 
    dispatch({
      type: CUS_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
        

    });

  }
 
 };

 export const logout = () => async (dispatch) => {
   localStorage.removeItem("userInfo");
   dispatch({type : CUS_LOGOUT });

 }
  


 export const register = (name,email,phone,gender,loginType,password,pic) => async (dispatch) => {

  try {
    dispatch ({ type : CUS_REGISTER_REQUEST});

const config = {
headers:{
  "Content-type" : "application/json",
}

};


const { data } = await axios.post(
"http://localhost:5000/customer/",
{ name,
  email,
  phone,
  gender,
  loginType,
  password,
  pic} ,
  config

);

dispatch ({ type : CUS_REGISTER_SUCCESS, payload: data});
dispatch ({ type : CUS_LOGIN_SUCCESS, payload: data});

localStorage.setItem("userInfo",JSON.stringify(data));

  }catch(error){
    dispatch({
      type:  CUS_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
        

    });


}
   };


 