// n을 2로 나눈 나머지가 건전지가 필요한 순간?
// n % 2 === 0 이면 n / 2 아니면 -1

function solution(n) {
    let battery = 0;
    
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            battery++;
        }
    }
    
    return battery;
}