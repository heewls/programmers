// map(Number) : 배열의 모든 요소 Number()로 변환

function solution(n)
{
    return n.toString().split('').map(s => Number(s)).reduce((a, c) => a + c, 0);
}