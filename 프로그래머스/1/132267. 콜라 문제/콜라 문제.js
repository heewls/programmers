// 콜라 : floor(n/a) * b
// n = 얻은 콜라 수 + 남은 빈 병

function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        const coke = Math.floor(n / a) * b;
        answer += coke
        n = coke + (n % a);
    }
    
    return answer;
}