
import React from "react";
import Apartment from './Apartment';
import classes from './ApartmentList.module.css';

const ApartmentList =(props)=>{
   
  let list = props.data.map((apartment, id)=>{
     return <Apartment key={id} image ={apartment.image} 
     name={apartment.name}
     description ={apartment.description}    
     location={apartment.location} 
     rating= {apartment.rating} 
     host= {apartment.host}  type={apartment.type}
     ></Apartment>
  }
      
  )
  return (
     <div className={classes.container}>  
       
       {list}
        
     </div>
  )
}

export default ApartmentList;