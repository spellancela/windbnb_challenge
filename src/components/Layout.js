import React from "react";

const Layout = (props)=>{
    
    return (
        <div className="col">
           
            {props.children}
        </div>
    )
}

export default Layout;