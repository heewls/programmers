function solution(s) {
  return s
    .split(' ')
    .map((word) =>
      [...word].map((w, idx) => (idx % 2 === 0 ? w.toUpperCase() : w.toLowerCase())).join('')
    )
    .join(' ');
}