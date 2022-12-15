//Select the items and listen for a number
//Checks where it is clicked and to where it moves.
const slider = document.querySelector('.items')
let isDown = false;
let startX;
let scrollLeft;
//Mousedown, mouseleave, mouseup, mousemove
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft 
    //It starts at the position on the slider minus the margin from the page
})

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active')
})

slider.addEventListener('mouseup', () => {
    isDown = false;
    
})

slider.addEventListener('mousemove', () => {
    if(!isDown) return; //Stop the function from running
    console.log(isDown)
    console.log("Working")
})