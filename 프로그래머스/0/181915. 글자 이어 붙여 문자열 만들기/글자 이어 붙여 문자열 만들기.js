function solution(my_string, index_list) {
    let result = "";
    
    index_list.forEach(index => {
       result += my_string[index]; 
    });
    
    return result;
}