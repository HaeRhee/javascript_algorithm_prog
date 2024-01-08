function solution(n) {
    let answer = 0;
    // n % x === 1;
    // 가장 작은 자연수 x
    for (let i = 2; i < n; i++) {
         if (n % i === 1) {
         return i;
    }
  }
 
}