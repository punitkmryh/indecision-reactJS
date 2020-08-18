import React from 'react';


export default Option =(props)=>{
 
    return (
      <div className="option">
        <p>{'📌 ' + props.optionText}</p>
        <button className='button button--link'
          onClick={(e) => {
            props.handleDeleteSingleOption(props.optionText);
          }}
        >
          ✂️ Remove
        </button>
      </div>
    );
  }
