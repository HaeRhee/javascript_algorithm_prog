function solution(arr, queries) {
    for (let query of queries) {
        let s = query[0];
        let e = query[1];
        let k = query[2];
        
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i] += 1;
            }
        }
    }
    
    return arr;
}