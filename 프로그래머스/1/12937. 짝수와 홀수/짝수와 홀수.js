function solution(num) {
    let eoNum = Math.abs(num);
    if (eoNum % 2 === 0){
        return "Even"
    }else if( eoNum % 2 === 1){
        return "Odd";
    }
}