// 새로운 번호 : a || b / 2, ceil(홀수일 때 반올림 필요)
// a === b일 때 붙음

function solution(n,a,b) {
    let round = 0;
    
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    
    return round;
}