import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => (
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} required />
      {label}
    </label>
  </div>
);


