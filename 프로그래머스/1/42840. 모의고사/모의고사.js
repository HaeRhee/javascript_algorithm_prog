function solution(answers) {
    const one = [1,2,3,4,5,];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];

    const results = [0, 0, 0]

    for( let i = 0; i < answers.length; i++){////최대 10,000문제 => 큰 범위
        if (one[i%5] === answers[i])results[0]++;
        if (two[i%8] === answers[i])results[1]++;
        if (three[i%10] === answers[i])results[2]++;
    }

    const maxNumber = Math.max(...results);
    //result = [4, 5, 5]
    //maxNumber = 5;
    let answer = [];
    // i = 0; answer = [];
    // i = 1; answer = [2];
    // i = 2; answer = [2, 3];
    for (let i = 0; i < results.length; i++){
        if(maxNumber === results[i])answer.push(i+1);
    }
    return answer;
}