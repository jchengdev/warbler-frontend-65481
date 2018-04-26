import { apiCall } from './../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from './../actionTypes';

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const fetchMessages = () => 
  dispatch => apiCall('get', '/api/messages')
                .then(res => dispatch(loadMessages(res)))
                .catch(err => dispatch(addError(err.message)));

export const postNewMessage = text => 
  (dispatch, getState) => {
    const { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall('post', `/api/users/${id}/messages`, { text })
            .then(() => {})
            .catch(err => dispatch(addError(err.message)));
  };

export const removeMessage = (user_id, message_id) =>
  dispatch => apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
                .then(() => dispatch(remove(message_id)))
                .catch(err => dispatch(addError(err.message)));
