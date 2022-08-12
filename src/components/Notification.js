import React from "react";
import { Alert } from "react-bootstrap";

class Notification extends React.Component {
  state = {
    message: "",
  };
  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) this.state({ message: this.props });
  };
  render() {
    return (
      <div className='Overlay-alert'>
        <Alert
          onClick={(e) => e.stopPropagation()}
          variant='danger'
          className='alert text-center shadow text-bold'>
          {/* <strong>{`${errMessage}. Check your internet connection and try again!`}</strong> */}
          <div className='alert-icon'>
            <i className='zmdi zmdi-close-circle'></i>
          </div>
        </Alert>
      </div>
    );
  }
}

export default Notification;
