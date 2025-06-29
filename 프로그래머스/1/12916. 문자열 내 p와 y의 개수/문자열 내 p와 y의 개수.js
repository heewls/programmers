// filter로 배열 개수 세고 ===

function solution(s){
    s = s.toLowerCase(); 
    
    const p = [...s].filter(p => p === 'p').length;
    const y = [...s].filter(y => y === 'y').length;
    
    return p === y;
}