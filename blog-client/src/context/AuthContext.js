import createDataContext from './createDataContext';
import blogApi from '../api/blog';
import { navigate } from '@reach/router';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_user':
      const { email, username } = action.payload;
      return { ...state, user: { email, username } };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '', username: '' };
    case 'error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => () => {
  const token = window.localStorage.getItem('token');

  if (token) {
    dispatch({ type: 'signin', payload: token });
  } else {
    return null;
  }
};

const fetchUser = dispatch => async () => {
  try {
    const {
      data: { email, username }
    } = await blogApi.get('/');
    dispatch({ type: 'fetch_user', payload: { email, username } });
  } catch (err) {
    console.log(err);
  }
};

const signup = dispatch => async ({ email, password, username }) => {
  try {
    const response = await blogApi.post('/signup', {
      email,
      password,
      username
    });
    const { token } = response.data;
    await window.localStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('/');
  } catch (err) {
    dispatch({
      type: 'error',
      payload: `Something went wrong with Signup ${err}`
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await blogApi.post('/signin', { email, password });
    await window.localStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('/');
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with Signing' });
  }
};

const signout = dispatch => async () => {
  await window.localStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('/');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, fetchUser, signup, signin, signout },
  { token: null, user: {}, errorMessage: '' }
);
