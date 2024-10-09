import React from "react";
import "./Select.css";
import { SEASONS } from "../helpers/constants";

export const Select = ({ label, value, onChange }) => (
  <div className="select">
    <label className="select__label">{label}</label>
    <select className="select__input" value={value} onChange={onChange}>
      <option value="">Select a season</option>
      {SEASONS.map((season) => (
        <option key={season.value} value={season.value}>
          {season.value.charAt(0).toUpperCase() + season.value.slice(1)}
        </option>
      ))}
    </select>
  </div>
);
