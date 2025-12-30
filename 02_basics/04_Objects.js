// singleton or constructor 
// const tinderUser = new Object()// singleton object
const tinderUser = {}// non-singleton object
tinderUser.id= "123abc"
tinderUser.name="Sam"
tinderUser.isLoggedin= false
// console.log(tinderUser);
const regularUser ={
  email:"sam@gmail.com",   
  fullname:{
    userfullname: {
        firstname:"Binyaamin",
        lastname:"khan"
    }
  }
}
// console.log(regularUser.fullname.userfullname.firstname/.lastname); //object in object

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={obj1,obj2}                               // Not recommended(Problematic)
// const obj3 =Object.assign({},obj1,obj2,obj4)        //Recommended.//{} is an optional parameter , becomes a target 
const obj3={...obj1,...obj2,...obj4}               //Recommended.

// console.log(obj3);

// from database
const users =[
    {
        id:1,
        email:"b@gmail.com"    
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"sal@gmail.com"
    }
]
// console.log(users[2].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//interesting.IMPORTANT
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedin'));

// DE-STRUCTURE 

const course={
    coursename:"Js_hindi",
    coursePrice:999 +"RS",
    courseInstructor:"Hitesh",
}
// course.courseInstructor // Not Recommended.

const {courseInstructor: Instructor,coursePrice,coursename} = course
// console.log(courseInstructor,coursePrice,coursename);
// console.log(Object.keys(course));
// console.log(Object.values(course));
// console.log(Object.entries(course));
// console.log(Instructor);



// API     (Basics)
"Application programming Interfaces"

{'Imagine you’re at a restaurant';

'You = the app / user'

'Menu = the API'

'Kitchen = the server / database'

'You don’t go into the kitchen yourself.'
'You order from the menu, and the kitchen sends food back.'

'➡️ The menu is the API'
}

// Json

// {
//     "name":"hitesh",
//     "coursename":"JS in Hindi",   //API in Object form.
//     "Price":"free"
// }

[
    {

    },
    {
                                                 
    },
                   //objects in Array(API in Array Form . )
    {

    }
]




