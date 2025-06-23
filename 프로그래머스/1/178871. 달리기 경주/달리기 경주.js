function solution(players, callings) {
    const ranks = new Map();
    
    for(let i = 0; i < players.length; i++) {
        ranks.set(players[i], i);
    }
    
    for (const call of callings) {
        const idx = ranks.get(call);
        
        const frontIdx = idx - 1;
        const frontPlayers = players[frontIdx];
        
        players[frontIdx] = call;
        players[idx] = frontPlayers;
        
        ranks.set(call, frontIdx);
        ranks.set(frontPlayers, idx);
    }
    
    return players;
}