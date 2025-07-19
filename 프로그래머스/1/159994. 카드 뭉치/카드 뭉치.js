// card1[0]이랑 goal의 단어랑 같으면 shift
// card2도 ===
// 둘 다 goal에 맞는 단어가 없으면 no

// function solution(cards1, cards2, goal) {
//     for (const word of goal) {
//         if (cards1[0] === word) cards1.shift();
//         else if (cards2[0] === word) cards2.shift();
//         else return "No";
//     }
    
//     return "Yes";
// }

function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    
    for (const word of goal) {
        if (cards1[i] === word) i++;
        else if (cards2[j] === word) j++;
        else return "No";
    }
    
    return "Yes";
}