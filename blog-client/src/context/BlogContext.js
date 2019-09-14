import createDataContext from './createDataContext';
import blogApi from '../api/blog';
import { navigate } from '@reach/router';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_blogs':
      return action.payload;
    case 'update_blog':
      return state.map(blog => {
        const { id, title, content, image } = action.payload;
        return blog._id === id
          ? {
              ...blog,
              title,
              content,
              image
            }
          : blog;
      });
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

const updateBlog = dispatch => async ({ id, title, content, image }) => {
  dispatch({ type: 'update_blog', payload: { id, title, content, image } });
  window.history.back();
  try {
    await blogApi.put('/blogs', { id, title, content, image });
  } catch (err) {
    console.log('FRONTEND', err);
  }
};

const deleteBlog = dispatch => async id => {
  dispatch({ type: 'delete_blog', payload: id });
  try {
    await blogApi.delete(`/blogs/${id}`);
  } catch (err) {
    console.log('Frontend', err);
  }
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { fetchBlogs, createBlog, updateBlog, deleteBlog },
  []
);
