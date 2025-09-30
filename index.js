//js for theme changer.
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor=bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
select.value === "black"
? update("black", "white")
: update("white", "black"),
);

// Function: creates a new paragraph and appends it to the bottom of the HTML body.
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log(phrase);

let namee = "John";

// embed a variable
alert( `Hello, ${namee}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3



let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("trial").innerHTML = text.charCodeAt(17);

const institutionName = "Blackbox Technology Systems Ltd";
let letter = institutionName.at(13);

document.getElementById("trial2").innerHTML=letter; 


//letter = institutionName[20]; //another way to get a specific letter.
//marks the end of the 4 methods used for extracting string characters.

//start of string concatenation
let text1 = "Hellloo";
let text2 = "World of";
let text3 = "Boomers!";
let textX = text1.concat(" ", text2, " ", text3);

document.getElementById("conct1").innerHTML = textX;
document.getElementById("conct1").innerHTML = textX.toUpperCase();

//start of string extraction methods
let fruitList = "Orange, Pineapple, Banana, Kiwi";
/*let part = fruitList.slice(-21, -4);//extracting strings using string slice ()

document.getElementById("slice1").innerHTML = part; */

document.getElementById("slice1").innerHTML = fruitList.substring(18, 28);

let text4 = "     Hello World!     ";
let text5 = text4.trimStart();

document.getElementById("slice1").innerHTML =
"Length text4 = " + text4.length + "<br>Length text5 = " + text5.length; //string trimStart()

//convert strings to same case (upper or lower) before comparing them.
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

if (-1 || 0) {
  alert( 'first' );
}


// console.log(`The length of the string is: ${text.length}`);
       /* console.log("Hello World")

        let name = "John";
        let surname = "Apple";

        console.log(name);
        console.log(surname);

        let age = 13;
        console.log(age); //outputs 13 to the console

        age = 54;
        console.log(age);

        const pi = 3.14;
        console.log(pi);

        console.log((3+2)-76*(1+1));

        Assignment

        console.log((4 + 6 + 9)/77);

        let a = 10;
        console.log(a);
        
        a = 45;
        console.log(a);

        let b = 7*a;
        console.log(b);

        const max = 57;
        const actual = max - 13;
        const percentage = actual/max;
        console.log(percentage)

        let name = "John";
        let admin;
        admin = name;
        alert(admin);

        let ourPlanetName = "Earth";
        let currentUserName = "Amane Kane";

        "Tasks" start here.
        let a = 1, b = 1;
        let c = ++a;
        let d = b++

        alert ( a );
        alert ( b );
        alert ( c );   end of task 1.
        alert ( d );

        let a = 2;
        let x = 1 + (a *= 2);
        alert( a );
        alert( x );  end of task 2.

        "" + 1 + 0;
        "" - 1 + 0;
        true + false;
        6 / "3";
        "2" * "3";
        4 + 5 + "px";
        "$" + 4 + 5;
        "4" - 2;
        "4px" - 2;
        " -9 " + 5;
        " -9 " - 5;
        null + 1;
        undefined + 1;
        " \t \n" - 2;    end of task 3. refer to notes in phone for solution.

        let a = prompt("First number?", 1);
        let b = prompt ("Second number?", 2);

        alert(+a + +b);  end of task 4. */
