function divisorsCount(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

function solution(number, limit, power) {
  let totalIron = 0;
  for (let i = 1; i <= number; i++) {
    const divisorCount = divisorsCount(i);
    let attackPower;
    if (divisorCount > limit) {
      attackPower = power;
    } else {
      attackPower = divisorCount;
    }
    totalIron += attackPower;
  }
  return totalIron;
}