//створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];
let numbers = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9]
//перебрати масив і до кожного числа додати 5, і вивести результат в консоль
numbers.forEach(number =>{
    console.log(number += 5)
}
 )
//створити на базі масиву Set унікальних значень
//ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів
let a = [1,2,2,3,4];
let s = new Set(a);
let sum = 0;
s.forEach((value) => {
    let doubleValue = value * 2;
    sum += doubleValue;
});
console.log(sum)

//створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}
//зробити конкатенацію ключів з мапи.
const map = { "a": 1, "b": 2, "c": 3, "d": 4 };
const concatenatedKeys = Object.keys(map).join("");
const sumOfValues = Object.values(map).reduce((acc, val) => acc + val, 0);
console.log(concatenatedKeys);
console.log("Sum of values:", sumOfValues);

//
// let m = new Map();
// m.set("a", [1,5,9]);
// console.log(m.get("a"))
//
// let fruits = new Map ();
// fruits.set("a", [1]);
// fruits.set("b", [2]);
// fruits.set("c", [3]);
// fruits.set("d", [4]);
// console.log(fruits.get())

// const map = { "a": 1, "b": 2, "c": 3, "d": 4 };
// const concatenatedKeys = Object.keys(map).join("");
// console.log(concatenatedKeys);