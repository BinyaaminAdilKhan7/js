// var c = 300
let a = 300

if (true) {
  let a = 10
  const b = 20
//   console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username ="Binyaamin"

    function two () {
    const website = "Youtube"
    // console.log(username);
    // console.log(website);
    
    }
    // console.log(website); Will throw error
    
    two() // program wont be executed if 'two()' is not called.
}
one()

if (true) {
    const username ="Binyaamin"
    if (username=== "Binyaamin"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

//++++++++++++++Interestin++++++++++++++++++//
addone(7)                  //'addone()'can be declared b4 the function
function addone(num){
  return num+1                                   // BASIC FUNCTION
}
addone(7) 
////////////////////////////////////////
const addtwo = function(num){
    return num + 2
}                                                // FUCTION EXPRESSIONS
addtwo(5)     //'addtwo()' cannot be declared before initialisation !!!!!!!!!