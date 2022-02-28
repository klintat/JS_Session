let numberOffBs = parseInt(prompt("Please, enter the numbers of FizzBuzz"));

// let sk = 0;
// let current = 1;
// while (sk < numberOffBs) {
//     // if (current % 3 == 0 && current % 5 == 0)
//     if (current % 15 == 0);
//     console.log(current)
//     sk++
// }
// current++; // go to next number

// let current = 0;
// for (let i = 0; i < numberOffBs; i++); {
//     current += 15;
//     console.log(current);
// }


// let sk = 0; // counter - how many number printed already
// let current = 1; // the current number

// let previousStr;
// let previousNumber;
// while (sk < numberOffBs) {

//     if (current % 15 == 0) {
//         console.log(current);
//         previousStr = "";
//         previousNumber = 0;
//         sk++;
//     } else if (current % 3 == 0) {
//         previousStr = "Fizz";
//         previousNumber = current;
//     } else if (current % 5 == 0) {
//         if (previousStr === "Fizz") {
//             console.log(previousNumber);
//             console.log(current);
//             previousStr = "";
//             previousNumber = 0;
//             sk += 2;
//         }
//     }
//     current++
// }

// function getSum(a, b) {
//     return a + b;
// }

// console.log(getSum(3, 8));

// function getSum() {
//     return arguments[0] + arguments[1];
// }

// function showSum(a, b) {
//     console.log(a + b);
//     console.log(argument[2]);
// }
// let myFunc = showSum;

// myFunc (4, 9)

// let arr = [3, 2, -5];
// arr.sort((a, b) => a * a > b * b);

// console.log(arr.join());

// console.log(fact(5));

// function fact(n) {
//     if (n == 1)
//         return 1;
//     else
//         return n * fact(n - 1);
// }

// let  str = "8237237"
// console.log(str);

// let person = { name: "Klinta", "last Name": "Teberga", printName: function() { console.log(this.name = this.lastName) } };
// console.log(person);
// TransformStream()

function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

let myPerson = new Person("Klinta", "Teberga");
// console.log(myPerson);

console.log(Object.getPrototypeOf(myPerson));