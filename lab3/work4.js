function matrix(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] !== arr[j][i]){
                console.log("Строка", i, "не равна столбцу", j);
                return;
            }
        }
    }
    console.log("true");
}


matrix([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]);
