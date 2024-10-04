function solution(number) {
    let sum = number.split("").reduce((acc, accNumber) => acc + parseInt(accNumber), 0);
    
    return sum % 9
    
}