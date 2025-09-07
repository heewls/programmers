// for구문으로 하면 시간초과 100%, 1차원 배열
// (row,col) 포함되는 i 찾기, 행 / 열 중 더 큰 값 + 1

function solution(n, left, right) {
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        answer.push(Math.max(row, col) + 1);
    }
    
    return answer;
}