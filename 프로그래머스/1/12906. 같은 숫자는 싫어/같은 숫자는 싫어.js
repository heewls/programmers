// filter 이용
// 다음 요소랑 같지 않으면 얕은 복사본 생성

function solution(arr)
{
    return arr.filter((v, i) => v !== arr[i + 1]);
}