function solution(a, b) {
    // a, b를 붙인 값 중 더 큰 값 도출
    console.log(a+b); // 지금 a,b 숫자라 그냥 더하면 숫자로 더해짐 문자로 변환 ㄱ
    
    
    let strA = String(a);
    let strB = String(b);
    
    console.log(strA+strB);
    
    let numberAplusB = Number(strA + strB);
    let numberBplusA = Number(strB + strA);

    
    console.log("numberAplusB", numberAplusB);
    console.log("numberBplusA", numberBplusA)
    console.log(numberAplusB);
    
    
    return numberAplusB >= numberBplusA ? numberAplusB : numberBplusA;
}