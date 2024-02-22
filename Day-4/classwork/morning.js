function sayHello () {
    return("Hello ");
}

function sayWorld() {
    return("World");
}

function helloName (name) {
    return(sayHello() + name);
}

function doMath (number) {
    return(number * number);
}

function squareNumber (number) {
    return(number**2);
}

function addThreeNums (num1 = null, num2 = null, num3 = null) {
    let sum = num1 + num2 + num3;
    if (num1 === null && num2 === null && num3 === null) {
        return (10);
    } else {
        return (sum);
    }
}

function byTen (number = null) {
    if (number === null) {
        return (10);
    } else {
        return (number * 1000);
    }
}

function helloWorld () {
    return (sayHello() + sayWorld());
}

console.log(sayHello());
console.log(sayWorld());
console.log(helloName("Dave"));
console.log(doMath(12));
console.log(squareNumber(12));
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums());
console.log(byTen(23));
console.log(byTen());
console.log(helloWorld());