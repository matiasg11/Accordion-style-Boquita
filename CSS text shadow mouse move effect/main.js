//I have a div with the class .boca and an h1 inside
const boca = document.querySelector(".boca")
const text = boca.querySelector("h1")
const walk = 100 //100px it is how far the shadow moves. 50px in each direction.

function sombra(evento){
    //Height and width of the element
        // const height = boca.offsetHeight
        // const width = boca.offsetWidth
    
    const { offsetWidth: width, offsetHeight: height} = boca
    let {offsetX: x, offsetY: y} = evento

    if(this !== evento.target){
        x = x+evento.target.offsetLeft
        y = y+evento.target.offsetTop
    }
    const xWalk = Math.round((x/width*walk) - (walk/2))
    const yWalk = Math.round((y/height*walk) - (walk/2))
    console.log(xWalk, yWalk)
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(200,200,0,0.5) , ${-xWalk}px ${-yWalk}px 0 rgba(0,50,200,0.5)`
}

boca.addEventListener('mousemove', sombra)