// syntax 
// setTimeout(function() {},
// delay, arg1, arg2, ...)
// function → code to execute
// delay → time in milliseconds (1000 ms = 1 second)


// function x (){
//     var name ="Binyaamin Adil Khan";
//     setTimeout(function(){
// console.log("Hello " + name);
// }, 2) ;
    
//     setTimeout(function(){
//         console.log("Welcome to console")
//     },1);
// }
// // // x()
// function x (){
//     for (var i = 1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i  *1000)
//     }
// }          
// x() // change var to let 


// USE LET

// function x (){
//     for (let i = 1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i  *1000)
//     }
// }
// x() 
// with VAR 

// function x(){
//    for (let i=1;i<=5;i++){
//       function close(){
//          setTimeout(function(){                              // Works with var this wayyyyyyyyyyyyyyyy
//             console.log(i);
//          },i *1000)
//       }
//       close()
//    }

// }
// x()


// /////////////////////////////////////////
// function outer(){
// let count = 1;
//    function inner (){
//     count ++;
//      console.log(count);
     
//    }
// return inner
// }
// let counter= outer() 

// counter ()
// counter()





// function outer() {
//   let count = 0;

//   function inner() {
//     for (let i = 1; i <= 10 ; i++) {
//       count++;
//       count;
//      setTimeout (function(){
//       console.log(i);
//      },i*1000 ) 
//     }
//   }

//   return inner;
// }

// let counter = outer();

// counter();
// // counter();
                                                   
// function outer() {
//   let count = 0;

//   function inner() {
//     for (let i = 1; i <= 10 ; i++) {
//       count++;
//       let current = count;
//      setTimeout (function(){
//       console.log(current);
//      },i*1000 ) 
//     }
//   }
//   return inner;                                             // works any wayyyyyyyyyyyyyyyyyyyyyyyyyyyyy
  
// }

// let counter = outer();

// counter();
