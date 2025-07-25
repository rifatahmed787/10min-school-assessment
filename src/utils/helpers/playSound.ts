

export const playSound = (
  variant: "success" | "welcome" | "warning",
  volume: number = 1.0
) => {
  if (variant === "success") {
    const audio = new Audio("/success.wav");
    audio.volume = volume;
    return audio.play();
  }
  if (variant === "welcome") {
    const audio = new Audio("/welcome.wav");
    audio.volume = volume;
    return audio.play();
  }
  if (variant === "warning") {
    const audio = new Audio("/warning.wav");
    audio.volume = volume;
    return audio.play();
  }
};
