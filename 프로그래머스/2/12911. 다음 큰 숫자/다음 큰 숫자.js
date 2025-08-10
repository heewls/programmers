// n < m
// ...toString(2).filter(x => x === "1").length
// === return m, !== m++

function solution(n) {
    const nOne = [...n.toString(2)].filter(x => x === "1").length;
    let m = n + 1;
    
    while (true) {
        const mOne = [...m.toString(2)].filter(x => x === "1").length;
        if (nOne === mOne) return m;
        m++;
    }
}