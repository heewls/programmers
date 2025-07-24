// 정렬하고 m개씩 나눠서 묶고 해당하는 각각의 배열 이익 계산
// for 범위 잘 지정해야함
// Math.min(p) * m
// error : 오름차순으로 정렬하니까 성공(높은 점수 가진 사과들로 먼저 만들어야 하니까)

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let price = 0;
    
    for (let i = 0; i + m <= score.length; i += m) {
        const apples = score.slice(i, i + m);
        price += Math.min(...apples) * m
    }
    
    return price;
}