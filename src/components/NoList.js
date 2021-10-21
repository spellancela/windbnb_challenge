import React from  'react';
import classes from './NoList.module.css';
const NoList =()=>{

    return (
        <div className={classes.header}>
          
          <h2 style={{textAlign: `center`}}>Sorry! No Match Found </h2>
          <h4> Please see other option below.</h4>

        </div>
    )

}

export default NoList;
