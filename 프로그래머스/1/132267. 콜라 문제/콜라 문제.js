function solution(a, b, n) {
  let answer = 0;
  //빈병 a, 콜라 b, 소유한 빈병 n === 3 면 break
  // 항상 b < a
  // b = a / 2;

  while (true) {
    if (a > n) {
      break;
    }
    const cola = parseInt(n / a) * b;
    answer += cola;
    n = parseInt((n % a) + cola);
  }

  return answer;
}
