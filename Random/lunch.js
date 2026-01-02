function whosbuyinglunch(){
    let Names = ["Binyaamin","Faisal","Rayan","Idrees","Umar"];
    let randomIndex = Math.floor(Math.random() * Names.length);
    let Randomname =Names[randomIndex];
   return Randomname +  " is going to buy Lunch Next time !!!!!!!!!"

}
console.log(whosbuyinglunch());