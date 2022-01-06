import React from "react";
import PageHeader from '../Header/PageHeader';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeCartData} from '../store/actions/ProductAction';

const MyCart = ({cartData,removeMyCartData}) =>{
    return(
        <div>
        <PageHeader header="Cart"/>

        </div>
    )
}

export const mapStateToProps = (state) =>{
    return{
        cartData: state.CartReducer
    }
}

export const mapDispatchToProps = (dispatch) =>{
    return {
        removeMyCartData: () =>{
            dispatch(removeCartData());
        }
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(MyCart);