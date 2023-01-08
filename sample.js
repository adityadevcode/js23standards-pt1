// var, let , const
// define, update, redifine
// const cannot mutate primitive type

// define
// var number = 100;
// console.log(number);
// // update
// number = 200;
// console.log(number);
// // redifine
// var number = 'orange';
// console.log(number);

// let amount = 100;
// console.log(amount);
// amount = 200;
// console.log(amount);
// amount = 'orange';
// console.log(amount);

// const total = 100;
// // console.log(total);
// // total = 200;
// const person = { name: 'bob' };
// person.name = 'john';
// console.log(person); //john
// person.name ="rowe";
// console.log(person);//rowe
// console.log(person.name);//rowe

// const family = {
// nam:'tim',
// age:34,
// place: 'some'
// }
// console.log(family); //{nam: 'tim', age: 34, place: 'some'}
// console.log(family.nam);
// family.nam ="krush"
// console.log(family.nam); //krush

////////////////////////////////////////
///part 2
//var, let, const
//let const blocked scoped -any thing with in brackets
// var function scoped

// global scope
// console.log(pla);
// var pla="somewhere"  //undefined

// console.log(pl);
// let pl="some" //cannot access pl before intialization

// console.log(la);
// const la="place" //cannot access pl before intialization

//local scope to function
// function localScope() {
//     var random = 'tony';
//     console.log(`hello the name is ${random}`);
// }

// localScope();
//  console.log(localScope);//it will display full function
//  console.log(localScope());

 //global scope
// var place ="dominca" 
// function globalScope() {
//     var random = 'tony';
//     console.log(`hello the name is ${random}`);
//     console.log(`welcome to our place ${place}`);
// }

// globalScope();//display 2 console.log
//  console.log(globalScope);//entire function
//  console.log(globalScope());//display 2 console.log

//unable to access function var outside function called block scope to the fun

// function blockScope() {
//         var ran = 'tony';
//         var test ='output'
//         console.log(`hello the name is ${ran}`);
//     }
//  console.log(test);////uncaught ref error test is not defined

// blockScope();
// // console.log(blockScope());
// console.log(test);//uncaught ref error test is not defined


// let amount = 100;

// function greet() {
//   // local scope
//   var random = 'some random value';
//   console.log(`hello there ${amount} ${random}`);
// }
// //  console.log(random);//uncaught ref error random is not defined

// greet(); //same out for both commands
// console.log(greet());//hello there 100 some random value

// let total =100;
// let test =true;
// if (test){
//     let total ='apples';
//     let test='false';
//     let value='banana';
//      console.log('hello');
//      console.log('it will display anything we mention here  without initialization')
// }

// console.log(total);//100
// console.log(test);//true
// console.log(value); //value is not defined

// let total = 10000;
// let test = true;

// if (test) {
//   // local scope
//   let total = 'oranges and onions';
//   let test = 'some random value';
//   console.log('hello there');  //hello there
// }

// // console.log(value); value is not defined
// {
//   let total = 100;
//   console.log(total);//100
// }
// {
//   let test = false;
//   console.log(test);//false
// }

// console.log(total);//10000
// console.log(test);//true

///pt-3 template string literals//////

// const name ="sum";
// const lastName ="plus";
// const age =44;

// const fullSentence = "my full details "+ name + " "+ lastName+ " "+ "my age"+ " " + age;
// console.log(fullSentence);
// const phrase = `my full details is ${name} ${lastName.toUpperCase()} ${age}`;
// console.log(phrase);

// new code

// const person = {
//     name: "emma",
//     job: "developer",
//     hobbies: ["surfing", "baking", "bowling"],
//   };
// //   console.log(person);
// //   //{name: 'emma', job: 'developer', hobbies: Array(3)}
// // console.log(person.name); //emma
// // console.log(person.job); //developer
// // console.log(person.hobbies); //surfing,baking,bowling
// // console.log(person.hobbies[1]);//baking

// const result = document.getElementById("result");
// result.innerHTML = "<h2>" + person.name +"</h2>" + "<p>" +person.job +"</p>";
// result.innerHTML = `{
// <h2>${person.name}</h2>
// <p>${person.job}</p>
// <ul>
// ${person.hobbies
//     .map(item => {
//         return `<li>${item}</li>`;
//     })
//     .join(" ") }
//     </ul>}`;

// console.log(person);
// console.log(result);

///////////////////////////////////////////////////

// function newAccount(name, initialBalance){
//     let balance = initialBalance;
//     function showBalance(){
//         console.log(`Hey ${name}, your balance is ${balance}`);
//     }
//     function deposit(amount){
//         // balance = balance + amount;
//         balance += amount;
//         showBalance();
//     }
//     function withdraw(amount){
//         if(amount > balance){
//             console.log(`Hey, ${name}, sorry not enough funds!!!`);
//             return;
//         }
//         console.log('******* Withdraw *******');
//         balance -= amount;
//         showBalance();
//     }
//     return {
//         showBalance: showBalance,
//         deposit: deposit,
//         withdraw: withdraw
//     };
// }

// const emma = newAccount("emma", 1000);
// console.log(emma);
// emma.showBalance()
// emma.deposit(3000);
// emma.withdraw(2000)
// emma.showBalance();
// emma.balance = 10000;
// emma.showBalance();

// const harry = newAccount("harry", 2000);
//  console.log(harry);
// harry.showBalance();
// harry.deposit(500);
// harry.showBalance();
// harry.withdraw(200);
// harry.showBalance();


// function outer(){
//     let privateVar = 'outer secret';
//     function inner(){
//         console.log(`hello there secret is: ${privateVar}`);
//     }
//     return inner;
//     // inner();
// }
// const resultFun = outer();
// resultFun();

// outer()();

// console.dir(outer());

////////////////////////////

// let person1 = {name: 'bob'};
// person1.name = 'sam';
// console.log(person1);
// const per = {na:'re'};
// per.na ='vin';
// per.na="pin";
// console.log(per);
// let person1 = {name:'kri'};
// person1.name ='emma';
// console.log(person1.name);


////////////////////////////////////////
// functions declaration
// function sayHi() {
// console.log("hello");
// }
// sayHi();

// //function expression
// const hello = function name(){
//     console.log("welcome");
// }
// hello();
// console.log(hello);
// console.log(hello());

// //arrow function
// const name = () => {
//     console.log("arrow function")
// }

// name();
// console.log(name());

// const na = () => console.log("hello");
// na();

// const doub = value => value * 2;
// console.log(doub(2));

//return obj
// const obj = () => ({name:"emm",age:34});
// const person = obj();
// console.log(person);//{name: 'emm', age: 34}
// console.log(obj);//arrow func () => ({name:"emm",age:34})

//arrow function as call back fucntion
// const numbers = [1,2,3,4,5,6];
// const big = numbers.filter(number => number > 1);
// console.log(big); //(5) [2, 3, 4, 5, 6]
// const small = numbers.filter(number => number < 6);
// console.log(small);//(5) [1, 2, 3, 4, 5]
// const div = numbers. filter(number => number % 2);
// console.log(div);//(3) [1, 3, 5]
// const mul =numbers. filter(number => number * 2);
// console.log(mul);//(6) [1, 2, 3, 4, 5, 6]

// One parameter
// const hello = function (name) {
//     console.log (`Hello ${name}`);
// };

// hello("tony"); //one param

// const hello = function(name) {
//      console.log(`Hello ${name}`);
//     };
//      hello("emma");

//two parameters
// const hel = function (name, age) {
//     console.log(`Person details ${name} ${age}`)
// }

// hel();//Person details undefined undefined
// hel("kroner",45);//Person details kroner 45
// console.log(hel("peter", 34));

//3 parameters
// let threeParams = function (firstName, lastName, age, placeOfBirth, country) {
//     console.log(`my full details ${firstName} ${lastName} ${age} ${placeOfBirth} ${country}`);
// }

// threeParams();//my full details undefined undefined
// threeParams("Tony","Poo", 34, "Somewhere", "Earth");//my full details Tony Poo 34 Somewhere Earth
// console.log()

//return for calculation when we want to return something
// function cal(x,y) {
//     return x * y;
// }
// console.log(cal(3,4));

// let name = function(x,y) {
//     // return x + y;
//     console.log("total of x,y")
//     return x+y
// }
// name();
// console.log(name(3,5));
//total of x,y
//8

///////////////////////
//Arrow function this keyword
// const emma = {
//     firstName:"emma",
//     lastName:"tum",
//     sayName: function () {
//        console.log(this);
//         setTimeout(()=> {
//             console.log(this);
//             console.log(`hello, my name ${this.firstName} ${this.lastName}`);
//             console.log("welcome")
//         }, 1000);
//         },
//     }


// console.log(emma);//{firstName: 'emma', lastName: 'tum', sayName: ƒ}
// console.log(emma.sayName);//ƒ () { console.log(this); }
// emma.sayName();

//output
// {firstName: 'emma', lastName: 'tum', sayName: ƒ}
//{firstName: "emma"lastName: "tum"sayName: ƒ} 
// sample.js:360 hello, my name emma tum
// sample.js:361 welcome

// const harry = {
//   firstName:"har",
//   lastName:"potter",
//   sayName:() =>{
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// // harry;//no output
// // console.log(harry); //{firstName: 'har', lastName: 'potter', sayName: ƒ}
// harry.sayName();// Hello, my name is undefined undefined
// console.log(harry.firstName);
// console.log(harry.lastName);

/////////////////////////////////
// default parameters, arrow function gotchas, defualt parameter hositing

// const emma = 'emma';
// const harry = 'harry';

// function sayHi(person = 'Susan') {
//   console.log(`Hi ${person}`);
// }
// const sayHello = (person = 'EMMA') => console.log(`Hello ${person}`);

// sayHi();//hi susan
// sayHello();//hello emma
// sayHi(emma);//Hi emma
// sayHello(harry);//Hello harry

/////////////////////////////////////
//array destructuring
//Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

// const fruits = ['orange', 'banana', 'lemon'];
// const friends = ['emma', 'watson', 'harry', 'daniel', 'venne'];

// console.log(fruits);
// console.log(friends);

// const [emma,watson,harry,daniel,venne] =friends;
// console.log(emma);//emma
// console.log(harry);//harry
// console.log(Venee); //Venee is not defined

// var thing = ["table","chair","tent"];
// var[a,b,c]=thing;
// console.log(a);//table
// console.log(b);//chair
// console.log(c);//tent
// console.log(a,b,c);//table chair tent

// Declaration and assignment can done seperately in array
// var first, second;
// [first,second]=["a","b"];
// console.log(first); //a
// console.log(second);//b

//If given value is not in the array it will show undefined
// let name =['a','b','c'];
// console.log(name);
// let [p,q,r,s]=name;
// console.log(p);//a
// console.log(s);//undefined

//DESTRUcture return arrays
// function runners () {
//     return ['apple','ball','call'];
// }
// runners();// no output
// console.log(runners());//(3) ['a', 'b', 'c']
// var[p,q,r]=runners();
// console.log(p);//apple
// console.log(q);
// console.log(r);

// [a=40, b=20] =[1,3];
// console.log(a);//1
// console.log(b);//3

// var [firstName="some", lastName="place"] = ["krish", "tony"];
// console.log(firstName);
// console.log(lastName);

// var [firstNam="some", lastNam="place"] = [];
// console.log(firstNam); //some
// console.log(lastNam); //place

// var[firstNa="generate",lastNa="pub"] =["","welcome"];
// console.log(firstNa);//empty
// console.log(lastNa);//welcome

//ignoring values
// var a, b;
// [a, , b]= ['loea',"pem","qen"];
// console.log(a); //loea
// console.log(b);//qen
// console.log(c);//c is not defined


//The Rest Parameter And Spread Syntax used for destructurung
// if ... on left side then rest parameter
//rest parameter is used to map all the remaining elements in the array, that have not been mapped to the rest variable it self
//it like gathering what is left behind, it must always be the last

// var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
// var [first, ,third, ...others] = planets;
// console.log(first); //mercury
// console.log(others); //['Mars', 'Pluto', 'Saturn']

// if ... appear on the right side then spread operator
// It takes all the other elements in the array which have no variable mapped to them and then maps it to the rest variable
// var places =["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
// var some = ["names","sum", ...places];
// console.log(some);

//nested array destructuring
// var numbers = [8,9,[1,2,3,4],4,5,53];
// console.log(numbers);
// //(5) [8, 9, Array(4), 4, 5]
// var[a,b,[d,f,g],p]=numbers;
// console.log(a);//8
// console.log(d);//1
// console.log(g);//3
// console.log(p);//4

//Multiple Array Destructuring
// var places = ["first", "second", "third", "fourth"];
// var [a,b, ,d] =[f, ...rest] =places;
// console.log(a);//first
// console.log(d);//fourth
// console.log(f);//first

/////////////////
//swap variables
// let first = 'emma';
// let second = 'harry';

// console.log(first, second); //emma harry

// first = 'harrry'
// second = 'emma';
// console.log(first, second); //harry emma

// let temp = second;
//  second = first;
// first = temp;
// console.log(first,second);//emma harry
// console.log(temp);//emma

// const newArr = [first, second];
// console.log(newArr);//['emma','harry']

// let [one, two] = newArr;
// console.log(one, two);//emma harry
//  [second, first] = [first, second];
// console.log(first, second);//harry emma

//////////////////////////////
//object destrucutring
// const emma ={
//     first: 'emma',
//     last: 'sanders',
//     city:'chicago',
//     siblings: {
//         sister:'jane',
//         father:"zenrs",
//     },
// };

// const {first, last, city,sibilings} =emma;
// console.log(first, last, city);//emma sanders chicago
// console.log(emma.siblings);//{sister: 'jane', father: 'zenrs'}
// console.log(emma.siblings.sister);//jane
// console.log(emma.siblings.father);//zenrs

// const emma = {
//     first: 'emma',
//     last: 'watson',
//     city: 'london',
//     siblings: {
//       sister: 'hermoine',
//     },
//   };

//   function printPerson({first,last,city}) {
//     console.log(first,last,city);
//   }
// printPerson(emma); //emma watson london
// printPerson(name);//undefined

// new string methods
// startsWith(), endsWith(), includes(),repeat()

// const person = 'Emma Watson';
// const employee = '23456-EMP-EMMA-SMITH';
// const manager = '23456-MAN-HARRY-DOE';
// // starts width
// console.log(person.startsWith('Emm'));//true
// console.log(person.startsWith('emma'));//true

// // ends width
// console.log(employee.startsWith('EMP', 6)); //true
// console.log(manager.endsWith('DOE'));//true
// console.log(manager.endsWith('MAN', 9));//TRUE
// // includes
// console.log(manager.includes('MAN'));//TRUE
// console.log(manager.includes('mAN'));//FLASE

// const multiplyPeople = (person, amount) => person.repeat(amount);

// // repeat
// const people = multiplyPeople(person, 10);
// console.log(people);
// Emma WatsonEmma WatsonEmma WatsonEmma WatsonEmma WatsonEmma WatsonEmma WatsonEmma WatsonEmma WatsonEmma Watson
///////////////////////////////////////////////////////
//for of loops- loops through values of an iterable obj
// String, Array,Map,Set etc  - NOT OBJECT

// const fruits = ['apple', 'orange', 'banana', 'peach'];
// const longName = 'Emma watson harry potter';
// let shortName = '';

// for (const letter of longName) {
//     if(letter === ' ') {
//         continue;
//     }else{
//         shortName += letter;
//     }
//     }
// console.log(shortName);

// for (const fruit of fruits) {
//     if (fruit === 'banana') {
//       // break;
//       continue;
//     }
//     console.log(fruit);
//   }

////////////////////
//spread operator
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.

// const udemy = 'udemy';
// const letters = [...udemy];
// console.log(letters);//(5) ['u', 'd', 'e', 'm', 'y']

// const boys = ['srikanth', 'daniel', 'harry'];
// const girls = ['emma', 'watson'];
// const bestFriend = 'hermoine';

// const friends = [...boys, bestFriend, girls];
// console.log(friends);
// (5) ['srikanth', 'daniel', 'harry', 'hermoine', Array(2)]

// const person = {
//     name:'emma',
//     job:'actor'
// };
// const newPerson = {
//     ...person,
//     city:'some',
//     place:'que',
// };
// console.log(person);//{name: 'emma', job: 'actor'}
// console.log(newPerson);//{name: 'emma', job: 'actor', city: 'some', place: 'que'}

// const headings = document.querySelectorAll('h1');
// const result = document.getElementById('result');
// const text = [...headings]
//   .map(item => `<span>${item.textContent}</span>`)
//   .join('');
// console.log(text);

// result.innerHTML = text;

// const numbers = [23,45,34,2,343,434];
// console.log(Math.max(...numbers));//434
// console.log(Math.min(...numbers));//2

// const emma = ['emma', 'watson'];
// const sayHello =(name, lastName) => {
//     console.log(`hello ${name} ${lastName}`);
// }
// sayHello(emma);//hello emma,watson undefined
// sayHello(...emma);//hello emma watson

//rest operator
//gathers/collects the items

//arrays
// const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
// const [first, second, ...fruits] = fruit;
// console.log(first);//apple
// console.log(second);//orange
// console.log(fruits);//(3) ['lemon', 'banana', 'pear']

// Array.from and Array.of - NOT ON THE PROTOTYPE
// Array.from
// Array.of
// of creates a new Array instance from a variable number of arguments.

// const example = ['one', 'two', 'three'];
// console.log(example);//(3) ['one', 'two', 'three']
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

// const friends = Array.of('emma', 2, true);
// console.log(friends);


/////////////////////////////////


// Array.from and Array.of - NOT ON THE PROTOTYPE

// from - returns Array Object from any object with a length property or an iterable object
// from turns array-like/ish into array - string,nodeList,Set

const youtube = 'youtube';
console.log(Array.from(youtube));
// ['y', 'o', 'u', 't', 'u', 'b', 'e']


function countTotal() {
    // console.log(arguments);
    let total = Array.from(arguments).reduce(
      (total, currNum) => (total += currNum),
      0
    );
    console.log(total);
  }
  
  countTotal(67, 89, 54, 100);






  





































































































































































































































































// //////
// // adding queryselector event listener
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () =>console.log("hi"));










































