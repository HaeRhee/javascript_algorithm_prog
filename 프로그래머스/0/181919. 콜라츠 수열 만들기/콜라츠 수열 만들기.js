function solution(n) {
    let result = [n];
    
    for (let i = n; i !== 1;) { // i가 1이 아닐 때까지 반복
        if (i % 2 === 0) {
            i = i / 2;
        } else {
            i = 3 * i + 1;
        }
        result.push(i);
    }
    
    return result;
}