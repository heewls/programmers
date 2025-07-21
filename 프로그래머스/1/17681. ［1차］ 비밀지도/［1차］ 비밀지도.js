// # = 1 " " = 0
// toString(2)하고 "0".repeat(n - toString(2).length)? padStart
// 배열 둘 중 하나라도 1이면 1, | 쓰면 될 듯

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    (v | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replaceAll("1", "#")
      .replaceAll("0", " ")
  );
}
