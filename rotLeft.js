let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//my thought is that we can just do a simple calculation to find out where our original starting index item will be, because the rest will just fall in place. since order will stay the same,
//we should be able ot just figure out where the first item goes based off d, and then just fill in the rest and account for "overflow" to keep items from going out of bounds

function rotLeft(a, d) {
    let newArr = [];
    let newStartIndex = a.length - (d % a.length);
    let startIndex = 0;
    //for loop to go from new start index (smartly calculated) until end of array newArr, filling in the values of a
    for (let i = newStartIndex; i < a.length; i++) {
        newArr[i] = a[startIndex];
        startIndex += 1;
    }
    //loop to go from start of newArr to where we started in the above array, and viola! we've done one calculation and gone through the array length just once, O sub n
    for (let z = 0; z < newStartIndex; z++) {
        newArr[z] = a[startIndex];
        startIndex += 1;
    }
    return newArr;
}

console.log(rotLeft(arr, 3));   