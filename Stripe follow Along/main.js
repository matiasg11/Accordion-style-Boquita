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
     setTimeout(() => {

     })

}

function handleLeave() {

    
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
