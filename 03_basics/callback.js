/* What is a callback function?
A call back funtion is a function as an argument passed into another function and executed later,
usually after an operation completes  */

/*
function x(y,z){
  console.log("Hello");
  y();
  z();
}

x(function y(){
  console.log("Goodye");
},
  function z(){
  console.log("see you");
})
*/
//////////////////////////

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });


/////////////////////////////

// function greet(name,x,y,z){
//   console.log("hey there " + name);
//   setTimeout(() =>{
//      x(); 
//   },1000)
//   setTimeout(() =>{
//      y(); 
//   },2000)
//   setTimeout(() =>{
//      z(); 
//   },3000)
  
// }
// function convey (){
// console.log("Mr.Hamid wishes to see you");

// }
// function sayBye(){
//   console.log("Goodbye!!!!!!!!!!!!!");
  
// }
// function cu(){
//   console.log("it was nice meeting uhh ,See you Soon");
  
// }
// greet("Binyaamin",convey,sayBye,cu)







// function greet(name, callback1,callback2,callback3) {
//   console.log("Hello " + name);
//   callback1();
//   callback2();
//   callback3();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }
// function convey(){
//     console.log("Mr Smith said that he loved meeting you");
    
// }
// function cu(){
//     console.log("I hope to see you soon");
    
// }
// greet("Ali", convey,cu,sayBye);








function calculate(a,b,operation){
return operation(a,b)
}
function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function remainder(a,b){
  return a%b;
}
console.log(calculate(7,9,subtract));

// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {
//   return x + y;
// }
// function subtract(x,y){
//   return x-y;
// }
// function multiply(x,y){
//   return x*y;
// }
// function divide(x,y){
//   return x/y;
// }
// function remainder(x,y){
//   return x%y;
// }
// console.log(calculate(25, 10, remainder));
