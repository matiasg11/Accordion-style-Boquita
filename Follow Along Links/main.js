const triggers = document.querySelectorAll('a') //We want to use this background for every anchor element
const highlight = document.createElement('span'); 
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink(){
    const linkCoords = this.getBoundingClientRect() //This gives all the information of where on the page the element is located
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
    }
    highlight.style.width = `${coords.width}px`
    highlight.style.height = `${coords.height}px`
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`



}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
