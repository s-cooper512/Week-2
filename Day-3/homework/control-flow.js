let score = -10;
let letterGrade = null;

function calculateLetterGrade (inputScore) {
    let outputScore;

    if (inputScore > 100) {
        outputScore = "A+";
    } else if (90 <= inputScore && inputScore <= 100) {
        outputScore = "A";
    } else if (80 <= inputScore && inputScore < 90) {
        outputScore = "B";
    } else if (70 <= inputScore && inputScore < 80) {
        outputScore = "C";
    } else if (60 <= inputScore && inputScore < 70) {
        outputScore = "D";
    } else if (0 <= inputScore && inputScore < 60) {
        outputScore = "F";
    } else {
        outputScore = "Unquantifiably Terrible";
    }

    return(outputScore);
}

letterGrade = calculateLetterGrade(score);

console.log(letterGrade);