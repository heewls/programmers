// 어떤 수가 제곱수면 약수 개수 홀수

function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    
    return answer
}