import React from 'react';
import Option from './Option';


export default class Options extends React.Component {
  render() {
    return (
      <div>
        <div className="widget--header">
          <h3 className = "widget-header__title" > Your Options 👇🏼 </h3>
          <button className = 'button button--link' onClick = {this.props.handleDeleteOptions}> 🗑 - RemoveAll </button>
        </div>
        
        <div className="widget__message">
          {
            this.props.options.length > 0 ?
              'Tadaa 🤷🏻‍♂️ Here are your options 🔖' : ' ⚠️ Please add few options to get Started!'
          } 
        </div>
        <div className="option__text">
          {this.props.options.map((option,index) => (
            <Option
              key={option}
              optionText={option}
              count={index+1}
              handleDeleteSingleOption={this.props.handleDeleteSingleOption}
            />
          ))}
        </div>
      </div>
    );
  }
}
