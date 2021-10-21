/* eslint-disable react/style-prop-object */

import React from "react";
import classes from './apartment.module.css';

const Apartment =(props)=>{

  return (

   <div className={classes.container}>
     <div className="d-flex flex-column " style={{padding:`5px`, margin:`5px`}}>
       <div className="row"  key ='g1'> 
        <img src={props.image} className={classes.img} alt="..."/>
       </div>
      <div className="row " >
        <div className={`col ${props.host.length ? classes.host_style : 'active'}`} >
           <strong> {props.host} </strong> 
        </div>
        <div className="col">
           {props.type}
        </div>
        <div className="col">
        
        </div>

        <div className="col" style={{display:`flex`, alignItems: `center`}}>
          <span className="material-icons" style={{color: `#ff7675`}}>star</span>{props.rating}
        </div>
      </div>

      <div className="row"> 

        {props.description}
      </div>
    </div>
    
    </div>
 
  )
}

export default Apartment;