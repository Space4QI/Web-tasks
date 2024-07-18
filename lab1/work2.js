function rounding(num1, num2){
    if(num2 > 15){
        num2 = 15;
    }
    const num3 = parseFloat(num1).toFixed(num2);
    return parseFloat(num3);
}

console.log(rounding(3.1415926535897932384626433832795, 2))
console.log(rounding(10.5, 3))
