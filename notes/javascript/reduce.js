// Example 1
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total}`)

function sum(accumulator, nextElement){
    return accumulator + nextElement;
}

// callback | return | notes
// sum(5, 30) = 35 ->  goes to accumulator
// sum(35, 10) = 45 ->  goes to accumulator
// sum(45, 25) = 70 -> goes to accumulator
// so on and so forth, loop through all the elements in prices


// Example 2
const grades = [75, 50 ,90, 80, 65, 95];
const maxGrade = grades.reduce(getMax);
const minGrade = grades.reduce(getMin);

console.log(maxGrade);
console.log(minGrade)

function getMax(accumulator, nextElement){
    return nextElement > accumulator ? nextElement : accumulator;
}

// grades.redice(getMax) -> getMax is the callback function
// getMax(75, 50) = 75 -> goes to accumulator
// getMax(75, 90) = 90 -> goes to accumulator
// getMax(90, 80) = 90 -> goes to accumulator
// so on and so forth, loop through all the elements in getMax


function getMin(accumulator, nextElement){
    return nextElement < accumulator ? nextElement : accumulator;
}