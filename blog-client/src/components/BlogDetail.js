import React from 'react';

const BlogDetail = ({ onDelete, title, content, image, _id }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={() => onDelete({ id: _id })}>Delete</button>
    </div>
  );
};
export default BlogDetail;
