let arr = [8, 3, 5, 2, 7, 0, 1, 4, 87, 32, 123, 1, 12, 0];

function merge(arr, low, mid, high) {
    let l = arr.slice(low, mid + 1)
    let r = arr.slice(mid + 1, high + 1);

    let i = 0;
    let j = 0;
    let k = low;
    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            arr[k] = l[i];
            i++;
            k++;
        } else {
            arr[k] = r[j];
            k++;
            j++;
        }
    }
    while (i < l.length) {
        arr[k] = l[i];
        i++;
        k++;
    }
    while (j < r.length) {
        arr[k] = r[j];
        k++;
        j++;
    }

}

function mergesort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let mid = parseInt(low + Number((high - low) / 2))
    mergesort(arr, low, mid);
    mergesort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}


console.log(arr)
mergesort(arr, 0, arr.length - 1)
console.log("Sorted")
console.log(arr)