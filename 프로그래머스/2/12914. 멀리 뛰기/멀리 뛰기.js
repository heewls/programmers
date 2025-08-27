// n  = 1 : 1, n = 2 : 1, n = 3 : 2, n = 4 : 5, n = 5 : 8 => 피보나치

function solution(n) {
    let a = 1, b = 2;
    
    if (n === 1) return a;
    if (n === 2) return b;
    
    for (let i = 3; i <= n; i++) {
        const next = (a + b) % 1234567;
        a = b;
        b = next;
    }
    
    return b;
}