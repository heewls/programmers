// Map으로 name, yearing set
// photo 배열 안 배열에 name이 있으면 +=
// 첫 값만 나오고 다른 값들은 null로 나옴 => 해당하는 key값이 없어서 undefined로 반환 => || 0
// for 구문이 너무 많아서 method 사용해서 간단하게(scroe.set도 forEach로 할 수 있을듯)

// 1안
// function solution(name, yearning, photo) {
//     const result = [];
//     const score = new Map();
    
//     for(let i = 0; i < name.length; i++) {
//         score.set(name[i], yearning[i]);
//     }
    
//     for(const people of photo) {
//         let total = 0;
        
//         for(const person of people) {
//             total += score.get(person) || 0;
//         }
//         result.push(total);
//     }
//     return result;
// }


function solution(name, yearning, photo) {
    const score = new Map();
    
    for(let i = 0; i < name.length; i++) {
        score.set(name[i], yearning[i]);
    }
    
    const result = photo.map(people => people.reduce((a, c) => a + (score.get(c) || 0), 0));

    return result;
}