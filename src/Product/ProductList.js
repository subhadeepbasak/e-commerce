import React, { useEffect } from "react";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";
import {loadCartDataSuccess} from "../store/actions/ProductAction";
import PageHeader from "../Header/PageHeader";
import './ProductList.css';

const ProductList = ({productData,cartData,addProductToCart}) =>{
    useEffect(()=>{
        console.log(JSON.stringify(productData));
    },[productData])
    return(
        <>
            <PageHeader header="Product"/>
            {
                productData.length>0 ? productData.map((res)=>{
                    return(
                        <div className="cp-product">
                            <div className="product-image"></div>
                            <div>
                                <div className="product-text">
                                    <div className="text-size">{res.productName}</div>
                                    <div className="product-price">{res.price}</div>
                                </div>
                                <p className="description-text">{res.desc}</p>
                            </div>
                        </div>
                    )
                })
                :
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h1>no product found</h1>
                </div>
            }
        </>
    )
}

export const mapStateToProps = (state) =>{
    return {
        productData : state.ProductReducer,
        cartData : state.cartData,
    }
}

export const mapDispatchToProps = (dispatch) =>{
    return {
        addProductToCart:(cartData) =>{
            dispatch(loadCartDataSuccess(cartData))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);