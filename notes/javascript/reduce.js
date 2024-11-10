// Example 1
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

// Option 1: Regular function
function sum(accumulator, nextElement){
    return accumulator + nextElement;
}

// Option 2: arrow function
// const total = prices.reduce((accumulator, nextElement) => accumulator + nextElement);

// Option 3: anonymous function
// const total = prices.reduce(function (accumulator, nextElement){
// 	return accumulator + nextElement
// 	});

console.log(`$${total}`)


// callback | return | notes
// sum(5, 30) = 35 ->  goes to accumulator
// sum(35, 10) = 45 ->  goes to accumulator
// sum(45, 25) = 70 -> goes to accumulator
// so on and so forth, loop through all the elements in prices

////////////////////////////////////////////////////////////
// Example 2
const grades = [75, 50 ,90, 80, 65, 95];
const maxGrade = grades.reduce(getMax);
const minGrade = grades.reduce(getMin);

function getMax(accumulator, nextElement){
    return nextElement > accumulator ? nextElement : accumulator;
}

function getMin(accumulator, nextElement){
    return nextElement < accumulator ? nextElement : accumulator;
}

console.log(`Max Grade: ${maxGrade}`);
console.log(`Min Grade: ${minGrade}`);
// grades.redice(getMax) -> getMax is the callback function
// getMax(75, 50) = 75 -> goes to accumulator
// getMax(75, 90) = 90 -> goes to accumulator
// getMax(90, 80) = 90 -> goes to accumulator
// so on and so forth, loop through all the elements in getMax




////////////////////////////////////////////////////////////////////////
// Sum!
const numbers = [10, 40, 2, 5, 8];
const totalNumber = numbers.reduce((accumulator, nextElement) => {
    return accumulator + nextElement;
})

console.log(`Total Number: ${totalNumber}`);



// Multiply All!
const dimension = [10, 30, 2];
const volume = dimension.reduce((accumulator, nextElement) => {
    return accumulator * nextElement;
})

console.log(`Volume: ${volume}`);

// Only one element in the array
const oneElement = [10];
const oneAndOnly = oneElement.reduce((accumulator, nextElement) => {
    return accumulator + nextElement;
})

console.log(oneAndOnly)