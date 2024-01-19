

function solution(n, m) {
  let answer = [];
  let gcd = (n, m) => {
  //n, m의 최대공약수 , 최소공배수 [n[0],m[1]]
   if( m % n === 0) { 
       return n;
   }else{
        return gcd(m, n % m)};
  
  };
  let lcm = (n * m) / gcd(n, m); //최소공배수
  let gcdSnd = gcd(n, m);

  return [gcdSnd, lcm];
}