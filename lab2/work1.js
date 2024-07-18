function sumNum(num){
    var numStr = num.toString();
    var sum = 0;
    for(var i = 0; i < numStr.length; i++){
        sum += parseInt(numStr[i])
    }
    return sum

}
console.log(sumNum(245678));