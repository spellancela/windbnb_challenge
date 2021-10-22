
import React , {useState, useRef} from "react";
import classes from './mainheader.module.css';

const MainHeader =(props)=>{
  const [isActive, setActive] = useState(false);
 
  const addActiveClass=(e)=>{
    setActive(!isActive);
  }


  let items = JSON.parse(props.setLocation);
  const locationRef = useRef('');     


  return (
    
    <div className={`${isActive ? classes.active : ''}`} onClick={addActiveClass}> 
     <div style={{backgroundColor: `white`, padding:`1.8rem`}}
        className={`d-flex ${isActive ? classes.header_active: ''}`} > 

          <div className="col"  style={{display:`flex`, alignItems: `center`}}>
            <span className="material-icons" style={{color: `#d63031`}}>change_history</span> WindBnb
          </div>
      
          <div className="d-flex col col-4"  style={{marginRight:`50px`}}     >
           
           
              <input type="text" placeholder="Makati City"
                onChange={props.searchTextHandler} />
               
              <input type="text" placeholder="Add number of guest" 
                onChange={props.searchTextHandler}/>
        
          <i className={ `btn btn-light fa fa-search icon ${classes.button_search}`}    />   
         </div>
    
        
       </div>
       <div style={{backgroundColor: `white`, padding:`1rem`}}
        className="d-flex col-12" > 

          <div className="col"  style={{display:`flex`}}>   </div>
          <div className="d-flex col col-8">
            
                  <ul className={classes.location}>
                  { items.map(i =>  
                      <li  style={{display: `list-item`}}
                       ref={locationRef}>   
                      <span class="material-icons">room</span> {i.location } </li>)  }
                </ul>
              {items.length === 0 ?<span style={{display:`flex`, color:`red`, fontWeight:`50px`}}> There is no match </span> :
                <span style={{display:`flex`, color:`red`, fontWeight:`50px`}}> {items.length} 
                { items.length >1 ? ' Stays': ' Stay'} </span>} 
          </div> 
        </div>
       </div>  
   
  )
}

export default MainHeader;