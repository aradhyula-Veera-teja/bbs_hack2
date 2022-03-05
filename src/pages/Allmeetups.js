import { render } from "react-dom";
import MeetupItem from "../components/MeetupItem";
import React, { useState } from 'react';

function Allmeetups(){
    const [togler,setTogler]=useState(false);
    return(
        
        <div>
            <h2>HNI login</h2>
            <input type='text' placeholder='user id' required/><br/>
            <input type='password' placeholder='password' required/>
            <button onClick={()=>{setTogler(true)}}>login</button>
            {togler &&(
      <div className='teja'>
          <div></div>
          <div className='dash_board'>
              <div >
                <h2>ivitation</h2>
                  <p>ivitation time</p>
                  <button>accept</button>
                  <button>reject</button>
                  <button>select time</button>
              </div>
          </div>
          <div>
              <h2>ivite</h2>
              <h3>vm name</h3>
              <input type='datetime-local' placeholder='mail id' required/><br/>
              <button>invite</button>
          </div>
      </div>
      )}
        </div>
    );
}
export default Allmeetups;