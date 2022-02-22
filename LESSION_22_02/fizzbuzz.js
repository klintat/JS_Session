// let userInput = prompt("Enter the numbers of Fizz Buzz");
// let numberOfFizzBuzz = parseInt(userInput);
// let currentNumber = 1;

// while (numberOfFizzBuzz > 0) {
//     if ((currentNumber % 3 === 0) && (currentNumber % 5 === 0)) {
//         console.log(currentNumber);
//         numberOfFizzBuzz--;
//     }
//     currentNumber++;
// }


// let userInput = prompt("Enter the numbers of Fizz Buzz");
// let numberOfFizzBuzz = parseInt(userInput);
// let currentNumber = 1;

// while (numberOfFizzBuzz > 0) {
//     let numberName = "";
//     if (currentNumber % 3 === 0) {
//         numberName += "Fizz";
//     }
//     if (currentNumber % 5 === 0) {
//         numberName += "Buzz";
//     }
//     if (numberName !== "") {
//         console.log(currentNumber + " - " + numberName);
//         numberOfFizzBuzz--;
//     }
//     currentNumber++;
// }

function nospieduPogu() {
    let userInput = prompt("Enter the numbers of Fizz Buzz");
    let numberOfFizzBuzz = parseInt(userInput);
    let currentNumber = 1;

    while (numberOfFizzBuzz > 0) {
        if ((currentNumber % 3 === 0) && (currentNumber % 5 === 0)) {
            let jaunaisElements = document.createElement("p");
            jaunaisElements.innerText = currentNumber;
            document.getElementById("fizzbuzzi").appendChild(jaunaisElements);
            numberOfFizzBuzz--;
        }
        currentNumber++;
    }
}