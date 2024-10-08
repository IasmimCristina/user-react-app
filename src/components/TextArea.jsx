import React from "react";
import useCharacterCount from "../hooks/useCharacterCount"; 
import { MESSAGES,MAX_CHARACTERS } from "../helpers/constants";
import "./TextArea.css";

const TextArea = ({ label, value, onChange }) => {
  const { remainingChars, messageClass, message } = useCharacterCount(value); 

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
        <span>{message}</span>
      </p>
    </div>
  );
};

export default TextArea;
