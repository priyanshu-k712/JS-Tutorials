let str1 = 'Priyanshu';
let str2 = 'Hello';
// Can be declared with single quote as well as double quote.
let gameName = new String('Apex Legends');
// console.log(gameName[0]); //It becomes an object and elements can be accessed by index. But it is not array in any way.
// console.log(gameName.__proto__); // Accessing Prototype

// console.log(str2+" "+str1); // Don't write like this.

// console.log(`Goodmorning ${str1}!`); // Write like this

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName); //Original value is not changed b/c string is a primitive data type and it uses stack memory.

// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('p'));

let newString = gameName.substring(0,5);
console.log(newString);

let anotherString = gameName.slice(-8,-4);
console.log(anotherString);

let newStr = "   Hitesh   ";
console.log(newStr.trimStart());
console.log(newStr.trimEnd());
console.log(newStr.trim());

let url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", '-'));
console.log(url.includes("harry"));

let words = gameName.split(" ")
console.log(words);
