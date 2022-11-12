const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#B0CAAA';
  p.style.fontSize = '100px';
}

// Regular: Logs into the console
console.log('hello')  
// Interpolated: Concatenates the 2nd string in the place of the %s
console.log('Hello I am a %s string!', 'BOCAAAAA')
// Styled: First put the %c in the string to log. Then, the second parameter is CSS rules for that log.
console.log('%cIt is a text', "font-size: 40px; background:yellow; color:blue;")
// warning!: Warning message. Attention mark and yellow background
console.warn('Oh oh, there is a problem')
// Error :|: Error message. Red symbol and red background.
console.error("Houston, we have a serious problem!")
// Info: Blue info mark on the left margin.
console.info("Boca nunca descendió. Es el único equipo de la primera división que no lo hizo.")
// Testing: To compare. If it is wrong, it launches the error message. 
//This is often used in Codewars to compare results with desired outputs.
console.assert(1 === 1, "That is wrong!!")  //Returns nothing because it is true.
console.assert(1 === 2, "That is wrong!!")  //Returns error message saying:main.js:24 Assertion failed: That is wrong!! (anonymous) @ main.js:24


const p = document.querySelector('p');
console.assert(p.classList.contains('BOCA', "Error Message."))
// clearing: Clears the console. 
console.clear();
// Viewing DOM Elements: dir is used to view the properties of the element in the DOM
console.log(p) //p is the paragraph selected in the assertion bit.
console.dir(p) //It gives you the dropdown list of all the properties and methods of the element.

// Grouping together

// counting

// timing
