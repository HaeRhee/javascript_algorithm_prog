function solution(food) {
  let fisrtManEat = "";
  let sndManEat = "";
  //food[i] i번 음식의 수,  food[0]는 수웅이가 준비한 물의 양
  //repeat(food[i]/2)
  for (let i = 1; i <= food.length; i++) {
    let NumberOnePerson = String(i).repeat(Math.floor(food[i] / 2));
    fisrtManEat += NumberOnePerson;
  }

  for (let j = food.length; j >= 1; j--) {
    let NumberTwoPerson = String(j).repeat(food[j] / 2);
    sndManEat += NumberTwoPerson;
  }
  let answer = fisrtManEat + "0" + sndManEat;
  return answer;
}