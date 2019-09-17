import React, { useState } from 'react';
import { Input, Form, Label, Button, Title, Text } from '../styles/index';

const AuthForm = ({ title, subtitle, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
      <div>
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Pasword"
          onChange={e => setPassword(e.target.value)}
        />
        <Button onClick={() => onSubmit({ email, password })}>{title}</Button>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </Form>
  );
};

export default AuthForm;
