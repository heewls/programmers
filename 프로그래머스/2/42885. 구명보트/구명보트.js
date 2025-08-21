// 가장 가벼운 사람 + 가장 큰 사람

function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a);
    
    for (let i = 0, j = people.length - 1; i <= j; i++) {
        if (people[i] + people[j] <= limit) j--;
        answer++;
    }
    
    return answer;
}