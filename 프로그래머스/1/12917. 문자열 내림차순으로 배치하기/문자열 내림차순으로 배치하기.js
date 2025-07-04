// 유니코드 기준 대문자가 소문자보다 앞에 옴

function solution(s) {
    return s.split('').sort().reverse().join('');
}