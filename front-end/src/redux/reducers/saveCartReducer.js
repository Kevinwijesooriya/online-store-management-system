import * as actionTypes from '../constants/saveCartConstants';

// export const getCartItemsReducer = (state = {cart: []}, action) => {
//     switch(action.type){
//         case actionTypes.GET_CART_ITEMS_REQUEST:
//             return{
//                 loading:true,
//                 products: []
//             };
//     case actionTypes.GET_CART_ITEMS_SUCCESS:
//             return{
//                 loading: false,
//                 products: action.payload
//             };
//     case actionTypes.GET_CART_ITEMS_FAIL:
//             return{
//                 loading: false,
//                 error: action.payload
//             };
//     default:
//         return state;
//     }
// };

export const getCartItemsReducer = (state = {product: {}}, action) =>{
    switch(action.type){
        case actionTypes.GET_CART_ITEMS_DETAILS_REQUEST:
            return{
                loading: true,
            }
        case actionTypes.GET_CART_ITEMS_SUCCESS:
            return{
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_CART_ITEMS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_CART_ITEMS_DETAILS_RESET:
            return{
                product: {}
            }
        default:
                return state;
          
    }
};