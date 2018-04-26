import { apiCall, setTokenHeader } from './../../services/api';
import { SET_CURRENT_USER } from './../actionTypes';
import { addError } from './errors';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const setAuthorizationToken = token => {
  setTokenHeader(token);
};

export const logout = () => 
  dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };

export const authUser = (type, userData) =>
  dispatch => new Promise(
    (resolve, reject) => apiCall('post', `/api/auth/${type}`, userData)
                                .then(({ token, ...user }) => {
                                  localStorage.setItem('jwtToken', token);
                                  setAuthorizationToken(token);
                                  dispatch(setCurrentUser(user));
                                  resolve();
                                })
                                .catch(err => {
                                  dispatch(addError(err.message));
                                  reject();
                                })
  );
