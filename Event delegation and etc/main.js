const divs = document.querySelectorAll('div');

 function logText(e){
  console.log(this.classList.value)
  e.stopPropagation();

 }

 divs.forEach(div => div.addEventListener('click', logText, {
    //capture:true
 }))
 //Bubbling: When you click the most inner one, you also click the other two that contain it. 
//The click events are fired from the most inner to the more outer.
//Capture false makes it go from bottom up //three two one
//Capture True makes it go on reverse. //one two three
//It takes all the click events together but in different order.  
//stopPropagation stops the other events from triggering. 
//If capture true is enabled, it will fire the largest event and then stop the inner ones. 
//Once: true clicks the event and then unbinds itself from the event listener. It is similar to removing the event listener. 