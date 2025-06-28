// 다음 요소랑 같지 않으면 push

// function solution(arr)
// {
//     const answer = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
//     }
//     return answer;
// }

// filter 이용
// 다음 요소랑 같지 않으면 얕은 복사본 생성

function solution(arr)
{
    return arr.filter((v, i) => v !== arr[i + 1]);
}