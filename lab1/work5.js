function year(num1){
    if (num1 % 400 == 0 || (num1 % 4 == 0 || num1 % 10/0 != 0)){
        return "yes";
    } else {
        return "no";
    }
}

console.log(year(2004));
