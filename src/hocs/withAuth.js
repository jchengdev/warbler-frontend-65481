import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
  class Authenticate extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated === false) {
        this.props.history.push('/signin'); //history from react-router-dom
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated === false) {
        this.props.history.push('/signin'); //history from react-router-dom
      }
    }
    render() {
      return <ComponentToBeRendered {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.isAuthenticated
  });

  const mapDispatchToProps = {};

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}
