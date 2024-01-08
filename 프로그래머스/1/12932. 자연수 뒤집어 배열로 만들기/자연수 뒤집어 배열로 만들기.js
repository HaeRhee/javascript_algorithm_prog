function solution(n) {
  let arr = [];
  let strN = String(n);
  for (let i = strN.length - 1; i >= 0; i--) {
    arr.push(Number(strN[i]));
  }
  return arr;
}