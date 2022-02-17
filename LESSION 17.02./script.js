// let myObjekct = {

//   anotherfunction: function() {
//       console.log("Added form")
//   },
//     myFunction: function() {
//         this.anotherfunction()
//   }
//  }

// myObject.myFunction();

// alert("Here is the alert");
// this.alert("Here is the alert")

// let answer = this.confirm("Do you want to continue?")
// console.log(answer);

// answer = this.prompt("How are you?", "Good!");
// console.log(answer);
// this.open("https://" + answer);


// answer = this.prompt("Which page you want to visit?",). replace("http://", "").replace("https://", "")
// console.log(answer);
// this.open("https://" + answer);


// answer = this.prompt("Which page you want to visit?", "http://");
// this.open(answer);

let d = new Date();

this.alert("Today is " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());
// this.alert("Today is ${d.getDate()}.${(d.getMonth() + 1}.${d.getFullYear()}");

let age = parseInt(this.prompt("How old are you?"));
// // if (age > 17)//same as below
// if (age >= 18) {
//     this.alert("You can buy a glass of wine");
// } else {
//     this.alert("You are not allowed to buy the alcohol");
// }


// if (!(age < 18)) {
//     this.alert("You are not allowed to buy the alchohol");
// } else {
//     this.alert("You can buy glass of wine")
// }

// if (!(age < 18))
//     this.alert("You can buy a glass of wine")
// this.alert("One two three");


// if (age < 18)
//     this.alert("You are underage");
// else if (age >= 18 && age < 21)
//     this.alert("You can't buy the alko in US");
// else if (age < 21)
//     this.alert("Your age is under 21"); <-- This will never be executed
// else
//     this.alert("Enjoy your wine");


if (age < 18)
    this.alert("You are underage");
else {
    if (age >= 18 && age < 21)
    if (!(!(age >= 18 || age < 21)))
        this.alert("You can't buy the alko in US");
    else
        this.alert("Enjoy your wine");
}

//De Morgan's law 
/// !(cond1 || cond2) same as !cond1 && ! cond2
/// !(cond1 && cond2) same as !cond1 || !cond2 


