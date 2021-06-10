let arr = [8, 3, 5, 2, 7, 0, 1, 4, 87, 32, 123, 1, 12, 0];



function selectionSort(arr){


    for(let i=0;i<arr.length;i++){

        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let x=arr[j];
                arr[j]=arr[i];
                arr[i]=x;
            }
        }
    }
    return arr;
}

console.log(selectionSort(arr))