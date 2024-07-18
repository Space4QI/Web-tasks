function matrix(n){
    const arr = []
    for(let i = 0;i < n;i++){
        arr[i] = [];
        for(let j = 0;j < n;j++){       
            arr[i][j] = n;
        }
    }

    for(let i = 0;i < n;i++){
        for(let j = 0;j < n;j++){       
            console.log(arr[i][j]);
        }
    }    
}

matrix(4);