function solution(arr) {
    let answer = 0;
       answer = arr.reduce((a,b)=> a+b)/arr.length
    return answer;
}