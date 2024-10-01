function solution(l, r) {
    let result = [];
    
    for (let i = l; i <= r; i++) {
        // 숫자 i => 문자열로, "0"과 "5"로만 이루어졌는 지 확인
        if ([...String(i)].every(char => char === "0" || char === "5")) {
           //위 조건 충족 시 result = [] 에 추가
            result.push(i);
        }
    }
    // result = [] 비어있으면 return -1, 아니면 result = [값] 반환
    return result.length > 0 ? result : [-1];

}