// n을 2로 나눈 나머지가 건전지가 필요한 순간?
// n % 2 === 0 이면 n / 2 아니면 -1

// function solution(n) {
//     let battery = 0;
    
//     while (n > 0) {
//         if (n % 2 === 0) {
//             n /= 2;
//         } else {
//             n -= 1;
//             battery++;
//         }
//     }
    
//     return battery;
// }

// 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합 === 변환된 이진수 1의 개수
function solution(n) {
    return n.toString(2).replaceAll("0","").length;
}