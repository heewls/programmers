function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        const slice = t.slice(i, i + p.length);
        if (slice <= p) count ++;
    }
    
    return count;
}