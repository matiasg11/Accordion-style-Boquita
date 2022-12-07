const nav = document.querySelector("#main")
const topOfNav = nav.offsetTop;
function fixNav(){
    console.log(topOfNav, window.scrollY)
    if (topOfNav <= window.scrollY){ 
        //When the top of the nav is beyond the scrolled add this class
        document.body.classList.add('fixed-nav');
        //It seems solved, but a sticky element doesn't take up space in the window
        //Therefore, all the rest of the elements go up the height of the nav.
        document.body.style.paddingTop = nav.offsetHeight +"px"
        //Now it should be corrected
    }else{
        //When you haven't scrolled through the nav, let it behave normally
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0

    }

}

//The logo appearing in there is only possible when you use max-width and transitions.
//You can't use transitions with the property width.

//Run the function whenever there is a scroll
window.addEventListener('scroll', fixNav)