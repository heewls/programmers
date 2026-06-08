function solution(n) {
    const nOneLength = [...n.toString(2)].filter(x => x === '1').length;
    
    for(let i = n + 1; ; i++) {
        const iOneLength = [...i.toString(2)].filter(x => x === '1').length;
        
        if(nOneLength === iOneLength) return i;
    }
    
}