// 소수 함수 만들고 for 구문 돌려서 해당 함수에서 true면 count++
// 1은 소수가 아니니까 2부터 시작
// error : 시간초과.... 2부터 n까지 다 검사해서 오래걸림
// 에라토스테네스의 체 : 소수가 아닌 수는 작은 소수의 배수로 만들 수 있다(작은 수의 배수 다 지우면 소수)

// function isPrime(num) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
    
//     return true;
// }

// function solution(n) {
//     let count = 0;
    
//     for (let i = 2; i <= n; i++) {
//         if (isPrime(i)) count++;
//     }
    
//     return count;
// }

function solution(n) {
    const isPrime = Array(n + 1).fill(true);
    
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // j = i * i : 이미 이전에 지워진 것도 중복으로 지우게 될 수도 있어서
            // ex) i = 5일 떄 5*2...5*4 이미 지워짐
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(v => v === true).length;
}