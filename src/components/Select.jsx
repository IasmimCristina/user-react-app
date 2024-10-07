import React from "react";
import "./Select.css";

const seasons = ["Summer", "Fall", "Winter", "Spring"];

const Select = ({ label, value, onChange }) => (
  <div className="select">
    <label className="select__label">{label}</label>
    <select className="select__input" value={value} onChange={onChange}>
      <option value="">Select a season</option>
      {seasons.map((season) => (
        <option key={season} value={season}>
          {season}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
