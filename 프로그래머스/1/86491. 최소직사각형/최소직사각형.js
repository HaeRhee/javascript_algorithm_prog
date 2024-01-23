function solution(sizes) {
  let w = [];
  let h = [];
  // 가장 큰 수 하나랑 작은 수 하나 곱하기 maxNum*minNum
  for (let i = 0; i < sizes.length; i++) {
    //sizes길이를 다 돌면서 [i], [0번째 돌아 가져오고, 1번째 돌아 가져왔을 때
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);
    w.push(max);
    h.push(min);
  }
  return Math.max(...w) * Math.max(...h);
}