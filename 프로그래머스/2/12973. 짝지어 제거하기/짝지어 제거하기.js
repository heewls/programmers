// 1. s[i] === s[i + 1] splice
// 2. stack

// function solution(s) {
//     s = s.split("");
//     for (let i = 0; i < s.length;) {
//         if (s[i] === s[i + 1]) {
//             s.splice(i, 2);
//             i = 0;
//         } else {
//             i++;
//         }
//     }
//     return s.length === 0 ? 1 : 0;
// }

function solution(s) {
    const stack = [];
    
    for (const char of s) {
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }
    
    return stack.length === 0 ? 1 : 0;
}