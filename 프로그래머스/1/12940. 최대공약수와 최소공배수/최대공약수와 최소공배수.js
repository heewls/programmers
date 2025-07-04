// 최대공약수 : n, m 둘 다 나눠지는 수(큰 수 부터 찾기)
// 최소공배수 : 최소공배수 * 최대공약수 = n * m => 최소공배수 : n * m / 최대공약수

// function solution(n, m) {
//    let max = Math.max(n, m), min = Math.min(n, m);
    
//     for (let i = min; i >= 1; i--) {
//         if(min % i === 0 && max % i === 0) {
//             return [i, min * max / i];
//         }
//     }
// }

// 유클리드 호제법 : 두 수의 최대공약수 구할 때, a를 b로 나눈 나머지를 r
// GCD(a, b) = GCD(b, r) r이 0이 될 때까지 반복하면 마지막 a가 최대공약수
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}

function solution(n, m) {
    const GCD = gcd(n, m);
    const LCM = (n * m) / GCD;
    return [GCD, LCM];
}


