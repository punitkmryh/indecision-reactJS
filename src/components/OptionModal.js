import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  className="modal"
    // This lets us determine whether or not the modal should be open.
    isOpen={!!props.selectedOption}
    // content label and this is used for accessibility purposes.
    // So you just want to come up with a good name for this Modal for people using accessible devices.
    contentLabel="Selected Option"
    // this will configure the model to not use the app.
    ariaHideApp={false}
    // close the modal when they try to close the modem via the `escape` key
    // or via clicking the background which is what I'm doing.
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
  >
    <h1 className="modal__title"> 🙂 Machine suggest to choose</h1>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseModal}>Close</button>
  </Modal>
);

export default OptionModal;
