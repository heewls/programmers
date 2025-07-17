// 내림차순 정렬, pop으로 제일 작은 수 빼기

function solution(k, scores) {
    let answer = [];
    let honor = [];
    
    for (const score of scores) {
        honor.push(score);
        honor.sort((a, b) => b - a);
        
        if (honor.length > k) honor.pop();
        
        answer.push(Math.min(...honor));
    }
    
    return answer;
}