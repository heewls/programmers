// error : 시간초과, 배열에 push하는 거 떄문에 너무 많은 숫자가 쌓임
// error : 시간초과, 피보나치수는 기하급수적으로 커지기 때문에 1234567로 나눈 나머지를 구하면서 진행해야 overflow 발생 방지

function solution(n) {
    let a = 0, b = 1;
    
    for (let i = 2; i <= n; i++) {
        const fibonacci = (a + b) % 1234567;
        a = b;
        b = fibonacci;
    }
    
    return b;
}