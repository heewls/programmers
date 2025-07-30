// 소수 판별 로직, sqrt 사용하기(소수 나오면 제곱근 기억하기)
// for 3중 반복
// error : for 반복으로 돌릴 때 초기값 설정 잘하기

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) count++;
            }
        }
    }
    
    return count;
}