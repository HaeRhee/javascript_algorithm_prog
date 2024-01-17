function solution(arr1, arr2) {
    let answer = [];
    // [arr1[0],arr2[0],arr1[1],arr2[1]]
    // //[[1, 2], [2, 3]], [[3, 4], [5, 6]]
    for(let i = 0; i < arr1.length; i++){
        answer[i] = [];
        for(let j = 0; j < arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}