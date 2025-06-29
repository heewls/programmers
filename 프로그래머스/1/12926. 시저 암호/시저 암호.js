// upper, lower 문자열 선언하고 s 문자 n만큼 이동
// 공백이면 공백으로 추가
// 마지막 순환 구조는 블로그 참고

// error : test3 실패, 공백일 때 continue로 아래 로직 막지 않아서 upperOrLower에서 lower로 선택됨

function solution(s, n) {
    let result = "";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";

    for (const char of s) {
        if (char === " ") {
            result += " ";
            continue;
        }
        
        const upperOrLower = upper.includes(char) ? upper : lower;
        
        let idx = upperOrLower.indexOf(char) + n;
        
        if (idx >= upperOrLower.length) {
            idx -= upperOrLower.length;
        }
        
        result += upperOrLower[idx];
    }
    return result;
}