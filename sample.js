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

let person1 = {name: 'bob'};
person1.name = 'sam';
console.log(person1);
const per = {na:'re'};
per.na ='vin';
per.na="pin";
console.log(per);
// let person1 = {name:'kri'};
// person1.name ='emma';
// console.log(person1.name);
























