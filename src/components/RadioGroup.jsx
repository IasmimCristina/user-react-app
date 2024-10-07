
import React from 'react';

const RadioGroup = ({ label, options, selected, onChange }) => (
  <fieldset>
    <legend>{label}</legend>
    {options.map((option) => (
      <div key={option}>
        <label>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
          />
          {option}
        </label>
      </div>
    ))}
  </fieldset>
);

export default RadioGroup;
