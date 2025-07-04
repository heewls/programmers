// function solution(price, money, count) {
//     let charge = 0;
    
//     for (let i = 1; i <= count; i++){
//         charge += price * i;
//     }
    
//     const balance = charge - money;
//     return balance > 0 ? balance : 0;
// }

// 등차수열 : (두 수의 합 * 개수) / 2
// function solution(price, money, count) {
//     let charge = (price + price * count) * count / 2;
//     const balance = charge - money;
    
//     return balance > 0 ? balance : 0;
// }

// 가우스 공식 : 1 + 2 + 3 + ... + n = n × (n + 1) / 2
function solution(price, money, count) {
    let charge = price * (count * (count + 1)) / 2;
    const balance = charge - money;
    
    return balance > 0 ? balance : 0;
}