// 서로 다른 귤의 크기 최소화 => 가능한 적은 종류의 귤로 채우기 => 가장 많은 귤 크기별로 나열하고 k에서 뺴기
// 귤 크기 : key, 귤 개수 : value

function solution(k, tangerine) {
    let count = 0;
    
    const obj = {};
    for (let t of tangerine) {
        obj[t] = (obj[t] || 0) + 1;
    }
    
    const tangerines = Object.values(obj).sort((a, b) => b - a);
    
    for (let t of tangerines) {
        k -= t;
        count++;
        if (k <= 0) break;
    }
    
    return count;
}