function solution(clothes) {
    const obj = {};
    let count = 1;
    
    for (const [name, type] of clothes) {
        obj[type] = (obj[type] || 0) + 1;
    }
    
    for (const type in obj) {
        count *= (obj[type] + 1);
    }
    
    return count - 1;
}