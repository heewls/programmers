// set으로 중복 제거
// 길이, 배열, 합산 for 구문 필요

// function solution(elements) {
//     let sums = new Set();
    
//     const len = elements.length;
    
//     for (let i = 1; i <= len; i++) {
//
//         for (let j = 0; j < len; j++) {
//             let sum = 0;
//
//             for (let k = 0; k < i; k++) {
//                 sum += elements[(j + k) % len];
//             }
//             sums.add(sum);
//         }
//     }
    
//     return sums.size;
// }

function solution(elements) {
    const extended = elements.concat(elements);
    const len = elements.length;
    const sums = new Set();
    
    for (let i = 1; i <= len; i++) {
        let sum = 0;
        
        for (let j = 0; j < len; j++) {
            sum += extended[i + j];
            sums.add(sum);
        }
    }
    
    return sums.size;
}