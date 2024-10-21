function solution(my_string, s, e) {
    let start = my_string.slice(0, s);
    
    let middle = my_string.slice(s, e + 1).split("").reverse().join("");
    
    let end = my_string.slice(e + 1);
    
    return start + middle + end;
}