function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
plus(15, 5);

function minus(firstNumber, secondNumber) {
    console.log(firstNumber - secondNumber);
}
minus(15, 5);

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}
divide(15, 5);


// 이제부터 블로그
const cafe = "dessert";
const days = ["chocolate", "cake", "coffee", "cookie", "bread", 1, cafe];

console.log(cafe);
console.log(cafe);
console.log(days);


for (let i = 8; i < 9; i++) {
    console.log(i);
}

for (let i = 3; i >= 2; i--) {
    console.log(i);
}

const a = 1;
console.log(a);

const toBuy = ["carrot", "pizza", "milk", "egg"];
console.log(toBuy)


/*
days = {
    cafe = "chocolate",
    love = "cake",
    drink = "coffee",
    eat = "cookie",
    something = "bread",
    number = 1,
}
*/
/*
function cake(cakeName, price) {
    console.log("Hello! This is our " + cakeName + " cake! And it's " + price + "won")
}

cake("Chocolate", 5000);
cake("cheese", 4500);
cake("redvelvet", 5500);
cake("basque", 6000);

*/
/*
//dfdf
function cake(cakeName, price) {
    console.log("Hello! This is our " + cakeName + " cake! And it's " + price + "won")
}


menu = [
    { cakeName: "Chocolate", price: 5000 },
    { cakeName: "cheese", price: 4500 },
    { cakeName: "redvelvet", price: 5500 },
    { cakeName: "basque", price: 6000 }
];

menu.forEach(function (menu) {
    cake(menu.cakeName, menu.price);
});
*/

//df
function cake(cakeName, price) {
    console.log("Hello! This is our " + cakeName + " cake! And it's " + price + "won")
}

menu = {
    "Chocolate": 5000,
    "cheese": 4500,
    "redvelvet": 5500,
    "basque": 6000
};

for (let cakeName in menu) {
    cake(cakeName, menu[cakeName]);
}


/*
for (let cakeName in menu) {
    cake(cakeName, menu[cakeName]);
}


/*const player = {
    name: "potato",
    points: 10,
    fat: false,
};
console.log(player);
player.lastName = "pizza";
console.log(player);

console.log(player);
player.fat = "true";
console.log(player);

console.log(player.name);
console.log(player["name"]);
*/

/*const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

//Get menu from Array
console.log(daysOfWeek[1]);
console.log(daysOfWeek[0]);

//Add noe more day to the array
//function
daysOfWeek.push("sun")
*/

/*const a = 7;
const b = 2;
let myName = "Hyuna";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Cho Hyuna";
console.log("your new name is " + myName);

const amIFat = null
let something;
console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";


const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
console.log(daysOfWeek, nonsense);
*/
