import { useState } from 'react';

const useTextInput = () => {
  const [values, setValues] = useState({});

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return { values, handleChange };
};

export default useTextInput;
