import React from 'react';

const TextArea = ({ label, value, onChange }) => {
  const remainingChars = 100 - value.length;

  return (
    <div>
      <label>{label}</label>
      <textarea value={value} onChange={onChange} maxLength={100} />
      <p>Caracteres restantes: {remainingChars}</p>
    </div>
  );
};

export default TextArea;
