import React from 'react';
import { SELECTED_DEFAULT_VALUE } from '../../../constant/InputConstant';

const InputFields = ({
  label,
  name,
  type,
  errorMsg,
  options,
  handleChange,
}) => {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      {label !== 'Gender' ? (
        <input
          name={name}
          type={type}
          className={
            errorMsg ? `${'is-invalid'} ${'form-control'}` : 'form-control'
          }
          id={name}
          onChange={handleChange}
        />
      ) : (
        <select
          id={name}
          className='form-select'
          defaultValue={SELECTED_DEFAULT_VALUE}
          onChange={handleChange}
          name={name}
        >
          {options.map(({ disabled, optionTitle, value }, idx) => (
            <option key={idx} value={value} disabled={disabled}>
              {optionTitle}
            </option>
          ))}
        </select>
      )}
      <div className='form-text text-danger'>{errorMsg}</div>
    </div>
  );
};

export default InputFields;
