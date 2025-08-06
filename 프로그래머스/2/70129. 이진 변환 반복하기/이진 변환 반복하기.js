// filter로 1인 숫자만 지우기

function solution(s) {
    let count = 0;
    let zero = 0;
    
    while (s !== "1") {
        const removedZero = [...s].filter(x => x === "1");
        zero += s.length - removedZero.length;
        s = removedZero.length.toString(2);
        count++;   
    }
    
    return [count, zero];
}