// function solution(want, number, discount) {
//     let days = 0;
//     const need = {};
    
//     for (let i = 0; i < want.length; i++) {
//         need[want[i]] = number[i];
//     }
    
//     for (let j = 0; j <= discount.length - 10; j++) {
//         const copyNeed = {...need};
        
//         for (let k = j; k < j + 10; k++) {
//             if(copyNeed[discount[k]] !== undefined) copyNeed[discount[k]]--;
//         }
        
//         if (Object.values(copyNeed).every((v) => v <= 0)) days++;
//     }
    
//     return days;
// }

// 슬라이딩 윈도우
function solution(want, number, discount) {
    let days = 0;
    const need = {};
    
    for (let i = 0; i < want.length; i++) {
        need[want[i]] = number[i];
    }
    
    const window = {};
    
    for (let i = 0; i < 10; i++) {
        const item = discount[i];
        window[item] = (window[item] || 0) + 1;
    }
    
    const matchNeed = () => {
        for (let key in need) {
            if((window[key] || 0) < need[key]) return false;
        }
        
        return true;
    }
    
    if (matchNeed()) days++;

    for (let i = 10; i < discount.length; i++) {
        const prevItem = discount[i - 10];
        const nextItem = discount[i];
        
        window[prevItem]--;
        window[nextItem] = (window[nextItem] || 0) + 1;
        
        if (matchNeed()) days++
    }
    
    return days;
}