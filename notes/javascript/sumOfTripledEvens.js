// function sumOfTripledEvens(arr) {
//     arr = arr.filter((ele) => {
//         return ele % 2 === 0;
//     });
//     console.log(arr)
    
//     arr = arr.reduce((acc, cur) => {
//         return acc + cur * 3
//     }, 0);
//     console.log(arr)
// }

function sumOfTripledEvens(arr) {
    return arr
        .filter((e) => e % 2 ===0 )
        .map((e) => e * 3)
        .reduce((a, c) => a + c)
}

const arr = [1,2,3,4,5,6,8]


console.log(sumOfTripledEvens(arr))