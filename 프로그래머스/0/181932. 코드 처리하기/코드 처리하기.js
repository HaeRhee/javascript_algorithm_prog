function solution(code) {
  let ret = "";
  let mode = 0;
  for(let idx = 0; idx < code.length; idx++){
      if(mode === 0){
          if(code[idx] === "1"){
              mode = 1;
          } else if (idx % 2 === 0){
              ret += code[idx];
          }
      }else{
          if(code[idx] === "1"){
              mode = 0;
          }else if (idx % 2 === 1){
              ret += code[idx];
          }
      }
  }
    return ret === "" ? "EMPTY" : ret;
}