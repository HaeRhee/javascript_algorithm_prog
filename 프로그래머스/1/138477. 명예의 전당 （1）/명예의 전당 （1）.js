function solution(k, score) {
  let answer = [];
  let top = [];

  score.forEach((v, i) => {
    top.sort((a, b) => b - a);

    if (i < k) {
      top.push(v);
      answer.push(Math.min(...top));
    } else {
      if (Math.min(...top) < v) {
        top.pop();
        top.push(v);
      }
      answer.push(Math.min(...top));
    }
  });

  return answer;
}