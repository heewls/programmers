// 반복되는 방식 이중 배열로
// answers === 수포자 답이면 ++
// 점수별로 index+1 부여하고 가장 높은 점수의 수포자만 남기기 filter

function solution(answers) {
    const scores = [0, 0, 0];
    
    const patterns = [
        [1, 2, 3, 4, 5], 
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    
    answers.map((a, i) => {
        patterns.map((p, j) => {
            if (a === p[i % p.length]) scores[j]++;
        }) 
    })
    
    return scores
        .map((_, i) => i + 1)
        .filter(i => scores[i - 1] === Math.max(...scores));
}