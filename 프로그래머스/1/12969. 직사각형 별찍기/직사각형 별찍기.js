process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const square = data.split(" ");
    const n = Number(square[0]), m = Number(square[1]);
    
    for (let i = 0; i < m; i++) {
        console.log("*".repeat(n))
    }
});