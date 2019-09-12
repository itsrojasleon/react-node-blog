import createDataContext from './createDataContext';
import blogApi from '../api/blog';
// import { useLocalStorage } from '../hooks/useLocalStorage';
import { navigate } from '@reach/router';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
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

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await blogApi.post('/signup', { email, password });
    await window.localStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('/');
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with Signup' });
  }
};

const signin = dispatch => async (email, password) => {
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
  { signup, signin, signout, tryLocalSignin },
  { token: null, errorMessage: '' }
);
