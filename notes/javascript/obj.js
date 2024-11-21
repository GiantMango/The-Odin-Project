// https://javascript.info/object#tasks

// Task 2
// function isEmpty(obj) {
//     for (let key in obj) {
//         console.log(key)
//         return false
//     }  
//     return true
// }

// let schedule = {};
// console.log(schedule.key)

// console.log(isEmpty(schedule))

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule))

// Task 3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let salaries = {}

// function sum(obj) {
//     let sumNum = 0
    
//     for (let key in obj) {
//         sumNum += obj[key]
//     }
//     return sumNum

// }

// console.log(sum(salaries))


// Task 3
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu);

console.log(menu)

function multiplyNumeric(obj) {
    for (let num in obj) {
        if (typeof obj[num] === 'number') {
            obj[num] *= 2;
        }
        
    }
}