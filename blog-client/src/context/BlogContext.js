import createDataContext from './createDataContext';
import blogApi from '../api/blog';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_blogs':
      return action.payload;
    default:
      return state;
  }
};

const fetchBlogs = dispatch => async () => {
  const response = await blogApi.get('/blogs');
  dispatch({ type: 'fetch_blogs', payload: response.data });
};

const createBlog = dispatch => async ({ title, content, image }) => {
  try {
    await blogApi.post('/blogs', { title, content, image });
  } catch (err) {
    console.log(err);
  }
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { fetchBlogs, createBlog },
  []
);
