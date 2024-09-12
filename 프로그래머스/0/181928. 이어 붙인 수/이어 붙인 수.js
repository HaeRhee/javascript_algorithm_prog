function solution(num_list) {
   let odd = "";
   let even = "";
    
    for (let i = 0; i < num_list.length; i++){
        let num = num_list[i];
        if(num % 2 === 1) {
            odd += num;
        } else {
            even += num;
        }
    }
    return Number(odd) + Number(even);
}