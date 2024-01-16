function solution(price, money, count) {
    for (let i = 1; i <= count; i++){//i번째
         money -= price*i
    }
    if (money >= 0){
       return 0;
    }else{
        return Math.abs(money);
    }
}