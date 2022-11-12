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
// Info

// Testing

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing
