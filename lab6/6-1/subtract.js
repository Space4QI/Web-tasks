function subtract() {
    var firstNumberValue = parseFloat(document.getElementById("firstNumber").value);
    var secondNumberValue = parseFloat(document.getElementById("secondNumber").value);

    if (!isNaN(firstNumberValue) && !isNaN(secondNumberValue)) {
        var result = firstNumberValue - secondNumberValue;
        document.getElementById("result").textContent = result;
    } else {
        document.getElementById("result").textContent = "Ошибка: введите числа";
    }
}
