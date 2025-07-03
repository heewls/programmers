// 짝수면 slice로 s.length / 2 +1, -1
// 홀수면 charAt으로

function solution(s) {
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s.charAt(mid);
}