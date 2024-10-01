function solution(arr) {
    let stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        // stk가 빔 or stk의 마지막 원소가 arr[i]보다 작으면
        if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
        } else {
            // stk의 마지막 원소가 arr[i]보다 크거나 같으면
            // 마지막 원소 제거
            stk.pop();
            // i를 다시 감소 => 현재 인덱스 다시 확인
            i-- 
        }
    }
    return stk;
}