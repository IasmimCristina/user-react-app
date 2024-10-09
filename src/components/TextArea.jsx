import React from "react";
import {
  getRemainingChars,
  getMessageClass,
  getMessage,
} from "../helpers/functions";
import { MESSAGES, MAX_CHARACTERS } from "../helpers/constants";
import "./TextArea.css";

export const TextArea = ({ label, value, onChange }) => {
  return (
    <div className="text-area">
      <label className="text-area__label">{label}</label>
      <span className="text-area__span">
        {MESSAGES.remainingMessage(getRemainingChars(value))}
      </span>
      <textarea
        className="text-area__input"
        value={value}
        onChange={onChange}
        maxLength={MAX_CHARACTERS}
      />
      <p
        className={`text-area__message ${getMessageClass(
          getRemainingChars(value)
        )}`}
      >
        <span>{getMessage(getRemainingChars(value))}</span>
      </p>
    </div>
  );
};
