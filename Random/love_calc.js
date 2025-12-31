// var n= Math.random();
// n=n*6;
// n= Math.floor(n)+1;
// console.log(n);

// function calculatelovepercentage(Person1,Person2){
// var lovepercentage = Math.random()*100;
//  lovepercentage =Math.floor(lovepercentage)+1;
// console.log(`Hey ${Person1} and ${Person2} your love Percentage is  ${lovepercentage}%`);
// }
// calculatelovepercentage("Rahul","Anjali")

var person1 ="rAHul"

var firstcharp1 = person1.slice(0,1);
var UCFC = firstcharp1.toUpperCase();
var restp1 = person1.slice(1,person1.length).toLowerCase();
var capnamep1 = UCFC+restp1;

var person2 ="anjAli"
var firstcharp2 = person2.slice(0,1);
var UCFC2 = firstcharp2.toUpperCase();
var restp2 = person2.slice(1,person2.length).toLowerCase();
var capnamep2 = UCFC2+restp2;

var love = Math.random()*100;
love= Math.floor(love)+1;
console.log(`Hey ${capnamep1} there is ${love}% chance of ${capnamep2} loving uh back!!!!!`);
