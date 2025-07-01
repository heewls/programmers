// Set으로 중복 폰켓몬 지우기
// 중복 지운 length랑 N/2 중 작은 수 return
// Set().size : 고유한 요소 수 반환
// [... new Set(nums)].length => new Set(nums).size

function solution(nums) {
    return Math.min(new Set(nums).size, nums.length / 2);
}