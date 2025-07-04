// 이중루프 성능 걱정

// function solution(left, right) {
//     let answer = 0;
//
//     for (let i = left; i <= right; i++) {
//         let count = 0;
//         for (let j = 1; j <= i; j++){
//             if (i % j === 0) count ++;
//         }
//         count % 2 === 0 ? answer += i : answer -= i;
//     }
//
//     return answer;
// }

// 어떤 수가 제곱수면 약수의 개수가 홀수
// 제곱근이 정수면 -i, +i
function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        answer += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    
    return answer;
}