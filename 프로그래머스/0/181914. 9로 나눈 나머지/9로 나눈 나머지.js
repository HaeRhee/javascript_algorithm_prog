function solution(number) {
    // let sum = number.split("").reduce((acc, accNumber) => acc + parseInt(accNumber), 0);
    let sum = 0;
    
   number.split("").forEach((currNumber) => {
        sum += parseInt(currNumber);
    })
    
    return sum % 9
    
}