// Array.form({ length : n })으로 반복 횟수 지정해서도 가능

function solution(x, n) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    
    return answer;
}