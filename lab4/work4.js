function progressBar(num){
    if(num % 10 === 0 && num != 100){    
        console.log(num + "% "+ "[" + "%".repeat(num / 10) + ".".repeat(10 - num / 10) + "]");
        console.log("Still loading...")
    }
    else if(num === 100){
        console.log(num + "% Complete!")
        console.log("[" + "%".repeat(10) + "]");
    }
}

progressBar(20);
progressBar(100);