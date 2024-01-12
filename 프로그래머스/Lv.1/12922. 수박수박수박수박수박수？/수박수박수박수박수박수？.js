function solution(n) {
    //반복패턴 = 수박수박수박수...
    //주로 repeat()함수, for문
   let resoobak = '수박'.repeat(n);
   return resoobak.slice(0,n);
}