function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  // 주사위 숫자의 빈도수 저장 객체
    const counts = {};
    
    for (let num of dice) {
      // 주사위 숫자의 빈도수 저장
      counts[num] = (counts[num] || 0) + 1; 
    }
    
    // 중복되지 않는 값들
    const uniqueValues = Object.keys(counts).map(Number); 
    
    // 1. 네 주사위 숫자 같을 때
    if (uniqueValues.length === 1) {
        return 1111 * uniqueValues[0];
    }
    
    // 2. 세 주사위 숫자 같고, 나머지 하나가 다른 경우
    if (uniqueValues.length === 2) {
        const p = uniqueValues[0];
        const q = uniqueValues[1];
        if (counts[p] === 3 || counts[q] === 3) {
            return Math.pow(10 * (counts[p] === 3 ? p : q) + (counts[p] === 1 ? p : q), 2);
        }
    }
    
    // 3. 두 개씩 같은 숫자가 있을 때
    if (uniqueValues.length === 2) {
        const p = uniqueValues[0];
        const q = uniqueValues[1];
    
        if (counts[p] === 2 && counts[q] === 2) {
            return (p + q) * Math.abs(p - q);
        }
    }
    
    // 4. 두 주사위 숫자가 같고 나머지가 다를 때
    if (uniqueValues.length === 3) {
        let q, r;
        
        for (let key in counts) {
            if (counts[key] === 1) {
                if (q === undefined) q = Number(key);
                else r = Number(key);
            }
        }
        return q * r;
    }
    
    // 5. 모든 숫자가 다를 때
    if (uniqueValues.length === 4) {
        return Math.min(...uniqueValues);
    }
}
