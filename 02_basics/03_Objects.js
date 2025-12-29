// Objects can be declared in two ways 1. literl  2.constructor
// singleton(through constructor only)

// object literals
// object.create // for constructor 

const mysym=Symbol("key1")

const JsUser= {
    name:"Binyaamin",
    "Full Name":"Binyaamin Adil Khan",
    [mysym]: "Mykey1", //symbol should be written in square brackets in order to behaave as a symbol
    Age :18,
    Location:"Bangalore",
     Email:"binyaaminadilkhan@git.com",
     isloggedin: false,
     lastloggedin: ["monday","saturday"]
    }
// console.log(JsUser.Location);
// console.log(JsUser["Full Name"]);// cant access with dot(.)
// console.log(JsUser["Email"]);
// console.log(JsUser[mysym]);

JsUser.Email="Binyaamin@cgpt.com"
// Object.freeze(JsUser)
JsUser.Email  ="bin@sal.com"
// console.log(JsUser);

JsUser.greeting = function () {
    // console.log("Hello Js User");
}   
JsUser.greetingtwo = function (){
    // console.log(`Hello JS User,${this.name}`);// Use Backticks 
    
    
}
// console.log(JsUser.greeting());  
// console.log(JsUser.greetingtwo());



