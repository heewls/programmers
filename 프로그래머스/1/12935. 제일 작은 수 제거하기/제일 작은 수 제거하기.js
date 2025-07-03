function solution(arr) {
    return arr.length > 1 ? arr.filter(num => num !== Math.min(...arr)) : [-1];
}