// 약수 개수 구하는 함수
// limit보다 크면 += power 작으면 += 약수 개수
// false : 시간초과, 약수 구하는 게 너무 오래 걸리는 듯 => 약수 중복 방지

function getDivisor(num) {
    let count = 0;
    
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) count += (i * i === num) ? 1 : 2;
    }
    
    return count;
}

function solution(number, limit, power) {
    let weight = 0;
    
    for (let i = 1; i <= number; i++) {
        const attack = getDivisor(i);
        weight += attack > limit ? power : attack;
    }
    
    return weight;
}