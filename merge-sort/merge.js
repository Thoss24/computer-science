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

    while (left < leftArr.length && right < rightArr.length){
        if (leftArr[left] < rightArr[right]) {
            sorted.push(leftArr[left])
            left++
        } else {
            sorted.push(rightArr[right])
            right++
        }
    }

    while (left < leftArr.length) {
        sorted.push(leftArr[left])
        left++
    }

    while (right < rightArr.length) {
        sorted.push(rightArr[right])
        right++
    }

    return sorted
}

function fibonacci(n) {
    return (n === 1) ? [0] : (n === 2) ? [0, 1] : [...fibonacci(n - 1), fibonacci(n - 1)[n - 2] + fibonacci(n - 2)[n - 3]]
}


console.log(fibonacci(8))

console.log(merge([1, 3, 2, 5, 6, 8, 7, 4]))