// for 3번 반복해서 합이 0면 ++
// number.length => number.length -2, -1 : 필요없는 범위는 줄이기

function solution(number) {
    let count =0;
    
    for (let i = 0; i < number.length - 2; i++) {
        for (let j = i + 1; j < number.length - 1; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (number[i] + number[j] + number[k] === 0) count++;
            }
        }
    }
    
    return count;
}