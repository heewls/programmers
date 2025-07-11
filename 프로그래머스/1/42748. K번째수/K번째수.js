function solution(array, commands) {
    let answer = [];
    
    for (const command of commands) {
        const [i, j, k] = command;
        const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(newArr[k - 1]);
    }
    
    return answer;
}