// babbling for 구문으로 돌리는데 해당하는 글자가 없으면 끝내고 있으면 연속발음인지 확인, 있는 단어인지 확인
// 말할 수 없는 발음이면 break

function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (let b of babbling) {
        let prev = "";
        
        while (b.length > 0) {
            const word = words.find(word => b.startsWith(word) && word !== prev);
            if (!word) break;
            prev = word;
            b = b.slice(word.length);
        }
        
        if (b.length === 0) count++;
    }
    
    return count;
}