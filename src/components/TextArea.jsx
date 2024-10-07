import React from "react";
import { MAX_CHARACTERS, MESSAGES } from "../helpers/constants";
import "./TextArea.css";

const TextArea = ({ label, value, onChange }) => {
  const remainingChars = MAX_CHARACTERS - value.length;

  const messageClass =
    remainingChars > 35
      ? "text-area__message--normal"
      : remainingChars > 15
      ? "text-area__message--warning"
      : "text-area__message--danger";

  return (
    <div className="text-area">
      <label className="text-area__label">{label}</label>
      <span className="text-area__span">
        {MESSAGES.remainingMessage(remainingChars)}
      </span>
      <textarea
        className="text-area__input"
        value={value}
        onChange={onChange}
        maxLength={MAX_CHARACTERS}
      />
      <p className={`text-area__message ${messageClass}`}>
        {remainingChars > 35 && <span>{MESSAGES.normal}</span>}
        {remainingChars <= 35 && remainingChars > 15 && (
          <span>{MESSAGES.warning}</span>
        )}
        {remainingChars <= 15 && <span>{MESSAGES.danger}</span>}
      </p>
    </div>
  );
};

export default TextArea;
