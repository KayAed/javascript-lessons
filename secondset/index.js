function favoriteAnimal(animal) {
return animal + " is my favorite animal!"
}

console.log(favoriteAnimal("Antelope"));

const myNumber = Math.random();
console.log(myNumber);
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

const myArray = ["I", "love", "chocolate", "houses"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string


const myText = "I am a bun";
const newString = myText.replace("bun", "sausage");
console.log(newString);
//the replace() function takes the first string
//and replaces it with the second string.

//the blocks of code below explain code scope.
const x = 1;

function a() {
const y = 2;
output(z);
}

function b() {
const z = 3;
output(y);
}

function output(value) {
const para = document.createElement('p');
document.body.appendChild(para);
para.textContent = `Value: ${value}`;
}

//Function Library Example
const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    // if (num < 0) return undefined;
    // if (num === 0) return 1;
    // let x = num - 1;
    let x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

input.addEventListener("change", () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = "You need to enter a number!";
    } else {
        para.textContent = `${num} squared is ${squared(num)}. `;
        para.textContent += `${num} cubed is ${cubed(num)}. `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
});