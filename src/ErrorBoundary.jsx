//mostly code from react js error boundary docs

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hassError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click here</Link> to back to the home page or wait five
          seconds.
        </h1>
      );
    }

    return this.props.children;
    //it is to return whatever thats within the component
  }
}

export default ErrorBoundary;
