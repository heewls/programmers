// function solution(absolutes, signs) {
//     let sum = 0;
    
//     for (let i = 0; i < absolutes.legnth; i++) {
//         sum += signs[i] ? absolutes[i] : -absolutes[i];
//     }
//     return sum;
// }

// 메소드 사용해서
function solution(absolutes, signs) {
    return absolutes.map((num, idx) => signs[idx] ? num : -num).reduce((a, c) => a + c, 0);
}
