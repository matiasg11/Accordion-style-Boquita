const timeNodes = [...document.querySelectorAll('[data-time]')] //This is a node list

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [min, sec] = timeCode.split(':').map(parseFloat)
        return (min*60+sec)
    })

// console.log(seconds)

const total = seconds.reduce((a,b)=> a+b,0)
const totalH = Math.floor(total/3600)
const totalMin = Math.floor(total/60) - totalH*60
const totalSec = total%60
console.log(totalH, totalMin, totalSec)