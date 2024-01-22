function solution(number) {
  let answer = 0;
  // 순서대로 일 때,
  let sortNum = number.sort();
  // idx가 0,1,2 더해서 0
  for (var i = 0; i < sortNum.length - 2; i++) {
    for (var j = i + 1; j < sortNum.length - 1; j++) {
      for (var k = j + 1; k < sortNum.length; k++) {
        if (sortNum[i] + sortNum[j] + sortNum[k] === 0) 
            answer++;
      }
    }
  }
  return answer;
}
