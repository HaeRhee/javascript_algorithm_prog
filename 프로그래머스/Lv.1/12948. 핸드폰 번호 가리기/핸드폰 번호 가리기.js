function solution(phone_number) {
    let  answer = ''; //전화번호가 문자열. length. answer: 전화번호
    //전화번호 뒷자리 4자리
    //length - 4
    let star = "*".repeat(phone_number.length - 4);
    let four_num = phone_number.slice(-4, phone_number.length)
    return answer = star + four_num;
}