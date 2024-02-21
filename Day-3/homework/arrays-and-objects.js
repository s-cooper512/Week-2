/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push("Pizza", "Cheeseburger");

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift("Taco");

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = foods[1];

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Print all items using a for loop

1) Use a for loop to iterate through the `foods` array.

2) Print each item in the array to the console.

Complete Exercise 5 in the space below:
*/

// Your for loop here

function printAllItems (inputArray) {
    let outPutString;

    for (i = 0 ; inputArray.length > i ; i++) {
        if (i > 0) {
            outPutString = outPutString + ", " + inputArray[i];
        } else {
            outPutString = inputArray[i];
        }
    }

    return(outPutString);
}


console.log('Exercise 5 result: ' + printAllItems(foods));


/*
Exercise 6: Find a specific item with a for loop

1) Use a for loop to search for the item 'cheeseburger' in the `foods` array.

2) If found, print 'Cheeseburger is at index X', where X is the index of 'cheeseburger' in the array. Otherwise, print 'Cheeseburger not found'.

Complete Exercise 6 in the space below:
*/

// Your for loop here

function findInArray (inputArray, searchString) {
    for (i = 0 ; inputArray.length > i ; i++) {
        if (inputArray[i] == searchString) {
            return (searchString + " was found at index " + i);
        }
    }
    return (searchString + " was not found");
}


console.log('Exercise 6 result: ' + findInArray(foods, "Cheeseburger"));

/*
Exercise 7: Sum all numbers in an array

1) Given an array of numbers, find the sum of all elements.

2) Use a for loop to iterate through the array and sum the elements.

3) Assign the sum to a variable called `totalSum` and print it.

Given array for Exercise 8:
*/

const numbers = [10, 20, 30, 40, 50]; // Example array
let totalSum = 0;
// Your for loop here

for (i = 0 ; numbers.length > i ; i++) {
    totalSum += numbers[i];
}

console.log("Exercise 7 result: " + totalSum);

/*
Exercise 8: User Object
*/
//8.1
const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isLoggedIn: false
};
  
console.log('Exercise 8 result: ');
//8.2
console.log(user.name + " " + user.email);
//8.3
user.age++;
user.isLoggedIn = true;
//8.4
user.hobbies = ["reading", "gaming", "hiking"];
//8.5
delete user.email;
//8.6
user.address = {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
};

console.log("Address: " + user.address.city);
//8.7
for (i=0;Object.keys(user).length > i;i++) { //for each variable in user
    let category = Object.keys(user)[i]; //assign name of variable (not content) to category
    if (category !== "address") {
        console.log(category + ": " + user[category]); //output value of given variable in users
     } else if (category == "address") {
        console.log(category + ": ");
        for (j=0; Object.keys(user.address).length > j;j++) { //same as parent loop, but only for variables under the address object
            category = Object.keys(user.address)[j];
            console.log(category + ": " + user.address[category]);
        }
    }
}