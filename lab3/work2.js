function elements(arr, arr2){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr[i] === arr2[j]){
                console.log(arr[i]);
            }
        }
    }
}


elements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
