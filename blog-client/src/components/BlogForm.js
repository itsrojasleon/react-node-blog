import React, { useState } from 'react';

const BlogForm = ({ onSubmit, initialValues, text }) => {
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
      <textarea
        rows="4"
        cols="50"
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
        {text}
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
