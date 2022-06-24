import React, { useState } from 'react';
import {
  PASSWORD,
  SELECTED_DEFAULT_VALUE,
  TEXT,
} from '../../../constant/InputConstant';
import Form from '../../component/form/Form';

const FormWithSelect = () => {
  const [formInputs, setFormInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });
  console.log(formInputs);
  const [errors, setErrors] = useState({});

  const selectInputData = [
    {
      label: 'User Name',
      name: 'username',
      type: TEXT,
      errorMsg: errors ? errors.usernameErr : '',
    },

    {
      label: 'Email',
      name: 'email',
      type: TEXT,
      errorMsg: errors ? errors.emailErr : '',
    },
    {
      label: 'Password',
      name: 'password',
      type: PASSWORD,
      errorMsg: errors ? errors.passwordErr : '',
    },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: PASSWORD,
      errorMsg: errors ? errors.confirmPasswordErr : '',
    },
    {
      label: 'Gender',
      name: 'gender',
      errorMsg: errors ? errors.genderErr : '',
      options: [
        {
          disabled: true,
          optionTitle: '--Select--',
          value: SELECTED_DEFAULT_VALUE,
        },
        { disabled: false, optionTitle: 'Male', value: 1 },
        { disabled: false, optionTitle: 'Female', value: 2 },
      ],
    },
  ];
  return (
    <div>
      <h1>Form no: 1</h1>
      <Form
        inputs={selectInputData}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        setErrors={setErrors}
      />
    </div>
  );
};

export default FormWithSelect;
