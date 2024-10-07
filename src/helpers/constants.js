export const MAX_CHARACTERS = 50;

export const MESSAGES = {
  normal: "You can continue typing.",
  warning: "You are close to the character limit.",
  danger: "Careful, there are few characters remaining!",
  remainingMessage: (remaining) => `Characters remaining: ${remaining}`,
};

export const SEASONS = [
  { value: "summer", color: "lightyellow" },
  { value: "fall", color: "sandybrown" },
  { value: "winter", color: "lightblue" },
  { value: "spring", color: "lightpink" },
];
