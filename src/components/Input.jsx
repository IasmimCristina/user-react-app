import React from 'react';
import './Input.css';

export const Input = ({ label, value, onChange }) => (
  <div className="input">
    <label className="input__label">{label}</label>
    <input
      className="input__field"
      type="text"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);
