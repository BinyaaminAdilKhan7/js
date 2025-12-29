const marvel_heroes=["thor","ironman","Spiderman"]
const dc_heroes = ["batman","superman","spiderman"]

marvel_heroes.push(dc_heroes) //push adds the given array into another Array.
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

const All_heroes= marvel_heroes.concat(dc_heroes)// concat adds the elements in a single Array.
// console.log(All_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]  // (...)spread operator
// console.log(all_new_heroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)// flat (depth) displays all elements of depth in one single array.
// console.log(real_another_array);

// console.log(Array.isArray("Binyaamin")); //isArray checks if there is an element named Binyaamin in Array 
// console.log(Array.from("Binyaamin"));// from converts data into Array
// console.log(Array.from({name:"Binyaamin"}));// interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
// read Array.isArray/.of/.from




