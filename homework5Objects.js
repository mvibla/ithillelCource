// //створити 3 об'єкти через {}
//1
let user = {
    name: "Marta",
    age: 28,
    "QA Engineer": true
};
console.log(user["QA Engineer"]);
//2
function makeUser(name, age){
    return {
        name: name,
        age: age
    };
}
let girl = makeUser("Марта", 28);
console.log(girl.name);
//3
let mother = {herage: 55, hername: "Nadiia" }
let key = "herage";
console.log(key in mother);
//створити 3 об'єкти через ()
//1
let friend = new Object();
friend.name = "Anna";
friend.age = 29;
friend.hobby = "Dancing";
console.log(friend.hobby)
//2
let fruits = new Object();
fruits.first = "Banana";
fruits.second = "Orange";
fruits.third = "Kiwi";
console.log(fruits.first + " , " + fruits.second + " , " + fruits.third)
//3
let men = new Object();
men.fullname = "Jason Statham"
console.log(men.fullname + " - " + "is my favorite actor")
//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
let person = {
    type: "Waiting for the open positions"
}
let engineer = Object.create(person);
engineer.name = "Marta";
engineer.age = 28;
engineer.speciality = "QA";

engineer.__proto__ = person;


let QA_engineer = Object.create(engineer);
QA_engineer.level = "first";

QA_engineer.__proto__ = engineer;

console.log(engineer)
console.log(QA_engineer.age)
console.log(QA_engineer.speciality)
console.log(engineer.type)

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }
// var car1 = new Car("Eagle", "Talon TSI", 1993, rand);
// var car2 = new Car("Nissan", "200Z", 1995, ken);
// var car3 = new Car("Mercedes", "F500", 1992, kell);

// melony.sex.name;
// function Car(brand, age, isnew){
//     this.brand = brand;
//     this.age = age;
//     this.isnew = isnew;
//     this.details = { //додати об'єкт в об'єкті
//     color: "red",
//     cost: 10000,
//     brand: BMW,
//     "about car": ["sport car", "for men"]
    
//     },
//     this.echo = buythecar;      

// }
//     function buythecar(){
//     console.log(`I will buy ${this.brand}!!!`)
//     }
// buythecar()