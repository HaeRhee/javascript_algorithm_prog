function solution(k, m, score) {
    let answer = 0;
    let sortScore = score.sort((a,b) => a-b)
    let scoreLength = score.length
    for (let i = scoreLength-m; i>=0; i-=m){
        answer +=score[i]*m
    }
    
    return answer;
}