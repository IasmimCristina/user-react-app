import React from 'react';

const seasons = ['Verão', 'Outono', 'Inverno', 'Primavera'];

const Select = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      <option value="">Selecione uma estação</option>
      {seasons.map((season) => (
        <option key={season} value={season}>
          {season}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
