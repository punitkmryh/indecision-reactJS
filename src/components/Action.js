import React from 'react';


// Stateless Function component
const Action = (props) => {
  return ( 
  <div>
    <button className = "big-button" disabled = {!props.hasOptions}
      onClick = {props.handlePick} > 💡 What Should I Do ?
    </button> 
  </div >
  )
};

export default Action;