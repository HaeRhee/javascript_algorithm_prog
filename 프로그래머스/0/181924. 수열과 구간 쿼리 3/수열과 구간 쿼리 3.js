function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let query = queries[i];
        let temp = arr[query[0]];

        arr[query[0]] = arr[query[1]];
        arr[query[1]] = temp;
    }

    return arr;
}