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
  const [disabled, setDisabled] = useState(true);

  return (
    <Form>
      <Title>{title}</Title>
      <Text>{subtitle}</Text>
      <div>
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
            if (email.length > 5) setDisabled(false);
            else setDisabled(true);
          }}
          required
          name="email"
        />
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Pasword"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
            if (password.length > 5) setDisabled(false);
            else setDisabled(true);
          }}
          required
          name="password"
        />
        <Button
          disabled={disabled}
          onClick={() => onSubmit({ email, password })}
        >
          {title}
        </Button>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </Form>
  );
};

export default AuthForm;
