import React, { useState } from 'react';

const BlogForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

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
export default BlogForm;
