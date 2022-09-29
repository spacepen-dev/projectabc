import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div class='error-page'>
      <h1>Ooops!</h1>
      <h4>An error occured</h4>
      <p>
        An error has occured and we're working to fix the problem!
        <br />
        we'll be up and running shortly.
      </p>

      <div class='btns'>
        <Link to='/' class='return-btn'>
          Return Home
        </Link>
        <br />
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
