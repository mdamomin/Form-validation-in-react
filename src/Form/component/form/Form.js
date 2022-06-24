import React, { useEffect, useState } from 'react';
import { validate } from '../../../utility/Utility';
import InputFields from '../inputFields/InputFields';

const Form = ({ inputs, formInputs, setErrors, setFormInputs }) => {
  const [isMounted, setIsMounted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formInputs));
    setIsMounted(true);
  };

  const handleChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isMounted) {
      setErrors(validate(formInputs));
    }
  }, [formInputs]);
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, idx) => (
        <InputFields {...input} handleChange={handleChange} key={idx} />
      ))}

      <button>Submit</button>
    </form>
  );
};

export default Form;
