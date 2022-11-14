let press = []
const code = "boca"


window.addEventListener('keyup', (event) => {
    console.log(event.key)
    press.push(event.key)
    press.splice(-code.length-1, press.length-code.length)

    if(press.join("").includes(code)){
        console.log("SECRET CODE UNLOCKED")
        cornify_add()
    }
    console.log(press)
})

