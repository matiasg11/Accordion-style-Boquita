

const canvas = document.querySelector('#draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

context.strokeStyle = '#B0CA00'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 150;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing){
        return   //This stops the function when the mouse is not down
    }
    console.log(e)

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    
    context.beginPath()
    //Start
    context.moveTo(lastX, lastY)
    //Finish
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke()
    lastX = e.offsetX
    lastY = e.offsetY

    //Reset color
    hue++
    if(hue >=360){
        hue = 0
    }

    if(context.lineWidth >= 20 || context.lineWidth < 1){
        direction = !direction
    }
    if (direction){
        context.lineWidth++
    } else {
        context.lineWidth--
    }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]

})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
