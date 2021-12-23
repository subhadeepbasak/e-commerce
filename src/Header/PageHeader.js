import React from "react";

const PageHeader = ({header}) =>{
    return (
        <div style={{width:'100%',height:'150px',backgroundColor:'#00001a',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <h2 style={{display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>{header}</h2>
        </div>
    );
}

export default PageHeader;