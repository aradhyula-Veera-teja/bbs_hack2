import classes from './Addform.module.css';
import {MdCancel,MdOutlineCancel} from 'react-icons/md';
import {BsPlusLg,BsImage} from 'react-icons/bs';
import React, { useState } from 'react';
function Addform(){
    const [togler,setTogler]=useState(false);
    return(
        <div className={classes.container}>
            <h2>VM login</h2>
            <input type='text' placeholder='user id' required/><br/>
            <input type='password' placeholder='password' required/>
            <button onClick={()=>{setTogler(true)}}>login</button>
            {togler &&(
      <div className='teja'>
          <div className='dash_board'>
              <h2>ivitations</h2>
              <p>hni name </p>
              <p>time and date </p>
              <button>accept</button>
              <button>reject</button>
              <button>select time</button>
              <p>hni name2</p>
              <p>time and date </p>
              <button>accept</button>
              <button>reject</button>
              <button>select time</button>
              
          </div>
          <div>
              <h2>ivite</h2>
              <input type='text' placeholder='user name' required/><br/>
              <input type='email' placeholder='mail id' required/><br/>
              <p>select date and time</p><br />
              <input type='datetime-local' placeholder='mail id' required/><br/>
              <button>invite</button>
          </div>
      </div>
      )}
        </div>
    
    )
}
export default Addform;
