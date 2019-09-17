import React, { useState } from 'react';
import { Form, Input, TextArea } from '../styles/index';

const BlogForm = ({ onSubmit, initialValues, text }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [image, setImage] = useState(initialValues.image);

  return (
    <Form>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextArea
        rows="15"
        cols="50"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <button onClick={() => onSubmit({ title, content, image })}>
        {text}
      </button>
    </Form>
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
