const minimumSwaps = (arr)=>{
  let count = 0;
    for(let i=0; i < arr.length; ++i){
        while(arr[i] != i+1) {
            let temp = arr[i];
            arr[i] = arr[temp-1];
            arr[temp-1] = temp;  
            count ++;
        }
    }
    return count;
}

let arr =  [7, 1, 3, 2, 4, 5, 6];
minimumSwaps(arr)


