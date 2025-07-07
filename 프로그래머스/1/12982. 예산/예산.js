// 최대한 많은 부서에 지원하기 -> 오름차순으로 정렬하고 작은 금액부터 --, 남은 budget보다 금액이 크면 break

function solution(d, budget) {
    let count = 0;
    d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        if(budget >= d[i]) {
            budget -= d[i];
            count ++;
        } else {
            break;
        }
    }
    
    return count;
}