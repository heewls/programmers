function solution(citations) {
    let h = 0;
    citations.sort((a, b) => b - a);
    
    for (let i = 0; i <= citations.length; i++) {
        if (i < citations[i]) h++;
    }
    
    return h;
}