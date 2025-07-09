// Set으로 중복 제거
// for 2번 i + (i + 1)

function solution(numbers) {
    const answer = new Set();
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    
    return [...answer].sort((a, b) => a- b);
}