import React, { useState } from 'react';

const BlogForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [image, setImage] = useState(initialValues.image);

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="image url"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <button onClick={() => onSubmit({ title, content, image })}>
        Create Blog
      </button>
    </div>
  );
};
BlogForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
    image: ''
  }
};
export default BlogForm;
