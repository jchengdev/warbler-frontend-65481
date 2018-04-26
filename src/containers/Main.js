import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import withAuth from './../hocs/withAuth';
import Homepage from './../components/Homepage';
import AuthForm from './../components/AuthForm';
import MessageForm from './../containers/MessageForm';
import { authUser } from './../store/actions/auth';
import { removeError } from './../store/actions/errors';

const Main = props => {
  const { errors, currentUser } = props;

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={_props => <Homepage currentUser={currentUser} {..._props} />}
        />
        <Route
          exact
          path="/signin"
          render={_props => (
            <AuthForm
              removeError={props.removeError}
              errors={errors}
              onAuth={props.authUser}
              buttonText="Log in"
              heading="Welcome Back."
              {..._props}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={_props => (
            <AuthForm
              removeError={props.removeError}
              errors={errors}
              onAuth={props.authUser}
              signUp
              buttonText="Sign me up!"
              heading="Join Warbler today."
              {..._props}
            />
          )}
        />
        <Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errors: state.errors
});

const mapDispatchToProps = {
  authUser,
  removeError
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
