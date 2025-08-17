// 시작 숫자를 기준으로 sum
// for 이중 반복문(첫 번째 반복문 : 덧셈 시작하는 숫자, 두 번째 반복문 : 시작하는 숫자부터 n까지 sum)
// error : 시간초과, sum이 n과 같을 때만 break 하다 보니 sum이 n보다 커져도 n까지 계속 반복
// error : 시간초과, n/2보다 크면 어차피 n 넘어감
// 

function solution(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        let sum = i;
        
        for (let j = i + 1; sum < n; j++) {
            sum += j;
        }
        
        if (sum === n) count++;
    }
    
    return count;
}