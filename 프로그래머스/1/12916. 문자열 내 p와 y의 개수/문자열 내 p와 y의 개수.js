function solution(s){
    
    if(s.toLowerCase().split("p").length === s.toLowerCase().split("y").length ){
        return true;
    }else if(s.toLowerCase().split("p").length === 0 && s.toLowerCase().split("y").length === 0){
        return true;
    }else{
        return false;
    }

}