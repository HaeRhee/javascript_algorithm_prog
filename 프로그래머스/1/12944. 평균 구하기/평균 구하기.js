function solution(arr) {
    let answer = 0;
    for (let i = 1 ; i < arr.length ; i++){
     //전체를 더한 값에 전체 수 갯수만큼 나눔
       answer = arr.reduce((a,b)=> a+b)/arr.length
    }
    return answer;
}