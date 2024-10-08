import { MAX_CHARACTERS, MESSAGES } from "../helpers/constants";

const useCharacterCount = (value) => {
  const remainingChars = MAX_CHARACTERS - value.length;

  const messageClass =
    remainingChars === MAX_CHARACTERS
      ? "text-area__message--initial"
      : remainingChars > 35
      ? "text-area__message--normal"
      : remainingChars > 15
      ? "text-area__message--warning"
      : remainingChars > 0
      ? "text-area__message--danger"
      : "text-area__message--limit";

  const message =
    remainingChars === MAX_CHARACTERS
      ? MESSAGES.initial
      : remainingChars > 35
      ? MESSAGES.normal
      : remainingChars > 15
      ? MESSAGES.warning
      : remainingChars > 0
      ? MESSAGES.danger
      : MESSAGES.limitReached;

  return {
    remainingChars,
    messageClass,
    message,
  };
};

export default useCharacterCount;
