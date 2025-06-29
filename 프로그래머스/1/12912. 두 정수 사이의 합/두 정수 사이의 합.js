// function solution(a, b) {
//     let answer = 0;
//     const min = Math.min(a, b);
//     const max = Math.max(a, b);
    
//     for (let i = min; i <= max; i++) {
//         answer += i;
//     }
//     return answer;
// }

// 등차수열의 합
// 두 수 사이의 합 : (두 수의 합 * 개수) / 2
function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    return ((min + max) * (max - min + 1)) / 2;
}