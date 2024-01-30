function solution(s) {
  let answer = [];
  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (!newArr.includes(s[i])) {
      answer.push(-1);
      newArr.push(s[i]);
    } else if (newArr.includes(s[i])) {
      answer.push(i - newArr.lastIndexOf(s[i]));
      newArr.push(s[i]);
    }
  }
  return answer;
}