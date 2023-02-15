// pseudocode

// if n < 2 return
// else
// sort left half of elements 
// sort right half of elements 
// merge sorted halves

function merge(arr) {
    if (arr.length === 1) return arr

    let half = Math.floor(arr.length / 2)

    let left = arr.slice(0, half)

    let right = arr.slice(half, arr.length)

    return mergeArrays(merge(left), merge(right))
}


function mergeArrays(leftArr, rightArr) {

    let sorted = []

    let left = 0
    let right = 0

    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            sorted.push(leftArr[left])
            left ++
            // if the element in the left array is les than that of the right array push element in left array to sorted array and increment our counter to test next element in array
        } else {
            sorted.push(rightArr[right])
            right ++
            // else if element in right arr is less than element in left array do the same for that element
        }
    }

    while (left < leftArr.length) {
        sorted.push(leftArr[left])
        console.log(leftArr[left])
        left ++
    }

    while (right < rightArr.length) {
        sorted.push(rightArr[right])
        console.log(rightArr[right])
        right ++
    }

    return sorted
}


console.log(merge([1, 3, 2, 5, 6, 8, 7, 4]))