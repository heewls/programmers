function solution(x) {
    const sum = x.toString().split('').map(Number).reduce((a, c) => a + c, 0);
    return x % sum === 0 ? true : false;
}