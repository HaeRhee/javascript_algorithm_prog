function solution(a, b, c) {
   const sum = a + b + c;
   const multiplySum = a * a + b * b + c * c;
   const cube = a * a * a + b * b * b + c * c * c;
 
    if(a === b && b === c) {
        return sum * multiplySum * cube;
    }
    
    if(a === b || b === c || a === c){
        return sum * multiplySum;
    }
    
    // 세 숫자 다 다를 때
    return sum;
}