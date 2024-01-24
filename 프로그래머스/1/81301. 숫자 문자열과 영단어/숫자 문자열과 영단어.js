function solution(s) {
  let nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = s;
  for (let i = 0; i < nums.length; i++) {
    const splitNumberStr = result.split(nums[i]);
    result = splitNumberStr.join(i);
    // console.log(result);
  }
  return Number(result);
}