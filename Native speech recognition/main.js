window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//It is a global variable that lives on the browser

const recognition = new SpeechRecognition();
recognition.interimResults = true; //to put the results in the middle of hearing it.
recognition.lang = 'es-AR';
//it updates the paragraph and then creates a new one when stops hearing.

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);



recognition.addEventListener('result', e => {
    //console.log(e.results) 
    /*It has SpeechRecognitionResult and inside it, 
    SpeechRecognitionAlternative, which has the transcript 
    and the confidence. It also has the isFinal variable, 
    to determine if the person stopped talking.*/
    let transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p)
    }

    console.log(transcript)
})

recognition.addEventListener('end', recognition.start)
recognition.start()