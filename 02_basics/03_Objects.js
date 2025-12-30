// Objects can be declared in two ways 1. literal  2.constructor
// singleton(through constructor only)

// object literals
// object.create // for constructor 

const mysym=Symbol("key1")

const JsUser= {
    name:"Binyaamin",
    "Full Name":"Binyaamin Adil Khan",
    [mysym]: "Mykey1", //symbol should be written in square brackets in order to behave as a symbol,else is recognised as a string 
    Age :18,
    Location:"Bangalore",
     Email:{
        address:"binyaaminadilkhan@git.com",
        name:"Binyaamin"},
     isloggedin: false,
     lastloggedin: ["monday","saturday"]
    }
// console.log(JsUser.Location);
// console.log(JsUser["Full Name"]);// cant access with dot(.)
// console.log(JsUser["Email"]);   // cant access two keys at once in this  form
// console.log(JsUser[mysym]);
// console.log(JsUser.Email.name); 


JsUser.Email="Binyaamin@cgpt.com"
JsUser.greetingtwo = function(){
console.log(`Hello JS User,${this.Email}`);
}
// Object.freeze(JsUser)
JsUser.Email  ="bin@sal.com"
// console.log(JsUser);

JsUser.greeting = function () {
    // console.log("Hello Js User");
}   
JsUser.greetingtwo = function (){
    console.log(`Hello JS User,${this.Email}`);// Use Backticks 
    
    
}
// console.log(JsUser.greeting());  
console.log(JsUser.greetingtwo());



