function solution(str1, str2) {
    let answer = '';
        // str1 ==== str2가 같음
    for(let i = 0 ; i < str1.length; i++){
         answer += str1[i]
         answer += str2[i]
    }
    
    return answer;
}