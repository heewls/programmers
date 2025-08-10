// n < m
// ...toString(2).filter(x => x === "1").length
// for 조건문 length 필요없으면 빈칸으로 남겨놓기

function solution(n) {
    const nOne = [...n.toString(2)].filter(x => x === "1").length;
    
    for (let m = n + 1; ; m++) {
        const mOne = [...m.toString(2)].filter(x => x === "1").length;
        if(nOne === mOne) return m;
    }
}