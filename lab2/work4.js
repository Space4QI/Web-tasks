function calculator(firstNum, operator, secondNum)
{
    switch (operator)
    {
        case '+':
            return (firstNum + secondNum).toFixed(2);
        case '-':
            return (firstNum - secondNum).toFixed(2);
        case '*':
            return (firstNum * secondNum).toFixed(2);
        case '/':
            return (firstNum / secondNum).toFixed(2);
        default:
            return "Такого оператора нет";
    }
}
console.log(calculator(25.5, '-', 3));
