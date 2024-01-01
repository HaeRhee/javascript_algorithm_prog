function solution(array) {
   let answer = 0;
  let sortArray = array.sort((a, b) => a - b);
  //홀수갯수 중앙값 구하기 => n개(array.length)+1/2
    //지만 idx는 0부터라 -1해줘서 array.length(array갯수)/2해줌
  let idx = parseInt(sortArray.length / 2);
  answer = array[idx];
  return answer;
}
