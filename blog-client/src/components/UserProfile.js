import React from 'react';
import { Title, Content } from '../styles/index';

const UserProfile = ({ email, username }) => {
  return (
    <div>
      <Content>
        Hello: <strong>{username}</strong>!
      </Content>
      <Content>
        Your email is <strong>{email}</strong>
      </Content>
    </div>
  );
};
export default UserProfile;
