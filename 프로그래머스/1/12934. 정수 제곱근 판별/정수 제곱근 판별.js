// 제곱근, sqrt
// 정수 확인하고 맞으면 ** 2

function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}