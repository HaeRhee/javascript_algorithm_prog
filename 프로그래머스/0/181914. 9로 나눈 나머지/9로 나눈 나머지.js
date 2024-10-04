function solution(number) {
   let sum = 0;
    
   number.split("").forEach((currNumber) => {
        sum += parseInt(currNumber);
    })
    
    return sum % 9
    
}