// localeCompare, 문자열은 a - b 안됨
// n번째 문자열이 같으면 전체 문자열 사전순으로 같지 않으면 n번째 문자열로 비교

function solution(strings, n) {
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}