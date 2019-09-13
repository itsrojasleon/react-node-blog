import createDataContext from './createDataContext';
import blogApi from '../api/blog';
import { navigate } from '@reach/router';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_blogs':
      return action.payload;
    case 'delete_blog':
      return state.filter(blog => blog._id !== action.payload);
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
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = dispatch => async ({ id }) => {
  try {
    await blogApi.delete(`/blogs/${id}`);
    dispatch({ type: 'delete_blog', payload: id });
  } catch (err) {
    console.log('Frontend', err);
  }
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { fetchBlogs, createBlog, deleteBlog },
  []
);
