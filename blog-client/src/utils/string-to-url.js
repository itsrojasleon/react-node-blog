// This is my beatiful title => this-is-my-beatiful-title
// Should return a friendly string for the url's params

export function stringToUrl(str) {
  return str
    .toLowerCase()
    .split('')
    .map(char => (char === ' ' ? char.replace(char, '-') : char))
    .join('');
}
