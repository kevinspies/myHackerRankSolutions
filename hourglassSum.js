let twoDimArray = [[9, 8, 9, 4, 1, 1], [1, 9, 1, 2, 2, 4], [9, 9, 3, 4, 6, 1],
[2, 3, 9, 8, 9, 9], [2, 3, 9, 4, 1, 2], [2, 3, 1, 4, 1, 1]];

console.log(twoDimArray);

function hourglassSum(arr) {
    let highestSum = -1000000;
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            let thisSum = 0;
            thisSum = thisSum + arr[y][x] + arr[y][x + 1] + arr[y][x + 2]
                + arr[y + 1][x + 1]
                + arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];
            console.log("hourglass sum: " + thisSum);
            if (thisSum > highestSum) {
                highestSum = thisSum;
            }
        }
    }
    return highestSum;
}


console.log(hourglassSum(twoDimArray));
