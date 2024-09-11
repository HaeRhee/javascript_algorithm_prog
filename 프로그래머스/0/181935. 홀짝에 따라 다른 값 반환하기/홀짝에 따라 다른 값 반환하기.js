function solution(n) {
    if(n % 2 === 1){ 
        let sum = 0; // 합을 저장할 변수 => 0으로 초기화
        for (let i = 1; i <= n; i += 2){
            //1~n까지 홀수만 더하기 => 2씩 증가함
            sum += i; // 현재 홀수 => sum에 더함
        }
        return sum; // 홀수의 합
    }else{ // 짝수일 때 실행
      let sum = 0; // 제곱의 합 저장할 변수 => 0으로 초기화
      for(let i = 2; i <= n; i += 2){
          // 2~n까지 짝수만 더하기 => 2씩 증가
            sum += i * i; // 현재 짝수 제곱한 값 => sum에 더함
        }
        return sum; // 짝수 제곱의 합
    }
}