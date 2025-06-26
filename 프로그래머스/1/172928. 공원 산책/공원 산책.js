// 공원 크기, 시작점, 방향, 공원 벗어나는지, 방해물 있는지
// park 배열 돌면서 S가 있는 문자열 찾고 문자열 안에 S 있으면 시작점 지정
// routes spacebar 기준으로 나눠서 direction 지정해야할 듯
// 한 칸씩 이동해서 벗어나거나 장애물 있는지 확인

// error : for 구문 s 시작값이 0이 아니라 1(곱셈에서 첫 걸음이어도 0이 되어버리는 오류)
// error : newR, newC 0보다 작은 조건문 필요(음수는 밖으로 나간 것)

function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    
    let r = 0, c = 0;
    
    for(let i = 0; i < H; i++) {
        const col = park[i].indexOf('S');
        if (col !== -1) {
            r = i;
            c = col;
            break;
        }
    }

    const direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };

    for(const route of routes) {
        const [dir, distance] = route.split(' ');
        const dist = Number(distance);
        const [dr, dc] = direction[dir];
        
        let canMove = true;
        
        for(let s = 1; s <= dist; s++) {
            const newR = r + dr * s;
            const newC = c + dc * s;
            
            if(newR < 0 || newR >= H || newC < 0 || newC >= W) {
                canMove = false;
                break;
            }
            
            if(park[newR][newC] === 'X') {
                canMove = false;
                break;
            }
        }
        
        if(canMove) {
            r += dr * dist;
            c += dc * dist;
        }
    }
    return [r, c];
}
