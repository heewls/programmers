function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        if (prev[prev.length - 1] !== curr[0] || words.indexOf(curr) !== i) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    }

    return [0, 0];
}