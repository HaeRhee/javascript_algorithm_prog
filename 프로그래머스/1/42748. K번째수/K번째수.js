function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let sortArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);

    console.log(sortArr);
    answer.push(sortArr[commands[i][2] - 1]);
  }
  return answer;
}