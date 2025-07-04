// ...s isNaN인지 다 검사

function solution(s) {
    return (s.length === 4 || s.length === 6) && [...s].every(num => !isNaN(num))
}