// 해시맵 key : alphabet, value : index
// 문자열 별 인덱스 저장하고 value가 undefined가 아니면 현재 idx - 같은 문자열 idx

function solution(s) {
    let object = {};
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (object[char] !== undefined) {
            answer.push(i - object[char]);
        } else {
            answer.push(-1);
        }
        
        object[char] = i;
    }
    
    return answer;
}