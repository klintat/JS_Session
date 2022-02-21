// let a = Number.parseInt(prompt("Enter the value"));

// if (a < 10)
//     console.log("The value is less than 10");
// else if (a >= 10 && a < 20)
// console.log("The value is between 10 and 20")
// else
//     console.log("The value is greater than 20");

// let absVal = a >= 0 ? a : (-1) * a;
// console.log(absVal);

// let age = parseInt(prompt("Enter your age"));

// let retMessage = age >= 21 ? "You can buy an alcohol" : age >= 18 ? "You are under age, but you can't buy alcohol yet" :
// retMessage = age >= 21 ? "You can buy alcohol" :
//     age >= 18 ? "You are not under age, but you can't but alcohol yet" :
//     "You are under age";
// console.log(retMessage);

// let retMessage
// if (age >= 18);
//     retMessage = "You can buy alcohol";
// else 
//     retMessage = "You are under age";

// let userLevel = prompt("Enter your user level");

// switch (userLevel) {
//     case "admin":
//         console.log("The user is the administrator")
//         break;
//     case "moderator":
//         console.log("The user is the moderator")
//         break;
//     case "regular":
//         console.log("The user is the regular user")
//         break;
//     default:
//         console.log("The user is not recognized")
// }

// let grade = parseInt(promt("Pleas, enter the grade"));

// switch (grade) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("The test is not passed")
//         break;
//     case 4:
//     case 5:
//         console.log("The test is barely passed")
//         break;
//     case 6:
//     case 7:
//         console.log("The test is normal")
//         break;
//     case 8:
//     case 9:
//         console.log("The test is passed")
//         break;
//     case 10:
//         console.log("The test is fantastic")
//         break;
// }

// let value1 = 10;
// let value2 = 5;

// switch (5) {

//     case value1:
//         console.log("5 is the value of variable value1");
//         break;
//     case value2:
//         console.log("5 is the value of variable value2");
//         break;
//     default:
//         console.log("5 is not spotted");
// }

// let age = 19;

// switch (age >= 21) {

//     case true:
//         break
//     case false:
//         break;
// }

// switch (true) {
//     case (age % 5 == 0):
//         console.log("Age can be divided by 5");
//         break;
//     case (age % 4 == 0):
//         console.log("Age can be divided by 4");
//         break;
// // }

// for (let i = 0; i < 10; i++)
//     alert(i);

// let sum = 0;

// for (let i = 0; i < 501; i++ )
//     sum += i;

// console.log("The sum off all the integers up to 500" + sum);

// let sum = 0;

// for (let i = 0; i < 501; i+= 5)
//     sum += i;

// console.log("The sum is" + sum);

// for(let i = -1;i<0;i--) {
// console.log("Infinite loop");
// }

// let noIterations = parseInt(prompt("Enter the number of iterations"));
// let startElement = parseInt(prompt("Enter the starting element"));

// for (let i = startElement; i < noIterations; i++) {
//     console.log ("Iteration" + i);
// }

// for(let i=0; i<601;i++){
//     if(i % 3 == 0)
//     continue; // skip. Goes to the next iteration
//     console.log(i);
// }

// let sum = 100;
// for(;;) {
//     sum++;
//     console.log(sum)
//     let finish = prompt("Enter X to finish").toUpperCase();
//     if (finish === "X")
//         break;
// }


// let sum = 0;
// while (prompt("Enter X to finish").toUpperCase() !== "X") {
//     sum++;
//     console.log(sum);
// //     let finish = prompt("Enter X to finish").toUpperCase();
// //     if (finish === "X")
// //         break;
// }

// let sum = 0;
// do {
//     sum++;
//     console.log(sum);
// } while (prompt("Enter X to finish").toUpperCase() !== "X");

// let i = 0;

// while(i < 500){
//     console.log(i);
//     i++;
// }

// console.log(i);

for (; prompt("Enter X to finish").toUpperCase()!== "X";)
    console.log("the loop");