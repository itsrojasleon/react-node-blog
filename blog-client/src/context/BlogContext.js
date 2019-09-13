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
  try {
    const response = await blogApi.get('/blogs');
    dispatch({ type: 'fetch_blogs', payload: response.data });
  } catch (err) {
    console.log(err);
  }
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
    // To be honest, I don't know why this should be like this...
    // This doesn't work if I switch first the request and then the dispatch
    dispatch({ type: 'delete_blog', payload: id });
    await blogApi.delete(`/blogs/${id}`);
  } catch (err) {
    console.log('Frontend', err);
  }
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { fetchBlogs, createBlog, deleteBlog },
  []
);
