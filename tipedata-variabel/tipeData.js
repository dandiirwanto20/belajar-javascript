// tipe data undefined:
// let x;
// console.log(typeof(x));

// tipe data Numbers:
// let x = 10;
// console.log(typeof(x));

// let y = 17.36;
// console.log(typeof(y));

/*Operator Aritmatika dalam JS:
- + (penjumlahan)
- - (pengurangan)
- / (pembagian)
- * (perkalian)
- % (sisa hasil bagi)
- ** (perpangkatan) */

// contoh operator:
// let a = 12;
// let b = 9;
// let c = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a % b);
// console.log(a ** c);

// Increment dan Decrement
// let postfix = 5;
// console.log(postfix++);

// console.log(postfix);

// let prefix = 5;
// console.log(++prefix);

// BigInt (kebutuhan untuk kriptografi atau menentukan waktu hingga presisi microsecond)
// const bigNumber = 1234567890123456789012345678901234567890n;
// const myInt = 1234567890123456789012345678901234567890;

// console.log(bigNumber);
// console.log(myInt);

// const bigIntButSmall = 7n;
// console.log(5n + 2n);
// console.log(5n - 2n);
// console.log(5n * 2n);
// console.log(5n / 2n); // yang harusnya 2.5n maka dibulatkan menjadi 2n
// console.log(5n % 2n);

// penggunaan Strings
// let greet = "Hallo";
// console.log(typeof(greet));

//penggunaan tanda petik dalam string:
// const question = '"What do you think of JavaScript?" I asked';
// console.log(question);

// contoh lain: (penggunaan backslash (\))
// const answer = '"I think it\'s awesome!" he answerd confidently';
// console.log(answer);

// console.log("Windows path: C:\\Program Files\\MyProject");

// penggunaan operator (+) pada string:
// let greet = "Hallo";
// let moreGreet = greet + greet; // konsep concatenation yakni, menggabungkan string apa adanya

// console.log(moreGreet); 


//teknik string interpolation pada string dengan menggunakan backticks (`):
// const myName = "Dandi";
// console.log(`Hello, my name is ${myName}`); //teknik memasukan variable ke dalam string template

//penggunaan boolean:
// let x = true;
// let y = false;

// console.log(typeof(x));
// console.log(typeof(y));

//contoh penggunaan operator komparasi dalam boolean:
// const a = 10;
// const b = 12;

// let isGreat = a > b;
// let isLess = a < b;

// console.log(isGreat);
// console.log(isLess);

//penggunaan null:
// let someLaterData = null;
// console.log(someLaterData);

// penggunaan symbol:
// const id = Symbol("id");
// console.log(id);

// const id1 = Symbol("id");
// const id2 = Symbol("id");

// console.log(id1 == id2); // umum digunakan sebagai nama property dari Object, dimana Object merupakan tipe data yang kompleks untuk menyimpan berbagai data kompleks untuk menyimpan berbagai struktur data.