function solution(n) {
  let answer = 0;
  let strArr = [];
  let nStr = String(n);
  for (let i = nStr.length - 1; i >= 0; i--) {
    strArr.push(nStr[i]);
  }
  let result = strArr.sort((a, b) => b - a).join("");
  answer = Number(result);
  return answer;
}