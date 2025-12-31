// function MyName(){
//     console.log("B");
//     console.log("I");
//     console.log("N");
//     console.log("Y");
//     console.log("A");
//     console.log("A");
//     console.log("M");
//     console.log("I");
//     console.log("N");
// }
// MyName()

function addnumbers(number1,number2){
    //  let result= number1 + number2
    //  return result
      
    return number1 + number2 
}
const result= addnumbers(10,15)
// console.log("Result:",result);



// addnumbers(5,10)
// addnumbers(5,"10")
// addnumbers(5,null)

 function loginUserMessage (username ="sam") {            // no chance of being undefined 
    if(!username){                                  // if(username === undefined)
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in `
 }
// console.log(loginUserMessage("Binyaamin"))
// console.log(loginUserMessage())                      // value in the paranthesis will overwrite the value "sam"

// function calculatecartprice(...num1){
 function calculatecartprice(val1,val2,...num1) {  // val1 takes 200,val2 takes 500 
return num1
}
// console.log(calculatecartprice(200,500,700))

const user ={
    username:"Binyaamin Adil Khan",
     price:199
}
function handleobject(anyobject){
 console.log(`username is,${anyobject.username} and price is ${anyobject.price}`)
}
// handleobject(user)
 handleobject({
    username:"Sam",
    price: 399 
 })

 const myNewArr = [200,250,370]
 function returnSecondValue(getArray){
    return getArray[2]
 }
//  console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,250,300,450]));