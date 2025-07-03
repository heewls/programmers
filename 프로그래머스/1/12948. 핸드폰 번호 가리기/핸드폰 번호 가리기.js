// slice 이용해서 마지막 4개만 따로 저장
// phone_number.length - 4로 * 반복

function solution(n) {
    const repeat = '*'.repeat(n.length - 4);
    const visible = n.slice(-4);
    
    return '*'.repeat(n.length - 4) + n.slice(-4);
}