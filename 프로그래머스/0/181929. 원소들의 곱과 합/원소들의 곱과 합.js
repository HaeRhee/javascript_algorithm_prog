function solution(num_list) {
    let element = 1;
    let sum = 0
    
    for(let i = 0; i < num_list.length; i++) {
        element *= num_list[i];
        
        sum += num_list[i];
    }
    return element < sum * sum ? 1 : 0;
}