function solution(num1, num2) {
    //num1을 num2로 나누고, 1000을 곱한다.
 let answer = (num1/num2)*1000
 // parseInt 숫자 소수점 이하 제거하는 함수를 써준다.
 let number = parseInt((num1/num2)*1000)

    return number;
}