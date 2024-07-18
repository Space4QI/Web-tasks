function divider(num1) {
    switch (true) {
        case num1 % 10 === 0:
            return "Число делится на 10";
        case num1 % 2 === 0:
            if (num1 % 3 === 0) {
                return "Число делится на 6";
            } else {
                return "Число делится на 2";
            }
        case num1 % 3 === 0:
            return "Число делится на 3";
        case num1 % 7 === 0:
            return "Число делится на 7";
        default:
            return "Не делится";
    }
}

console.log(divider(4));
console.log(divider(15)); 
console.log(divider(12)); 
console.log(divider(1643)); 
