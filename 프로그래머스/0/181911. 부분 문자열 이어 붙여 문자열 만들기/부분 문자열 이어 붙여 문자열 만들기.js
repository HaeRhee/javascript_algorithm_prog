function solution(my_strings, parts) {
    let result = "";
    
    for (let i = 0; i < my_strings.length; i++) {
        let s = parts[i][0];
        let e = parts[i][1];
        
        result += my_strings[i].slice(s, e + 1);
    }
    
    return result;
}