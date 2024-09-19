function solution(num_list) {
    console.log(num_list)
    let lastNumber = num_list[num_list.length - 1];
    let secondLastNumber = num_list[num_list.length - 2];
    
    if(lastNumber > secondLastNumber){
        num_list.push(lastNumber - secondLastNumber);
    }else{
        num_list.push(lastNumber * 2);
    } 
    
    return num_list;
    
}