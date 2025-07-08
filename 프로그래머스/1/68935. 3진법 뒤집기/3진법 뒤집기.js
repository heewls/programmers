// 3진법 : toString(3)
// 3진법 -> 10진법 : parseInt(num, 3)

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}