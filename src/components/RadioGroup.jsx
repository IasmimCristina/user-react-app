import React from 'react';
import './RadioGroup.css';

const RadioGroup = ({ label, options, selected, onChange }) => (
  <fieldset className="radio-group">
    <legend className="radio-group__label">{label}</legend>
    {options.map((option) => (
      <div key={option} className="radio-group__option">
        <label className="radio-group__label">
          <input
            type="radio"
            className="radio-group__input"
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
