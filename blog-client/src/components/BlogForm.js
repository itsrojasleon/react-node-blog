import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Label, Form, Input, TextArea, Buttons, Button } from '../styles/index';
import { FiX, FiSend } from 'react-icons/fi';

const BlogForm = ({ onSubmit, initialValues, text, editing }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [image, setImage] = useState(initialValues.image);

  return (
    <Form>
      <Label>Title</Label>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Label>Content</Label>
      <TextArea
        rows="15"
        cols="50"
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <Label>Image URL</Label>
      <Input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      {title && content && (
        <Buttons>
          <Button onClick={() => onSubmit({ title, content, image })}>
            <FiSend />
            <span style={{ marginLeft: '3px' }}>{text}</span>
          </Button>
          {editing && (
            <Link to="/">
              <Button black>
                <FiX />
                <span style={{ marginLeft: '5px' }}>Cancel</span>
              </Button>
            </Link>
          )}
        </Buttons>
      )}
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
