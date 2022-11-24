window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//It is a global variable that lives on the browser

const recognition = new SpeechRecognition();
recongnition.interimResults = true; //to put the results in the middle of hearing it.

//it updates the paragraph and then creates a new one when stops hearing.

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);


recongnition.addEventListener('results', e => {
    console.log(e)
})