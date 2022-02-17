let a = 1;
let b =2121.3232;
// let bigInt = 12345678910123456789n;
let specialNumber = 5E-1;
console.log(specialNumber);
a = 0.2;
b = 0.1;
console.log((a + b) - 0.3 < Number.EPSILON);
let myNumber = Number("6434343");
myNumber = parseInt("743434343");
myNumber = Number("434343,3232".replace(",", "."));
myNumber = Number("884343ffdsfsdfds");
console.log(typeof(myNumber));

a = 0;
b = 0;
let results = a / b;
console.log(result);

// 0.1 + 0.2 - 0.3 == 0

