// This is a helper for determinate the approximate time to read a blog
// This is just "random code"
// "This isn't real"

// 40 words === 1 min

export function timeToRead(str) {
  return Math.floor(str.split(' ').length / 120);
}
