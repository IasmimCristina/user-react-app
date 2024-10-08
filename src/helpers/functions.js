import { MAX_CHARACTERS, MESSAGES } from "./constants";

export const getRemainingChars = (value) => {
  return MAX_CHARACTERS - value.length;
};

export const getMessageClass = (remainingChars) => {
  if (remainingChars === MAX_CHARACTERS) {
    return "text-area__message--initial";
  } else if (remainingChars > 35) {
    return "text-area__message--normal";
  } else if (remainingChars > 15) {
    return "text-area__message--warning";
  } else if (remainingChars > 0) {
    return "text-area__message--danger";
  } else {
    return "text-area__message--limit";
  }
};

export const getMessage = (remainingChars) => {
  if (remainingChars === MAX_CHARACTERS) {
    return MESSAGES.initial;
  } else if (remainingChars > 35) {
    return MESSAGES.normal;
  } else if (remainingChars > 15) {
    return MESSAGES.warning;
  } else if (remainingChars > 0) {
    return MESSAGES.danger;
  } else {
    return MESSAGES.limitReached;
  }
};
