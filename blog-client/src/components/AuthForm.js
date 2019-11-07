import React, { useState } from 'react';
import {
  Input,
  Form,
  Label,
  Button,
  Title,
  Text,
  ErrorMessage
} from '../styles/index';

const AuthForm = ({ title, subtitle, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <Form>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
      <div>
        <Label>Email</Label>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
          name="email"
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Pasword"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required
          name="password"
        />
        <Label>Username</Label>
        <Input
          type="text"
          placeholder="Your best username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="password"
        />
        <Button onClick={() => onSubmit({ email, password, username })}>
          {title}
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Form>
  );
};

export default AuthForm;
