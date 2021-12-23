import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({cartData}) =>{
    const history = useHistory();
    return(
        <div style={{display:'flex',marginRightL:'5rem'}}>
        <h2 style={{marginRight:'5rem'}}>E-commerce</h2>
        <div style={{display:'flex',width:'15rem',justifyContent:'space-around',marginTop:'6px'}}>
            <div onClick={()=>{
                history.push('/AddProduct')
            }} style={{cursor:'pointer'}}>
            <h5>Add Products</h5>
            </div>
            <div onClick={()=>{
                history.push('/')
            }} style={{cursor:'pointer'}}>
            <h5>Products</h5>
            </div>
            <div onClick={()=>{
                history.push('/cart')
            }} style={{cursor:'pointer'}}>
            <h5>Cart</h5>
            </div>
        </div>

        </div>
    )
}

export default Header;
