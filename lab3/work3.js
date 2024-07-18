function spinner(arr, num){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let newIndex = (i - num) % arr.length;
        if(newIndex < 0){
            newIndex = arr.length + newIndex;
        }
        newArr[newIndex] = arr[i];
    }

    console.log(newArr);
}

spinner([2, 4, 15, 31], 5)