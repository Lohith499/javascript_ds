let arr=[7,2,5,4,3];
function swap(arr,i,j){
    let x=arr[j];
    arr[j]=arr[i];
    arr[i]=x;
}
function partition(arr,low,high){
    let pivot=arr[high];
   // console.log("pivot="+pivot+" low="+low+" high="+high)
    let i=low;
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            swap(arr,i,j);
            i++;
        }
    }
    swap(arr,i,high)
    return i;
}


function quicksort(arr,low,high){

    if(low<high){
        let pi=partition(arr,low,high)
        //console.log("pi="+pi)
        //console.log(arr)
        quicksort(arr,low,pi-1)
        quicksort(arr,pi+1,high)
    }
    return arr
}
console.log(arr)
arr=quicksort(arr,0,arr.length-1)
console.log(arr)



//alogirthm
/*
algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p - 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo
    for j := lo to hi do
        if A[j] < pivot then
            swap A[i] with A[j]
            i := i + 1
    swap A[i] with A[hi]
    return i

*/