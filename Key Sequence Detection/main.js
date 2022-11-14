let press = []
const code = "boca"


window.addEventListener('keyup', (event) => {
    console.log(event.key)
    press.push(event.key)
    press.splice(-code.length-1, press.length-code.length)
    console.log(press)
})

