function CalculateBmi(){
   // var Bmi= Weight/(Math.pow(Height,2));
      // Bmi = Bmi.toFixed(2)
    var Name = prompt ("What is your name?");
    var Weight = Number(prompt ("Enter your weight in kg "));
    var Height =Number (prompt (" enter your height (in meters)"));
   var Bmi= Weight/(Math.pow(Height,2));
    Bmi =Number (Bmi.toFixed(2));
   
 if(Bmi <18.5){
    alert("your Bmi is "+ Bmi+ " you are underweight.");
 }
    else if(Bmi > 18.5 && Bmi <= 24.9 ){
    return `Hey there ${Name } Your Bmi is  ${Bmi} , So you have a normal weight`;}
       else if(Bmi > 18.5 && Bmi <= 24.9  && Height < 1.7 ){
    return `Hey there ${Name } Your Bmi is  ${Bmi} , So you have a normal weight My little baddie(Monster)`;}
   else if (Bmi > 24.9){
      return `Hey there ${Name } Your Bmi is  ${Bmi}  You are overweight`;
   }
}
// alert(CalculateBmi())