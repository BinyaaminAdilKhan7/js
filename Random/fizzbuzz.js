var output=[]

function fizzbuzz(){
    for (count = 1; count<=100 ; count++){
        if (count % 3 === 0 && count % 5 === 0){
         output.push("fizzbuzz")
        }
        else if (count % 3 === 0){
            output.push("fizz")
        }
        else if (count % 5 === 0 ){
            output.push("buzz")
        }
        else {
            output.push(count)
        }
    } 
}
fizzbuzz();
console.log(output);
