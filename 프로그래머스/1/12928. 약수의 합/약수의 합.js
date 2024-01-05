function solution(n) {
    var answer = 0;
    let divisorArr = [];
    //1부터 자기 자신도 포함하거나 작은 수 중에서 
    for(let divisor = 1 ; divisor<= n ; divisor++){
        if(n%divisor === 0 ){//나누어 떨어지게 하면 약수니까
            //그 약수들을 담는다
            divisorArr.push(divisor);
        }
        // 해당 약수들을 더한다
        answer = divisorArr.reduce((a, b) => a+b);
    }
    
    return answer;
}