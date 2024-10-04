function solution(x1, x2, x3, x4) {
    // || 두 값 중 하나라도 true => true 리턴
    // && 양쪽 값 모두 true => true, 하나라도 false면 fasle 리턴
    return (x1 || x2) && (x3 || x4);
    
}