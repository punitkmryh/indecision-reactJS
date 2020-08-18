import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  // #region -> Old Binding syntax using constructor for 'this'.
  // constructor(props) {
  //   super(props);
  //   this.handleAddCompMethod = this.handleAddCompMethod.bind(this);

  //   // # AddOption State component Old syntax
  //   // this.state = {
  //   //   error: undefined,
  //   // };
  // }
  //#endregion
  handleAddCompMethod = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // stores Returned error value form IndecisionApp component method
    const error = this.props.handleAddOption(option);

    // ^ HandleAddCompMethod State modifier function
    this.setState(() => ({ error: error }));

    // clearing placeholder value in form if no error
    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <h3 className="add-option-error">{this.state.error}</h3>}
        <form  className="add-option" onSubmit={this.handleAddCompMethod}>
          <input className='add-option__input' type="text" name="option" placeholder="Your Option here"/>
          <button className='button'>🖋 Add Options</button>
        </form>
      </div>
    );
  }
}






