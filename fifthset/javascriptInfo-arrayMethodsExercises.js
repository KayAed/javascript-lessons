/*
function camelize(str) {
    str = str.split("-")
    // str[1].toUpperCase()
    // str[2].toUpperCase()
    let newStr = str.join("")

    return newStr;
}

console.log(camelize("border-left-width"));
*/

function camelize(str) {
    return str
        .split("-")
        .map(
            (word, index) => index == 0? word : word[0].toUpperCase() + word.slice(1)
        )
        .join("")
}
console.log(camelize("border-left-width"));


function filterRange(arr, a, b) {
    return arr

    .filter((num) => num >= a && num <= b)
}

arr = [6, 2, 4, 9, 12, 5, 16];
console.log(filterRange(arr, 3, 12));

/*
function filterRangeInPlace(arr2, a, b) {
    return arr2

    .splice((num1) => num1 >= a && num1 <= b)
}

arr2 = [6, 2, 4, 9, 12, 5, 16];
console.log(filterRangeInPlace(arr, 3, 8));
*/

//turns out my implementation passed one test(returns filtered values), 
// but not the second (doesn't return anything). Their solution comes below my commented solution.
/*
function filterRangeInPlace(arr2, a, b) {
    return arr2

    .splice(a, b)
}

arr2 = [6, 2, 4, 9, 12, 5, 16];
console.log(filterRangeInPlace(arr2, 2, 4));
*/

function filterRangeInPlace(arr2, c, d) {
    for (let i = 0; i < arr2.length; i++) {
        let val = arr2[i];

        //remove if outside of the interval
        if (val < c || val > d) {
            arr2.splice(i, 1);
            i--;
        }
    }
}

arr2 = [6, 2, 4, 9, 12, 5, 16];
console.log(filterRangeInPlace(arr2, 2, 9));