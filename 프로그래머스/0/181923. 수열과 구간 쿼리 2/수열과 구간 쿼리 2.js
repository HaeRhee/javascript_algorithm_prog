function solution(arr, queries) {
    const result = [];
    
    for(const query of queries) {
        const s = query[0]
        const e = query[1]
        const k = query[2] 
        
        const subArray = arr.slice(s, e + 1);
        
        const filtered = subArray.filter(x => x > k);
        
        if(filtered.length > 0) {
            result.push(Math.min(...filtered));
        }else{
            result.push(-1);
        }
    }
    
    return result;
}