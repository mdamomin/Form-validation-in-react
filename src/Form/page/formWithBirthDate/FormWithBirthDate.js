import React, { useState } from 'react';
import { DATE, TEXT } from '../../../constant/InputConstant';
import Form from '../../component/form/Form';

const FormWithBirthDate = () => {
  const [formInputs, setFormInputs] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
  });
  const [errors, setErrors] = useState({});

  const birthDateInputData = [
    {
      label: 'First Name',
      name: 'firstName',
      type: TEXT,
      errorMsg: errors ? errors.firstNameErr : '',
    },

    {
      label: 'Last Name',
      name: 'lastName',
      type: TEXT,
      errorMsg: errors ? errors.lastNameErr : '',
    },
    {
      label: 'Birth Date',
      name: 'birthDate',
      type: DATE,
      errorMsg: errors ? errors.birthDateErr : '',
    },
  ];

  return (
    <div>
      {' '}
      <h1>Form no: 2</h1>
      <Form
        inputs={birthDateInputData}
        formInputs={formInputs}
        setFormInputs={setFormInputs}
        setErrors={setErrors}
      />
    </div>
  );
};

export default FormWithBirthDate;
