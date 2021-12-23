import * as actionTypes from './Actiontypes';

export const loadPdpDataSuccess = (productData) =>({
    type: actionTypes.PRODUCT_DATA_LOADING_COMPLETE,
    payload: productData,
});

export const loadCartDataSuccess = (cartData) =>({
    type: actionTypes.CART_DATA_ADD,
    payload: cartData,
});

export const removeCartData = () =>({
    type: actionTypes.REMOVE_CART_DATA,
    payload: [],
});