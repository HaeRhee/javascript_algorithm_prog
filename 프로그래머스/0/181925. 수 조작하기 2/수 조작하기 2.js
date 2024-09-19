function solution(numLog) {
    let result = '';
    
    for (let i = 1; i < numLog.length; i++){
        let differenceNumber = numLog[i] - numLog[i - 1];
        
        if(differenceNumber === 1) {
            result += 'w';
        }
        
        else if(differenceNumber === -1) {
            result += 's';
        }
        
        else if(differenceNumber === 10) {
            result += 'd';
        }
        
        else if(differenceNumber === -10) {
            result += 'a';
        }
    }
    
    return result;
}