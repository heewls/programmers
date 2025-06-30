// Map으로 안 풀고 object로도 충분히 가능할 듯
// player key 별 value 1로 지정하고 completion에 이름이 있으면 -1
// value가 0보다 크면 완주 못한 것

// error : test 3 실패, map[player] = 1로 설정한 게 문제, 동명이인일 경우 이전 key: value를 덮어씀 => 실제로 완주하지 못한 사람을 찾지 못함 왜? 모든 key의 value가 다 0이 되니까(value 설정할 때 안전하게 undefined 처리해주기)

function solution(participant, completion) {
    const map = {};
    
    for (const player of participant) {
        map[player] = (map[player] || 0) + 1;
    }
    
    for (const player of completion) {
        map[player] --;
    }
    
    for (const player in map) {
        if (map[player] > 0) return player;
    }
}