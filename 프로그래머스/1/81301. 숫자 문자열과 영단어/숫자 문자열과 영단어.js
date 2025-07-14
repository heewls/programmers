// 영단어 배열
// s에 해당하는 영단어가 있으면 해당 idx로 바꾸기
// replace? split?

function solution(s) {
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < numbers.length; i++) {
        s = s.split(numbers[i]).join(i);
    }
    
    return Number(s);
}