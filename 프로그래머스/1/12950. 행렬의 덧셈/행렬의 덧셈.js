function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((r, j) => r + arr2[i][j]));
}