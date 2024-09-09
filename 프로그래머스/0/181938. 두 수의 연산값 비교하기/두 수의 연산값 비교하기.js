function solution(a, b) {
    // a, b => a+b, 2*a*b
   const changeAplusB = Number(String(a) + String(b))
   const multiply2AB = 2 * a * b
   
   return changeAplusB >= multiply2AB ? changeAplusB : multiply2AB
}