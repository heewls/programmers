// function solution(a, b) {
//     let answer = 0;
    
//     for (let i = 0; i < a.length; i++) {
//         answer += a[i] * b[i];
//     }
    
//     return answer;
// }

function solution(a, b) {
    return a.reduce((a, c, idx) => a + c * b[idx], 0);
}