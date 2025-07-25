export default function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number) {
  let timerId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
