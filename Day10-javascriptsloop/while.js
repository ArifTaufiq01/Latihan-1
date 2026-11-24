let i = 1;

while(i<=30){
    if (i%3 === 0 && i%5 === 0){
        console.log("Fizzbuzz");
    }
    else if (i%3===0){
        console.log("fizzC");
    }
    else if (i%5===0){
        console.log ("Buzz");
    }
    else{
        console.log(i)
    }
    i++;
}