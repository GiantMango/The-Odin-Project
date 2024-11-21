function addOne(num) {
    return num + 1;
}

let arr = [1, 2, 3, 4, 5];

console.log("for each")
arr.forEach(addOne)
console.log(arr)

let arr2 = arr.forEach(addOne)
console.log(arr2)

console.log("map")
arr.map(addOne)
console.log(arr)

let arr3 = arr.map(addOne)
console.log(arr3)