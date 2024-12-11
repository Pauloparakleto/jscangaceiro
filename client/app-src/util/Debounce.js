export function debounce (fn, miliseconds) {
  let timer = 0;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => fn(), miliseconds);
  }
}
