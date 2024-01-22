function solution(t, p) {
  let answer = 0;
  // t => -p.length-1 / t[i] <=p.indexOf(i)
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let tSlice = t.slice(i, i + p.length);
    if (Number(tSlice) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}