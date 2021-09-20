import {CUS_LOGIN_REQUEST,
       CUS_LOGIN_SUCCESS,
       CUS_LOGIN_FAIL,
       CUS_LOGOUT,
       CUS_REGISTER_REQUEST,
       CUS_REGISTER_SUCCESS,
       CUS_REGISTER_FAIL,

}  from  "../constants/CusConstants";




export const cusLoginReducer = ( state ={} , action ) => {

    switch (action.type){
      case CUS_LOGIN_REQUEST:
          return {loading :  true };
      case CUS_LOGIN_SUCCESS:
          return {loading :  false , userInfo: action.payload};
      case CUS_LOGIN_FAIL:
          return {loading :  false , error: action.payload}
      case CUS_LOGOUT:
          return {};

      default:
         return state;

    }
};



export const cusRegisterReducer = ( state ={} , action ) => {

    switch (action.type){
      case CUS_REGISTER_REQUEST:
          return {loading :  true };
      case CUS_REGISTER_SUCCESS:
          return {loading :  false , userInfo: action.payload};
      case CUS_REGISTER_FAIL:
          return {loading :  false , error: action.payload}
      

      default:
         return state;

    }
};