let numberofbottles = 99

while (numberofbottles >=1 && numberofbottles === 0){
    var bottleword = "bottles" ;
    if(numberofbottles === 1) {
    var bottleword ="bottle";
    }
    console.log(numberofbottles +" "+  bottleword + " of beer on the wall,");
    console.log( numberofbottles +" "+ bottleword + " of beer." );
    console.log("Take one down,Pass it around.");
    numberofbottles--;
    console.log(numberofbottles + " " + bottleword + " of beer on the wall.");
}