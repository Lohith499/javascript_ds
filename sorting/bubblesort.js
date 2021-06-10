let arr = [8, 3, 5, 2, 7, 0, 1, 4, 87, 32, 123, 1, 12, 0];



function bubbleSort(arr){

    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let x=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=x;
            }
        }
    }
    return arr;
}


console.log(arr)
arr=bubbleSort(arr);
console.log(arr)