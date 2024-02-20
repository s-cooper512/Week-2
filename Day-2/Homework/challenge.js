/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumber;
myFavoriteNumber = 7;

/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let letVariable;
const constVariable = null;
var varVariable;

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let promptThree = 12;
promptThree += 2;
promptThree -= 7;
promptThree *= 3;
promptThree /= 7;
promptThree %= 2;

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

const firstName = "Stephen";
const lastName = "Cooper";
const fullName = firstName + " " + lastName;

/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

const hello = "hello";
const world = "world";
let message = `${hello} ${world}`;

/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// (6==1)

// B. Use strict equals (===) to create a statement that is true
// ("string" === "string")

// C. Use strict unequal (!==) to create a statement that is true
// ("String" !== "string")

// D. Use less than (<) to create a statement that is false
//(10 < 2)

// E. Use greater than (>) to create a statement that is false
//(10 > 100)

// F. Use less than or equals (<=) to create a statemetn that is true
//(5 <= 11)

// G. Use greater than or equals (>=) to create a statemetn that is false
//(5 >= 11)

/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

// a < b;

// c > d;

// 'Name' === 'Name';

// a < b !== c;

// a === a <= d;

// e === 'Kevin';

// 48 == '48';

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

// a > b;

// c > d;

// 'Peanut' !== 'Peanut';

// a > b === c;

// a !== a >= d;

// e !== 'Jelly Bean';

// 48 === '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

const array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
const array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
const array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2] + ", " + array2[1][1] + ", " + array3[1][1][1][0]);

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

const array4 = ['a', 'b', 'c', 'd', 'e'];
let secondToLastItem = (array4[array4.length - 2]);

/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

const thom = ['Thom', 1000, 'Christchurch'];
const karolin = ['Karolin', 16, 'New York'];
const kristyn = ['Kristyn', 5, 'Pittsburgh'];
const cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

thom.shift();
thom.unshift("Gameboy");

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin[1]++;

// Change Cathleen's hometown from New York to "Gotham City".

cathleen[3] = "Gotham City";

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

kristyn.pop();
kristyn.push("Oakland");