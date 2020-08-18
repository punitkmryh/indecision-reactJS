import React from 'react';
import Footer from './Footer';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  // #region Old Binding syntax using constructor for 'this'.
  // constructor(props) {
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
  //   // # IndecisionApp State component
  //   this.state = {
  //     options: [],
  //   };
  // }
  // #endregion

  // # Using Babel-transform-class-property dependency 👇🏼
  // New Syntax without binding `this`.+ need to change all methods to arrow functions
  state = {
    options: [],
    selectedOption: undefined,
  };

  // IndecisionApp `Removing all Options` Method
  handleDeleteOptions = () => {
    // $$ React default modification function - setState()

    // #region Syntax-2
    // this.setState(() => {
    //   return {
    //     options: [],
    //   };
    // });
    // #endregion

    // Syntax-2
    // ^ State modifier method -> less coding for setState method
    this.setState(() => ({ options: [] }));
  };

  // Deleting Single Options form list
  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  // IndecisionApp `What to Do?` Method
  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    this.setState(() => ({ selectedOption: option }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  // IndecisionApp `Adding option` Method
  handleAddOption = (option) => {
    if (!option) {
      // Return back to handleAddCompMethod of
      return '💁🏻‍♂️ 💬 Please Enter Valid item ';
    } else if (this.state.options.indexOf(option) > -1) {
      // Return back to handleAddCompMethod
      return '⚠️ Oops, Item Already Exists look👆🏼';
    }

    // ^ State modifier method for handleAddOption
    this.setState((prevState) => ({
      //won't return back to handleAddCompMethod
      // instead returns to IndecisionApp state Component
      options: prevState.options.concat([option]),
    }));
  };
  // ^ STORING DATA LOCALLY
  // LifeCycle Methods for storing data locally
  componentDidMount = () => {
    try {
      const stringJSON = localStorage.getItem('localOptions');
      const parsedOptions = JSON.parse(stringJSON);
      // Avoid empty list
      if (parsedOptions) {
        this.setState(() => ({ options: parsedOptions }));
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const stringJSON = JSON.stringify(this.state.options); //js to json
      localStorage.setItem('localOptions', stringJSON);
      console.log('Saving data');
    }
  };

  componentWillUnmount = () => {
    console.log('un-mounted component');
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          // `handlePick` is method inside -> IndecisionApp component
          // `this.handlePick` is gets triggered using props from -> Action component
          handlePick={this.handlePick}
        />
        <div className="widget">
          <Options
          options = {
            this.state.options
          }
          handleDeleteOptions = {
            this.handleDeleteOptions
          }
          handleDeleteSingleOption = {
            this.handleDeleteSingleOption
          }
          />
          <AddOption handleAddOption = {this.handleAddOption}/>
        </div>
        
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
        </div>
        
        <Footer />
      </div>
    );
  }
}
