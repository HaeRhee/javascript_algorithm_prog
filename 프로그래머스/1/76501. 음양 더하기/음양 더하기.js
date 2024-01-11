function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length ; i++ ){
        if (signs[i] === true ){//absolutes는 실제 양수
            answer += absolutes[i]
        }else{//asbsolutes는 실제 음수
             answer -= absolutes[i]
        }
    }
    return answer;
}