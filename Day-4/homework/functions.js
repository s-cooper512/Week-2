//Functions
function greeting(name) {
    return("Hello, " + name + "!");
}

function concat(str1, str2) {
    return(str1 + str2);
}

function toThePowerOf (num, exp) {
    return(num**exp);
}

function arrayAdd (inputArray) {
    let sum = 0;
    inputArray.forEach(element => {
        sum += element;
    });
    return (sum);
}

function passThrough () {
    return (function (inputArray = []) {
        return(inputArray.length);
    });
}

function addToStringArray (inputStr) {
    strArray.push(inputStr);
}

function evenNumsOnly (inputArray) {
    let outputArray = [];
    inputArray.forEach(element => {
        if (element % 2 === 0) {
            outputArray.push(element);
        }
    });
    return(outputArray);
}

function tormentEmployer (inputArrayOfObjects) {
    let salaryArray = [];
    let arrayAvg = 0;
    let arrayLg;
    let arraySm;

    for (index=0 ; inputArrayOfObjects.length > index ; index++) {
        salaryArray.push(inputArrayOfObjects[index].salary);
        arrayAvg += inputArrayOfObjects[index].salary;
    }

    arrayAvg /= (salaryArray.length);

    for (k=0 ; salaryArray.length > k; k++) {
        for (i=0; salaryArray.length > i; i++) {
            let tempVal = salaryArray[k];
            if (salaryArray[k] > salaryArray[i]) {
                salaryArray[k] = salaryArray[i];
                salaryArray[i] = tempVal;
            }
        }
    };

    arraySm = salaryArray[0];
    arrayLg = salaryArray[salaryArray.length-1];

    return(console.log("Highest salary: ", arrayLg), console.log("Lowest salary: ", arraySm), console.log("Average salary: ", arrayAvg));
}

//Global variables
let passBack = passThrough();
let strArray = ["One", "Two", "Three"];
const employees = [
    { id: 1, name: "John Doe", department: "Engineering", salary: 70000 },
    { id: 2, name: "Jane Smith", department: "Marketing", salary: 65000 },
    { id: 3, name: "Sam Williams", department: "Engineering", salary: 80000 },
    { id: 4, name: "Sandra Lee", department: "Finance", salary: 75000 }
];

//Runtime
console.log(arrayAdd([1, 2, 3, 4, 1]));
console.log(passBack([1, 2, 3, 4]));
addToStringArray("Five");
console.log(strArray);
console.log(evenNumsOnly([3, 2, 5, 22, 29, 30]));
tormentEmployer(employees);