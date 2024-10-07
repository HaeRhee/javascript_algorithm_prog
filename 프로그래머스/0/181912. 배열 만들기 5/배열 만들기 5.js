function solution(intStrs, k, s, l) {
    let result = [];
    
    for (let i = 0; i < intStrs.length; i++) {
        let subStr = intStrs[i].substring(s, s + l);
        
        let num = parseInt(subStr);
        
        if (num > k) {
            result.push(num);
        }
    }
    
    return result;
}