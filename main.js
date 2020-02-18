
// const brother = {
//     name: "Chris",
//     age: 45,
//     location: "Florida"
// }
// const sister = {
//     name: "Emily",
//     age: 30,
//     location: "Florida"
// }
// const dad = {
//     name: "Jared",
//     age: 70,
//     location: "Alaska"
// }

// const myFamily = [brother, sister, dad]

// const targetContentElement = document.querySelector(".container")
// console.log(targetContentElement)

// for (const person of myFamily) {
//     targetContentElement.innerHTML += ` 
//     <div>
//     ${person.name} is ${person.age} and lives in ${person.location}
//     </div>
//     `
// }


//loop through the food array and put each item in the picnic picnic basket array
//console log the picnic basket
// const foods = ["peaches", "salad", "pasta", "sandwiches", "iced Tea"]

// const picnicBasket = []

// for (const foodItem of foods) {
//     picnicBasket.push(foodItem)    
// }

// console.log(picnicBasket)

// const numbers = [2,5,6,19,6,339,284,1,722]

// for (const number of numbers) {
//     if (number % 2 === 0 ) {
//         console.log("even Steven")
//     } else {
//         console.log("odd Todd")
        
//     }
    
// }

// const steve = {
//     name: "Steve",
//     phrase: "Living the dream!",
//     isSeniorDev: true
// }
// const mo = {
//     name: "Mo",
//     phrase: "Are we defining the function? Or are we invoking the function?",
//     isSeniorDev: false
// }
// const madi = {
//     name: "Madi",
//     phrase: "💣 BOOM!",
//     isSeniorDev: false
// }
// // 1. Add each intstructor into an array called 'instructorArray'

// const instructorArray = []

// instructorArray.push(madi)
// instructorArray.push(steve)
// instructorArray.push(mo)


// // Loop through the instructor array (using a For..Of Loop) and print each instructor's name to the console.

// for (const instructor of instructorArray) {
//     if (!instructor.isSeniorDev) {
//         console.log(instructor.phrase)
//     }
//     console.log(instructor.name)
    
// }

// console.log("this is the instrusctor array",instructorArray)


/*
    Let's make a sandwich!
*/
// 1. Define a function called 'makeSandwich'.
/*
    a. The function should take a cheese, a meat, and a bread as its arguments.
    b. The function will log to the console our finished sandwich: "I would like a __ and __ sandwich on __ bread!"
*/
// 2. Now invoke the function, and pass in the 3 ingredients as the parameters! See how many sandwiches you can make!

// const makeSandwich = (american, bacon, white) => {
//     console.log(`I would like to make a ${american} and ${bacon} sandwich on ${white} bread!`)
// }

// makeSandwich("american", "bacon", "white")