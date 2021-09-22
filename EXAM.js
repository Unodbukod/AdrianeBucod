let array = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

function bubblesort(array) {
    let length = array.length 

    for (let i = 0; i < length; i++) {
        for (let j = 0; i < length; j++) {
        if (array[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    console.log('iteration ${i + 1):', array)
}

return array
}
console.log(bubblesort(array));