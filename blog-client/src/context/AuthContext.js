import createDataContext from './createDataContext';
import blogApi from '../api/blog';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { token: action.payload, errorMessage: '' };
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await blogApi.post('/signup', { email, password });
    dispatch({ type: 'signup', payload: response.data.token });
  } catch (err) {
    dispatch({ type: 'error', payload: err });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: '' }
);
