function solution(my_string, queries) {
    let strArr = my_string.split("");
    
    for (let i = 0; i < queries.length; i++) {
        // 시작 인덱스
        let start = queries[i][0];
        // 끝 인덱스
        let end = queries[i][1];
        
        let reverseStrArr = strArr.slice(start, end + 1).reverse()
        
        strArr.splice(start, end - start + 1, ...reverseStrArr)
    }

    return strArr.join("")
}