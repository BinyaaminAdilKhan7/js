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

var person1 ="" 

var firstcharp1 = person1.slice(0,1);
var UCFC = firstcharp1.toUpperCase();
var restp1 = person1.slice(1,person1.length).toLowerCase();
var capnamep1 = UCFC+restp1;

var person2 =""
var firstcharp2 = person2.slice(0,1);
var UCFC2 = firstcharp2.toUpperCase();
var restp2 = person2.slice(1,person2.length).toLowerCase();
var capnamep2 = UCFC2+restp2;

var love = Math.random()*100;
love= Math.floor(love)+1;
if(love>=90){
    console.log(`Hey ${person1} Your love score with ${person2} is ${love}% Amazing 💖 Soulmates! A perfect match!`);    
} else if (love >= 75) {
    console.log(`Hey ${person1} Your love score with ${person2} is ${love}% 😍 Strong connection, lots of love!`);
  } else if (love>= 50) {
   console.log(`Hey ${person1} Your love score with ${person2}  is ${love}% 😊 Good chemistry, worth trying!`);
  } else if (love >= 30) {
   console.log(`Hey ${person1} Your love score with ${person2}  is ${love}% 😐 Could work, needs effort!`);
  } else {
   console.log(`Hey ${person1} Your love score with ${person2} is ${love}% 💔 Maybe just friends!`);
  }


// console.log(`Hey ${capnamep1} there is ${love}% chance of ${capnamep2} loving uh back!!!!!`);
