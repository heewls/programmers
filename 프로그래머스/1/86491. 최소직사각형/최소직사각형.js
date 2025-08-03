// 이중 배열 중 더 긴 쪽을 가로

// function solution(sizes) {
//     let maxW = 0, maxH = 0;
    
//     for (const [w, h] of sizes) {
//         const [width, height] = w > h ? [w, h] : [h, w];
//         if (width > maxW) maxW = width;
//         if (height > maxH) maxH = height;
//     }
    
//     return maxW * maxH;
// }

function solution(sizes) {
    sizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w]);
    const maxW = Math.max(...sizes.map(([w]) => w));
    const maxH = Math.max(...sizes.map(([, h]) => h));
    
    return maxW * maxH;
}