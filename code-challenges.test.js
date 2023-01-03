// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Inputs: array of Objects
// Output: undefined
// Parameters: variable object

// a) Create a test with an expect statement using the variable provided.

// describe("capitalizer", () => {
//   it("returns an array with a sentence about each person with their name capitalized", () => {

//   const people = [
//     { name: "ford prefect", occupation: "a hitchhiker" },
//     { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//     { name: "arthur dent", occupation: "a radio employee" }
//   ]
//     expect(capitalizer()).toEqual('["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]')
//      })
//    })

// const capitalizer = (obj) => {
//   // takes in an object and iterate over each value
//   return Object.name(n).splice(0, 1).toupperCase().join(" ")
//   // values at the first index should be captilalized and joined.
// }

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Inputs: array 
// Output: undefined
// Parameters: array of mixed data

// a) Create a test with an expect statement using the variables provided.

//  describe("mxdtrtn", () => {
//    it("returns a generic greeting", () => {

//   const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//   // Expected output: [ 2, 0, -1, 0 ]
//   const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//   // Expected output: [ 2, 1, -1 ]

//      expect(mxdtrtn(hodgepodge1)).toEqual("[ 2, 0, -1, 0 ]")
//    })
//  })

// // b) Create the function that makes the test pass.

// const mxdtrtn = (arr, n) => {
//   // Find remainder of sum when divided by 3
//   let remainder = 0
//   for (i = 0; i < n; i++)
//   return remainder = (remainder + arr[1]) % 3 
// }

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Inputs: array with numbers
// Output: undefined
// Parameters: variable store array of numbers

// a) Create a test with an expect statement using the variables provided.
// describe("numCubed", () => {

//   const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
//   const cubeAndSum2 = [0, 5, 10]
// // Expected output: 1125
//   it("returns the sum of all the numbers cubed.", () => {
//     expect(numCubed(cubeAndSum1)).toEqual("99")
//   })
// })
// Create a function that takes in an array of numbers
// Initalize sum variable to store results
//   let sum = 0
//   // Create a for loop for iterate each number, add each then cube
//   for (let i = 0; i <= n; i++) {
//     sum += i ** 3
//   }
//   // return result
//   return sum
// }

// b) Create the function that makes the test pass.
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

 // Note: will continue to work on, to improve knowledge of javascript, with javascript exercises 