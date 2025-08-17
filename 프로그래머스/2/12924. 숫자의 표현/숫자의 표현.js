// 시작 숫자를 기준으로 sum
// for 이중 반복문(첫 번째 반복문 : 덧셈 시작하는 숫자, 두 번째 반복문 : 시작하는 숫자부터 n까지 sum)
// error : 시간초과, sum이 n과 같을 때만 break 하다 보니 sum이 n보다 커져도 n까지 계속 반복 => for 조건문에 sum < n
// error : 시간초과, n 자기 자신은 무조건 포함되니까 count 1부터 시작 && i <= n -> i < n

function solution(n) {
    let count = 1;
    
    for (let i = 1; i <= n / 2; i++) {
        let sum = i;
        
        for (let j = i + 1; sum < n; j++) {
            sum += j;
        }
        
        if (sum === n) count++;
    }
    
    return count;
}