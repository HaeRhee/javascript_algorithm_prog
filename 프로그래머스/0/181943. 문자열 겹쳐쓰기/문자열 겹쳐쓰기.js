function solution(my_string, overwrite_string, s) {
 // 인덱스 s 이전 + overwrite_string + 나머지
    const myString = my_string.slice(0, s);
    const overwriteString = overwrite_string; 
    const myStringRemainder = my_string.slice(s + overwrite_string.length)
    
    return myString + overwriteString + myStringRemainder
    
}