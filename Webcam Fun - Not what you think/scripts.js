const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream
            // video.src = window.URL.createObjectURL(localMediaStream); //This is an object and must be turned into an URL
            video.play();
        })
        .catch(error =>{
            console.error('Ok, we will not access to your webcam.', error)
        })
}

//TAKE A FRAME OF THE VIDEO
function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;

    canvas.width = width
    canvas.height = height

    return setInterval(() => { //This return is to make it stop (clearInterval) if we want to
        ctx.drawImage(video, 0, 0, width, height)  //Take an image from the element video. Starting at 0,0 and ending at the position width, height.
        let pixels = ctx.getImageData(0,0,width,height); //Takes the pixels out
        // pixels = redEffect(pixels); //Applies redEffect
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.1

        ctx.putImageData(pixels, 0,0) //Put the pixels back
    },50)
    
}

//Take a photo with a sound
function takePhoto() {
    snap.currentTime = 0;
    snap.play()

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a') //Creates an HTML anchor element
    link.href = data;
    link.setAttribute('download', 'image');
    link.innerHTML = `<img src="${data}" alt='Download image'>`;
    strip.insertBefore(link, strip.firstChild)
    console.log(link)
}

//Filters! Take the pixels out of the canvas and apply them.
function redEffect(pixels){
    for(let i=0; i<pixels.data.length; i+=4){
        pixels.data[i]   = pixels.data[i]-50       //Red channel
        pixels.data[i+1] = pixels.data[i+1]+10      //Green channel
        pixels.data[i+2] = pixels.data[i+2]+50      //Blue channel
        pixels.data[i+3] = pixels.data[i+3]         //Alpha channel
    }
    return pixels;
}

function rgbSplit(pixels){
    for(let i=0; i<pixels.data.length; i+=4){
        pixels.data[i-350] = pixels.data[i]        //Red channel
        pixels.data[i+200] = pixels.data[i+1]      //Green channel
        pixels.data[i-350] = pixels.data[i+2]      //Blue channel
        pixels.data[i+3]   = pixels.data[i+3]      //Alpha channel
    }
    return pixels;
}

getVideo()

video.addEventListener('canplay', paintToCanvas)