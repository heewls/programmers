// getDay
// error : new Date(2016, a, b)로 했는데 FRI이 나옴 => monthIndex는 0부터 시작

function solution(a, b) {
    const week = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(2016, a - 1, b);
    
    return week[date.getDay()];
}