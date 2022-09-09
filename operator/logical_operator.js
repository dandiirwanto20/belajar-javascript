// &&, ||, !

let a = 10;
let b = 12;

/* AND Operator */
console.log(a < 15 && b > 10); // (true && true) -> true 
console.log(a > 15 && b > 10); // (false && true) -> false 

/* OR Operator */
console.log(a < 15 || b > 10); // (true || true) -> true 
console.log(a > 15 || b > 10); // (false || true) -> true 

/* NOT Operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false