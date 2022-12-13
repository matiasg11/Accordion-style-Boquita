const triggers = document.querySelectorAll(".cool > li") //All the li which are direct sons of .cool (the ul)
const background = document.querySelector('.dropdownBackground') //The background, which has this class
const nav = document.querySelector('.top') //the nav, which has this class.

//What we do here is add and remove classes in each interaction.
//When I hover over an li, I want to find the dropdown and show it

function handleEnter() {
    //"this" is the li
    this.classList.add("trigger-enter")  
    //Must use arrow function because it binds the "this" to the element (li)
    //The value of "this" is inherited from the function
    //If I want to use a normal function, the "this" refers to the window object
    setTimeout(() => this.classList.add('trigger-enter-active'),150)
    //IMPORTANT: YOU CAN'T GO FROM OPACITY 0 TO 1 AND DISPLAY NONE TO OTHER IN THE SAME STEP
    //What the function does instead is add 2 new classes
    //One changes opacity and the other the display.
    //This is how transitions work in angular and react

    //Add the background behind it
    background.classList.add('open')

    //Locate the place where the dropdown is and place it there
    //It has to work only for the dropdown that we want and not all of them
    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
    }

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)

}

function handleLeave() {
    //Remove opacity and/or display
    this.classList.remove('trigger-enter')
    background.classList.remove('open')
    
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
