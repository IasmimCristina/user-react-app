export const MAX_CHARACTERS = 50;

export const MESSAGES = {
  initial: "You didn't type anything yet. :(",
  normal: "You can continue typing. :)",
  warning: "You are close to the character limit...",
  danger: "Careful, there are few characters remaining!",
  limitReached: "You have reached the character limit.",
  remainingMessage: (remaining) => `Characters remaining: ${remaining}`,
};

export const SEASONS = [
  { value: "summer", color: "yellow" },
  { value: "fall", color: "sandybrown" },
  { value: "winter", color: "lightblue" },
  { value: "spring", color: "lightpink" },
];
