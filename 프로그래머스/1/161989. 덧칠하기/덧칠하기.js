// 시작점 지정, section[i] + m
// section[i]이 시작점보다 크면 롤러 벗어난 것

function solution(n, m, section) {
    let count = 0;
    let startPoint = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] < startPoint) continue;
        
        startPoint = section[i] + m;
        count++;
    }
    
    return count;
}