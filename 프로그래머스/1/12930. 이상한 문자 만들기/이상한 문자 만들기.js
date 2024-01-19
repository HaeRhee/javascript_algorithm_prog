function solution(s) {
  let answer = "";
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) {
        // console.log(arr[i][j]);
        answer = answer + arr[i][j].toUpperCase();
      } else {
        answer = answer + arr[i][j].toLowerCase();
      }
    }
      //마지막 문자 제외하고 공백 추가해서 더함
    if (!(i == arr.length - 1)) {
      answer = answer + " ";
    }
  }
  return answer;
}