// stack
// stack에 쌓인 괄호 중 가장 최근 거랑 pair면 pop
// slice로 i 기준으로 합치기 || 문자열 두 번 이어붙여서 substring으로 자르기

function solution(s) {
    let count = 0;
    
    function isCorrect(str) {
        const stack = [];
        const pair = { ")" : "(", "]" : "[", "}" : "{" };
        
        for (const char of str) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            } else {
                if (stack.length === 0 || stack.pop() !== pair[char]) return false;
            }
        }
        
        return stack.length === 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        const rotated = (s + s).substring(i, i + s.length);
        if (isCorrect(rotated)) count++;
    }
    
    return count;
}