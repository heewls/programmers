function solution(k, dungeons) {
    let count = 0;
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(hp, d) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && dungeons[i][0] <= hp) {
                visited[i] = true;
                dfs(hp - dungeons[i][1], d + 1);
                visited[i] = false;
            }
        }
        count = Math.max(count, d);
    }
    
    dfs(k, 0);
    return count;
}

