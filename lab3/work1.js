function operations(arr) {
    let sum = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let modifiedSum = 0;
    let modifiedSum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 2 === 0) {
            modifiedSum = arr[i] + i;
            sum4 += modifiedSum;
            arr[i] = modifiedSum;
        } else {
            modifiedSum2 = arr[i] - i;
            sum3 += modifiedSum2;
            arr[i] = modifiedSum2;
        }

        sum2 = sum4 + sum3;
    }

    console.log("Обновленный массив:", arr);
    console.log("Сумма всех элементов массива:", sum);
    console.log("Сумма элементов массива, с учетом условий:", sum2);
}

operations([5, 15, 23, 56, 35]);
